"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Save, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { NotificationSettingSchema, User, UserSchema } from "@cook/validations"

interface ProfileFormProps {
  user: User
  onUpdate: (updatedProfile: Partial<User>) => void
}

const formSchema = UserSchema.pick({
  username: true,
  email: true,
  dietaryPreferences: true
}).extend({
  notitifications: NotificationSettingSchema.pick({
    emailEnabled: true,
    pushEnabled: true,
    weeklyDigest: true,
    newFeatures: true
  })
});

export function ProfileForm({ user, onUpdate }: ProfileFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>(user.dietaryPreferences || [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user.username,
      email: user.email,
      dietaryPreferences: user.dietaryPreferences || []
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)

    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    onUpdate({
      username: values.username,
      email: values.email,
      dietaryPreferences: values.dietaryPreferences
    })

    setIsSubmitting(false)
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été enregistrées avec succès.",
    })
  }

  const dietaryOptions = [
    "Végétarien",
    "Végétalien",
    "Sans gluten",
    "Sans lactose",
    "Paléo",
    "Cétogène",
    "Pescétarien",
    "Flexitarien",
    "Sans noix",
  ]

  const togglePreference = (preference: string) => {
    setSelectedPreferences((current) => {
      const updated = current.includes(preference) ? current.filter((p) => p !== preference) : [...current, preference]

      form.setValue("dietaryPreferences", updated)
      return updated
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Informations personnelles</CardTitle>
            <CardDescription>Mettez à jour vos informations personnelles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse email</FormLabel>
                    <FormControl>
                      <Input placeholder="votre@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Préférences alimentaires</CardTitle>
            <CardDescription>
              Sélectionnez vos préférences alimentaires pour des recommandations personnalisées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((preference) => (
                <Badge
                  key={preference}
                  variant={selectedPreferences.includes(preference) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => togglePreference(preference)}
                >
                  {preference}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Gérez vos préférences de notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={Boolean(field.value)} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Notifications par email</FormLabel>
                    <FormDescription>
                      Recevez des emails concernant les nouvelles recettes, les événements et les mises à jour.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notitifications.pushEnabled"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Notifications push</FormLabel>
                    <FormDescription>
                      Recevez des notifications push pour les rappels de planification et les suggestions de recettes.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Annuler</Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enregistrement...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Enregistrer les modifications
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
