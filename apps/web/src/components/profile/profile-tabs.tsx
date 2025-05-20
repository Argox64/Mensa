"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProfileTabsProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="informations">Informations</TabsTrigger>
        <TabsTrigger value="recettes-sauvegardees">Recettes sauvegardées</TabsTrigger>
        <TabsTrigger value="abonnement">Abonnement</TabsTrigger>
        <TabsTrigger value="statistiques">Statistiques</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
