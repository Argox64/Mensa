"use client"

import { useEffect, useState } from "react"
import { CheckCircle, ChevronRight, Download, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { trpcClient } from "@cook/trpc-client/client"
import { useSearchParams } from 'next/navigation';

export default function SubscriptionConfirmationPage() {
  const searchParams = useSearchParams();
  const session_id = searchParams.get('session_id');
  const [price, setPrice] = useState<number>(0)

  const t = trpcClient.payment.getSession.useQuery({ sessionId: session_id as string }, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: (data) => {
      setPrice(data.amount_total as number / 100)
    },
  })

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Merci pour votre abonnement !</h1>
          <p className="text-muted-foreground">
            Votre abonnement Premium a été activé avec succès. Vous pouvez maintenant profiter de toutes les
            fonctionnalités premium.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Détails de la commande</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Plan</span>
              <span>Premium Annuel</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Méthode de paiement</span>
              <span className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2" />
                  Stripe
              </span>
            </div>

            <Separator />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{price} €</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => window.print()}>
              <Download className="h-4 w-4 mr-2" />
              Télécharger le reçu
            </Button>
          </CardFooter>
        </Card>

        <Card className="mb-8 border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Votre abonnement est actif</h3>
                <p className="text-sm text-muted-foreground">
                  Votre abonnement Premium est désormais actif et se renouvellera automatiquement à la fin de la période d'abonnement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/recipes">
              Explorer les recettes premium
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/profil">Gérer mon abonnement</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
