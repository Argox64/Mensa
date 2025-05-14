"use client"

import { useState } from "react"
import {
  BookOpen,
  Share2,
  ThumbsUp,
  Clock,
  Award,
  TrendingUp,
  Calendar,
  ChefHat,
  Utensils,
  Activity,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { UserStats as UserStatsType } from "@/lib/types"

interface UserStatsProps {
  stats: UserStatsType
}

export function UserStats({ stats }: UserStatsProps) {
  const [timeRange, setTimeRange] = useState<"week" | "month" | "year">("month")

  // Calculer le pourcentage pour le niveau culinaire
  const culinaryLevelPercentage = () => {
    const levels = ["Débutant", "Amateur", "Intermédiaire", "Avancé", "Chef"]
    const currentIndex = levels.indexOf(stats.culinaryLevel)
    return ((currentIndex + 1) / levels.length) * 100
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="activity">Activité récente</TabsTrigger>
          <TabsTrigger value="preferences">Préférences</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Statistiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Recettes sauvegardées</CardDescription>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{stats.savedRecipes}</CardTitle>
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Recettes partagées</CardDescription>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{stats.sharedRecipes}</CardTitle>
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>J'aime reçus</CardDescription>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{stats.likesReceived}</CardTitle>
                  <ThumbsUp className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Temps de cuisine</CardDescription>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{stats.cookingTime}h</CardTitle>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Niveau culinaire */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Niveau culinaire
              </CardTitle>
              <CardDescription>Votre progression culinaire basée sur votre activité</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{stats.culinaryLevel}</span>
                  <Badge variant="outline">{Math.round(culinaryLevelPercentage())}% complété</Badge>
                </div>
                <Progress value={culinaryLevelPercentage()} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Débutant</span>
                  <span>Amateur</span>
                  <span>Intermédiaire</span>
                  <span>Avancé</span>
                  <span>Chef</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Catégories préférées */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Utensils className="h-5 w-5 mr-2" />
                Catégories préférées
              </CardTitle>
              <CardDescription>Les types de cuisine que vous préférez</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.topCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{category.name}</span>
                      <span className="text-muted-foreground">{category.count} recettes</span>
                    </div>
                    <Progress
                      value={(category.count / Math.max(...stats.topCategories.map((c) => c.count))) * 100}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          {/* Sélecteur de période */}
          <div className="flex justify-end">
            <Tabs value={timeRange} onValueChange={(value) => setTimeRange(value as "week" | "month" | "year")}>
              <TabsList>
                <TabsTrigger value="week">Semaine</TabsTrigger>
                <TabsTrigger value="month">Mois</TabsTrigger>
                <TabsTrigger value="year">Année</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Activité récente */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Activité récente
              </CardTitle>
              <CardDescription>Vos dernières actions sur la plateforme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {stats.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${activity.color}`}>{activity.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Graphique d'activité (simulé) */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Tendance d'activité
              </CardTitle>
              <CardDescription>Votre activité au fil du temps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground">Graphique d'activité (à implémenter)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          {/* Habitudes de cuisine */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ChefHat className="h-5 w-5 mr-2" />
                Habitudes de cuisine
              </CardTitle>
              <CardDescription>Vos préférences basées sur votre activité</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Moment préféré</h3>
                  <div className="flex justify-between items-center">
                    <span>Matin</span>
                    <Progress value={15} className="w-24 h-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Midi</span>
                    <Progress value={35} className="w-24 h-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Soir</span>
                    <Progress value={50} className="w-24 h-2" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Durée moyenne</h3>
                  <div className="flex justify-between items-center">
                    <span>Rapide (&lt;30min)</span>
                    <Progress value={60} className="w-24 h-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Moyen (30-60min)</span>
                    <Progress value={30} className="w-24 h-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Long (&gt;60min)</span>
                    <Progress value={10} className="w-24 h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calendrier d'activité */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Calendrier d'activité
              </CardTitle>
              <CardDescription>Vos jours les plus actifs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground">Calendrier d'activité (à implémenter)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
