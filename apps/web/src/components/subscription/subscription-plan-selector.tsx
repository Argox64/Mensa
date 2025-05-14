"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plan } from "@cook/validations"

interface SubscriptionPlanSelectorProps {
  plans: Plan[]
  billingCycle: "MONTHLY" | "YEARLY"
  onSelectPlan: (plan: Plan) => void
}

export function SubscriptionPlanSelector({ plans, billingCycle, onSelectPlan }: SubscriptionPlanSelectorProps) {
  const getSavings = (monthlyPrice: number, yearlyPrice: number) => {
    return monthlyPrice * 12 - yearlyPrice;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {plans.map((plan) => {
        const yearlyPriceFloat = plan.yearlyPrice / 100;
        const monthlyPriceFloat = plan.monthlyPrice / 100;
        const savings = getSavings(plan.monthlyPrice, plan.yearlyPrice) / 100;

        return (
          <Card key={plan.id} className={`relative ${/*plan.popular ? */"border-primary shadow-md"/* : ""*/}`}>
            {/*plan.popular && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                Le plus populaire
              </Badge>
            )*/}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{billingCycle === "MONTHLY" ? monthlyPriceFloat : yearlyPriceFloat}€</span>
                  <span className="text-muted-foreground ml-1">/{billingCycle === "MONTHLY" ? "mois" : "an"}</span>
                </div>
                {(billingCycle === "YEARLY" && savings !== 0) ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">{monthlyPriceFloat * 12}€</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      Économisez {savings}€
                    </Badge>
                  </div>
                ): (
                <div className="h-6">
                </div>
                )}
              </div>

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
              <Button
                className="w-full"
                variant={/*plan.popular ? "default" :*/ "outline"}
                onClick={() => onSelectPlan(plan)}
              >
                {/*plan.id === "free" ? "Plan actuel" : "Choisir ce plan"*/}
                Choisir ce plan
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
