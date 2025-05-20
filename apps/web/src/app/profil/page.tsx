"use client"

import { useState } from "react"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileTabs } from "@/components/profile/profile-tabs"
import { ProfileForm } from "@/components/profile/profile-form"
import { SavedRecipes } from "@/components/profile/saved-recipes"
import { SubscriptionManagement } from "@/components/profile/subscription-management"
import { PaymentHistory } from "@/components/profile/payment-history"
import { User } from "@cook/validations"
import { useUser } from "@/contexts/UserContext"
import { trpcClient } from "@cook/trpc-client/client"

export default function ProfilePage() {
  const { user } = useUser();

  const [activeTab, setActiveTab] = useState("informations")

  const [profile, setProfile] = useState<User>();

  const { data } = trpcClient.users.getProfile.useQuery(
    undefined,
    {
      onSuccess: (data) => {
        setProfile(data);
      },
      enabled: !!user?.id,
    }
  )

  const handleProfileUpdate = (updatedProfile: Partial<User>) => {
    if(profile)
      setProfile({
        id: updatedProfile.id || profile?.id,
        aud: updatedProfile.aud || profile?.aud,
        username: updatedProfile.username || profile?.username,
        email: updatedProfile.email || profile?.email,
        dietaryPreferences: updatedProfile.dietaryPreferences || profile?.dietaryPreferences,
        createdAt: profile?.createdAt,
        updatedAt: updatedProfile.updatedAt || profile?.updatedAt,
      })
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-medium">Chargement du profil...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Mon Profil</h1>

      <ProfileHeader profile={profile} />

      <div className="mt-8">
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === "informations" && <ProfileForm user={profile} onUpdate={handleProfileUpdate} />}

          {activeTab === "recettes-sauvegardees" && (
            <SavedRecipes />
          )}

          {activeTab === "abonnement" && (
            <div className="space-y-8">
              <SubscriptionManagement />
              <PaymentHistory />
            </div>
          )}

          {/*activeTab === "statistiques" && <UserStats stats={profile.stats} />*/}
        </div>
      </div>
    </div>
  )
}
