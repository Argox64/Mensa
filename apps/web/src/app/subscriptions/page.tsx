"use client"

import { useState } from "react"
import { CheckCircle2, ChevronRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { SubscriptionPlanSelector } from "@/components/subscription/subscription-plan-selector"
import { PaymentForm } from "@/components/subscription/payment-form"
import { Plan } from "@cook/validations"
import { trpcClient } from "@cook/trpc-client/client"

export default function SubscriptionsPage() {
  const [billingCycle, setBillingCycle] = useState<"MONTHLY" | "YEARLY">("MONTHLY")
  //const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [subscriptionPlans, setSubscriptionPlans] = useState<Plan[]>([])

  trpcClient.plans.getPlans.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: (data) => {
      setSubscriptionPlans(data)
      console.log("Subscription plans:", data)
    },
  });

  const createSubscription = trpcClient.subscriptions.createSubscription.useMutation({
    onSuccess: (data) => {
      console.log("Subscription created:", data);
      window.location.href = data.url as string; // Redirect to Stripe Checkout
    },
    onError: (error) => {
      console.error("Error creating subscription:", error)
    },
  });

  const handlePlanSelect = (plan: Plan) => {
    createSubscription.mutate({
      planId: plan.id,
      billingCycle: billingCycle,
    });
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Abonnements Premium</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Débloquez toutes les fonctionnalités de notre application de recettes avec un abonnement premium et profitez
            d'une expérience culinaire sans limites.
          </p>
        </div>
        <>
          <Tabs
            defaultValue="MONTHLY"
            className="w-full mb-8"
            onValueChange={(value) => setBillingCycle(value as "MONTHLY" | "YEARLY")}
          >
            <div className="flex justify-center mb-8">
              <TabsList >
                <TabsTrigger value="MONTHLY">Mensuel</TabsTrigger>
                <TabsTrigger value="YEARLY">
                  Annuel
                  <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                    -20%
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="MONTHLY">
              <SubscriptionPlanSelector
                plans={subscriptionPlans}
                billingCycle="MONTHLY"
                onSelectPlan={handlePlanSelect}
              />
            </TabsContent>

            <TabsContent value="YEARLY">
              <SubscriptionPlanSelector
                plans={subscriptionPlans}
                billingCycle="YEARLY"
                onSelectPlan={handlePlanSelect}
              />
            </TabsContent>
          </Tabs>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-center">Pourquoi s'abonner ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Recettes exclusives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Accédez à notre bibliothèque de recettes premium créées par des chefs professionnels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Planification avancée</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Planifiez vos repas sur plusieurs semaines et générez automatiquement des listes de courses.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Sans publicités</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Profitez d'une expérience sans publicités et sans interruptions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 bg-muted p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Shield className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-2">Satisfaction garantie</h3>
                <p className="text-muted-foreground mb-4">
                  Nous sommes convaincus que vous allez adorer nos fonctionnalités premium. Si vous n'êtes pas
                  satisfait, nous vous remboursons intégralement dans les 14 jours suivant votre abonnement.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  En savoir plus <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}
