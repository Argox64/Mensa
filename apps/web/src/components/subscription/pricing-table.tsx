/*"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export function PricingTable() {
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Plans et tarifs</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choisissez le plan qui correspond à vos besoins culinaires. Tous les plans incluent une période d'essai de 14
          jours.
        </p>
      </div>

      <Tabs defaultValue="monthly" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="monthly">Mensuel</TabsTrigger>
            <TabsTrigger value="yearly">
              Annuel
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                -20%
              </Badge>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="monthly">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} billingCycle="monthly" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="yearly">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} billingCycle="yearly" />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">Besoin d'une solution pour votre entreprise ?</p>
        <Button variant="outline" asChild>
          <Link href="/contact">Contactez-nous pour un plan personnalisé</Link>
        </Button>
      </div>
    </div>
  )
}

interface PricingCardProps {
  plan: (typeof subscriptionPlans)[0]
  billingCycle: "monthly" | "yearly"
}

function PricingCard({ plan, billingCycle }: PricingCardProps) {
  const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
  const isFree = plan.id === "free"

  return (
    <Card className={`flex flex-col h-full ${plan.popular ? "border-primary shadow-md relative" : ""}`}>
      {plan.popular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-white">
          Le plus populaire
        </Badge>
      )}
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
        <div className="mt-4">
          {price === 0 ? (
            <div className="text-3xl font-bold">Gratuit</div>
          ) : (
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">{price}€</span>
              <span className="text-muted-foreground ml-1">/{billingCycle === "monthly" ? "mois" : "an"}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
          <Link href={isFree ? "/inscription" : "/abonnements"}>
            {isFree ? "S'inscrire gratuitement" : "Choisir ce plan"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
*/