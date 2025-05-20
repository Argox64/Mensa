"use client"

import { useState } from "react"
import {
  Download,
  Search,
  Filter,
  CreditCard,
  Calendar,
  CheckCircle,
  XCircle
} from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { trpcClient } from "@cook/trpc-client/client"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "../ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export function PaymentHistory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [dateFilter, setDateFilter] = useState<string | null>(null)

  const { data: allInvoices = [], isLoading, isError } = trpcClient.payment.getPayments.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  if (isLoading) return <p>Chargement...</p>
  if (isError) return <p>Une erreur est survenue lors du chargement des paiements.</p>

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="mr-2 h-5 w-5" />
          Historique des paiements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher par numéro ou description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex items-center gap-2 bg-muted/30 px-3 py-1 rounded-md">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select
                value={statusFilter || "all"}
                onValueChange={(value) => setStatusFilter(value === "all" ? null : value)}
              >
                <SelectTrigger className="w-[150px] border-0 bg-transparent p-0 h-8 focus:ring-0">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="paid">Payé</SelectItem>
                  <SelectItem value="failed">Échoué</SelectItem>
                  <SelectItem value="refunded">Remboursé</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 bg-muted/30 px-3 py-1 rounded-md">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select
                value={dateFilter || "all"}
                onValueChange={(value) => setDateFilter(value === "all" ? null : value)}
              >
                <SelectTrigger className="w-[150px] border-0 bg-transparent p-0 h-8 focus:ring-0">
                  <SelectValue placeholder="Période" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les périodes</SelectItem>
                  <SelectItem value="last_month">Dernier mois</SelectItem>
                  <SelectItem value="last_3_months">3 derniers mois</SelectItem>
                  <SelectItem value="last_year">Dernière année</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {!allInvoices || allInvoices?.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Aucun paiement trouvé</h3>
            <p className="text-muted-foreground">Aucun paiement ne correspond à vos critères de recherche.</p>
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Numéro</TableHead>
                  <TableHead>Date</TableHead>
                  {/*<TableHead>Description</TableHead>*/}
                  <TableHead>Montant</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{format(new Date(invoice.status_transitions.paid_at as number * 1000), "d MMM yyyy", { locale: fr })}</TableCell>
                    {/*<TableCell>{payment.description}</TableCell>*/}
                    <TableCell>{invoice.amount_due / 100}€</TableCell>
                    <TableCell>
                      {invoice.status === "paid" && (
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Payé
                        </Badge>
                      )}
                      {invoice.status === "open" && (
                        <Badge variant="outline" className="bg-sky-100 text-sky-800 border-sky-200">
                          Annulé
                        </Badge>
                      )}
                      {invoice.status === "uncollectible" || invoice.status === "void" && (
                        <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                          <XCircle className="h-3 w-3 mr-1" />
                          Échoué
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {invoice.status === "paid" && (
                        <Button variant="ghost" size="sm" onClick={() => window.open(invoice.invoice_pdf as string, '_blank', 'noopener,noreferrer')}>
                          <Download className="h-4 w-4 mr-2" />
                          Reçu
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
