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

  const { data: allPayments = [], isLoading, isError } = trpcClient.payment.getPayments.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  if (isLoading) return <p>Chargement...</p>
  if (isError) return <p>Une erreur est survenue lors du chargement des paiements.</p>

  /*const filteredPayments = allPayments.filter((payment) => {
    if (
      searchQuery &&
      !payment.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !payment.number.toLowerCase().includes(searchQuery.toLowerCase())
    ) return false

    if (statusFilter && payment.status !== statusFilter) return false

    if (dateFilter) {
      const paymentDate = new Date(payment.date)
      const currentDate = new Date()

      if (dateFilter === "last_month") {
        const lastMonth = new Date()
        lastMonth.setMonth(currentDate.getMonth() - 1)
        if (paymentDate < lastMonth) return false
      } else if (dateFilter === "last_3_months") {
        const last3Months = new Date()
        last3Months.setMonth(currentDate.getMonth() - 3)
        if (paymentDate < last3Months) return false
      } else if (dateFilter === "last_year") {
        const lastYear = new Date()
        lastYear.setFullYear(currentDate.getFullYear() - 1)
        if (paymentDate < lastYear) return false
      }
    }

    return true
  })

  const sortedPayments = [...filteredPayments].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )*/

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

        {allPayments.length === 0 ? (
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
                  <TableHead>Méthode</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allPayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{format(new Date(payment.createdAt), "d MMM yyyy", { locale: fr })}</TableCell>
                    {/*<TableCell>{payment.description}</TableCell>*/}
                    <TableCell>{payment.amount}€</TableCell>
                    <TableCell>
                      {payment.status === "COMPLETED" && (
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Payé
                        </Badge>
                      )}
                      {payment.status === "FAILED" && (
                        <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                          <XCircle className="h-3 w-3 mr-1" />
                          Échoué
                        </Badge>
                      )}
                      {payment.status === "REFUNDED" && (
                        <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                          Remboursé
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {payment.paymentMethod === "CREDIT_CARD" && (
                        <div className="flex items-center">
                          <CreditCard className="h-3 w-3 mr-1" />
                          <span>Carte</span>
                        </div>
                      )}
                      {payment.paymentMethod === "PAYPAL" && (
                        <div className="flex items-center">
                          <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="#00457C">
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.813 4.643h-2.189c-.11 0-.203.077-.22.185l-.771 4.88 4.145-4.147h3.237a.32.32 0 0 0 .316-.269l.327-1.968.289-1.736c.455-.147.881-.347 1.327-.602z" />
                          </svg>
                          <span>PayPal</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {payment.status === "COMPLETED" && (
                        <Button variant="ghost" size="sm">
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
