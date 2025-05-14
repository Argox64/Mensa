import { UserCircle, Mail, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { User } from "@cook/validations"

interface ProfileHeaderProps {
  profile: User
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="flex flex-col items-center">
            {/*<Avatar className="h-24 w-24">
              <AvatarImage src={profile.avatar || ""} alt={profile.username} />
              <AvatarFallback className="text-2xl">
                {profile.username
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="mt-4">
              Changer la photo
            </Button>*/}
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">{profile.username}</h2>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-2 text-muted-foreground justify-center md:justify-start">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Membre depuis {format(new Date(profile.createdAt), "MMMM yyyy", { locale: fr })}</span>
              </div>
              <div className="flex items-center gap-1">
                <UserCircle className="h-4 w-4" />
                <span>{profile.aud}</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Préférences alimentaires</h3>
              <div className="flex flex-wrap gap-2">
                {profile.dietaryPreferences?.map((pref) => (
                  <Badge key={pref} variant="secondary">
                    {pref}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
