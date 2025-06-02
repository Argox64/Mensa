"use client"

import { useState } from "react"
import { CreditCard, AlertCircle, CheckCircle, Download, Edit, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { format, getTime, add } from "date-fns"
import { fr } from "date-fns/locale"
import { trpcClient } from "@cook/trpc-client/client"

export function SubscriptionManagement() {
  const [showCancelDialog, setShowCancelDialog] = useState(false)
  const [cancellationReason, setCancellationReason] = useState("")
  const [isCancelling, setIsCancelling] = useState(false)

  const { data: subscription, isLoading } = trpcClient.subscriptions.getLastSubscription.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  console.log("Subscription data:", subscription)
  const isCancelled = subscription?.cancel_at_period_end === true;

  const cancelSubscription = trpcClient.subscriptions.cancelActiveSubscription.useMutation({
    onSuccess: () => {
      console.log("Subscription cancelled")
    },
    onError: (error) => {
      console.error("Error cancelling subscription:", error)
    },
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-medium">Chargement du profil...</div>
      </div>
    )
  }

  const nextBillingDate = subscription ? new Date(subscription.current_period_end) : new Date();

  const startDate = subscription ? getTime(add(nextBillingDate, subscription.billingCycle === "MONTHLY" ? { months: -1 } : { years: -1 })) : 0;
  const progress = Math.max(1, (getTime(new Date()) - getTime(nextBillingDate)) / (getTime(nextBillingDate) - startDate))

  const handleCancelSubscription = async () => {
    setIsCancelling(true)

    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Abonnement annulé, raison:", cancellationReason)

    setIsCancelling(false)
    setShowCancelDialog(false)

    cancelSubscription.mutate();

    // Fermer la boîte de dialogue après 1 seconde
    setTimeout(() => {
      setShowCancelDialog(false)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="mr-2 h-5 w-5" />
          Gestion de l'abonnement
        </CardTitle>
        <CardDescription>
          Gérez votre abonnement, consultez vos factures et mettez à jour vos informations de paiement
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Statut de l'abonnement */}
        {!subscription ?
          (<><div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-4">
              Vous avez un plan gratuit
            </p>
          </div>
            <div>
              <h3 className="font-medium mb-4">Détails de l'abonnement</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Plan</span>
                  <span className="font-medium">Gratuit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Prix</span>
                  <span>
                    0€/mois
                  </span>
                </div>
              </div>
            </div></>) : (<>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Statut de l'abonnement</h3>
                  <Badge variant={isCancelled ? "destructive" : "default"}>{isCancelled ? "Annulé" : "Actif"}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {isCancelled
                    ? "Votre abonnement a été annulé et prendra fin à la fin de la période de facturation en cours."
                    : `Votre abonnement ${subscription.Plan?.name} est actif et se renouvellera automatiquement.`}
                </p>

                
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Période en cours</span>
                      <span>
                        {format(new Date(subscription.current_period_start), "d MMMM yyyy", { locale: fr })} -{" "}
                        {format(nextBillingDate, "d MMMM yyyy", { locale: fr })}
                      </span>
                    </div>
                    <Progress value={ progress } className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>{ isCancelled ? "Fin de l'abonnement" : "Prochain renouvellement"}</span>
                      <span className="font-medium">{format(nextBillingDate, "d MMMM yyyy", { locale: fr })}</span>
                    </div>
                  </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Détails de l'abonnement</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Plan</span>
                    <span className="font-medium">{subscription.Plan?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Prix</span>
                    <span>
                      {subscription.billingCycle === "MONTHLY"
                        ? `${subscription.Plan?.monthlyPrice as number / 100}€ / mois`
                        : `${subscription.Plan?.yearlyPrice as number / 100}€ / an`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date de début</span>
                    <span>{format(new Date(subscription.current_period_start), "d MMMM yyyy", { locale: fr })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Cycle de facturation</span>
                    <span>{subscription.billingCycle === "MONTHLY" ? "Mensuel" : "Annuel"}</span>
                  </div>
                </div>
              </div></>)}


        {!isCancelled && subscription && (
          <>
            <Separator />

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  Changer de plan
                </Button>
                <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-1 text-destructive border-destructive hover:bg-destructive/10"
                    >
                      Annuler l'abonnement
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Annuler votre abonnement</DialogTitle>
                      <DialogDescription>
                        Nous sommes désolés de vous voir partir. Votre abonnement restera actif jusqu'à la fin de la
                        période de facturation en cours.
                      </DialogDescription>
                    </DialogHeader>

                    {isCancelled ? (
                      <div className="flex flex-col items-center justify-center py-4">
                        <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                        <h3 className="text-lg font-medium mb-2">Abonnement annulé</h3>
                        <p className="text-center text-muted-foreground">
                          Votre abonnement a été annulé avec succès. Vous pouvez continuer à utiliser les
                          fonctionnalités premium jusqu'à la fin de votre période de facturation.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <h3 className="font-medium">Pourquoi souhaitez-vous annuler ?</h3>
                            <select
                              className="w-full p-2 border rounded-md"
                              value={cancellationReason}
                              onChange={(e) => setCancellationReason(e.target.value)}
                            >
                              <option value="">Sélectionnez une raison</option>
                              <option value="too_expensive">C'est trop cher</option>
                              <option value="not_using">Je n'utilise pas assez le service</option>
                              <option value="missing_features">Il manque des fonctionnalités</option>
                              <option value="found_alternative">J'ai trouvé une alternative</option>
                              <option value="other">Autre raison</option>
                            </select>
                          </div>

                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-amber-800">Êtes-vous sûr ?</h4>
                              <p className="text-sm text-amber-700">
                                En annulant, vous perdrez l'accès à toutes les fonctionnalités premium à la fin de votre
                                période de facturation actuelle.
                              </p>
                            </div>
                          </div>
                        </div>

                        <DialogFooter>
                          <Button variant="outline" onClick={() => setShowCancelDialog(false)}>
                            Retour
                          </Button>
                          <Button
                            variant="destructive"
                            onClick={handleCancelSubscription}
                            disabled={!cancellationReason || isCancelling}
                          >
                            {isCancelling ? "Annulation en cours..." : "Confirmer l'annulation"}
                          </Button>
                        </DialogFooter>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Shield className="h-4 w-4 mr-2" />
                <span>Votre abonnement est protégé par notre garantie de remboursement de 14 jours</span>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
