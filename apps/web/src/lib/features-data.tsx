import type { ReactNode } from "react"
import {
  Calendar,
  User,
  CreditCard,
  Search,
  Filter,
  Printer,
  Share2,
  MessageSquare,
  BarChart,
  Bell,
  ShoppingCart,
  Sparkles,
} from "lucide-react"

export type FeatureCategory = "planning" | "recipes" | "community" | "account" | "subscription"

export interface Feature {
  id: string
  title: string
  description: string
  category: FeatureCategory
  details: string[]
  icon: ReactNode
  image?: string
}

export const features: Feature[] = [
  {
    id: "1",
    title: "Planification hebdomadaire",
    description: "Planifiez vos repas pour la semaine entière",
    category: "planning",
    icon: <Calendar className="h-5 w-5 text-blue-500" />,
    details: [
      "Vue hebdomadaire avec tous les repas",
      "Générer une liste de recettes",
      "Ajout de recettes à votre planning",
      "Choisissez les recettes qui vous plaisent",
      "Ajout rapide de recettes à votre planning",
      "Visualisation par jour, semaine ou mois",
    ]
  },
  {
    id: "2",
    title: "Générateur de recettes IA",
    description: "Obtenez des suggestions de recettes personnalisées grâce à l'intelligence artificielle",
    category: "recipes",
    icon: <Sparkles className="h-5 w-5 text-purple-500" />,
    details: [
      "Suggestions basées sur vos préférences alimentaires",
      "Personnalisation selon vos restrictions alimentaires",
      "Génération de recettes originales",
    ]
  },
  {
    id: "3",
    title: "Recherche avancée",
    description: "Trouvez rapidement des recettes avec le moteur de recherche",
    category: "recipes",
    icon: <Search className="h-5 w-5 text-green-500" />,
    details: [
      "Filtrage par nom",
      "Filtrage par temps de préparation (non implémenté)",
      "Filtrage par type de cuisine",
      "Sauvegarde des recherches fréquentes (à implémenter)",
    ],
  },
  {
    id: "4",
    title: "Filtres personnalisés",
    description: "Filtrez les recettes selon vos besoins et préférences spécifiques",
    category: "recipes",
    icon: <Filter className="h-5 w-5 text-orange-500" />,
    details: [
      "Filtres par régime alimentaire (végétarien, sans gluten, etc.)",
      "Filtres par temps de préparation",
      "Filtres par niveau de difficulté",
      "Exclusion d'ingrédients spécifiques",
      "Combinaison de plusieurs filtres",
    ],
  },
  {
    id: "6",
    title: "Mode d'impression",
    description: "Imprimez vos recettes dans un format optimisé et lisible (à implémenter)",
    category: "recipes",
    icon: <Printer className="h-5 w-5 text-slate-500" />,
    details: [
      "Options pour inclure ou exclure les images",
    ],
  },
  {
    id: "7",
    title: "Partage social",
    description: "Partagez facilement vos recettes sur les réseaux sociaux",
    category: "community",
    icon: <Share2 className="h-5 w-5 text-blue-500" />,
    details: [
      "Partage direct sur Facebook, Twitter, Pinterest",
      "Envoi par email ou messagerie",
      "Création de liens partageables",
    ],
  },
  {
    id: "9",
    title: "Commentaires et avis (à implémenter)",
    description: "Échangez avec la communauté via les commentaires sur les recettes",
    category: "community",
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
    details: [
      "Commentaires sur les recettes",
      "Partage de conseils et astuces"
    ],
  },
  {
    id: "12",
    title: "Statistiques nutritionnelles (à implémenter coté frontend)",
    description: "Consultez les informations nutritionnelles détaillées pour chaque recette",
    category: "recipes",
    icon: <BarChart className="h-5 w-5 text-green-500" />,
    details: [
      "Calories par portion",
      "Macronutriments (protéines, lipides, glucides)",
      "Micronutriments essentiels",
      "Comparaison avec les apports journaliers recommandés",
      "Visualisations graphiques des valeurs nutritionnelles",
    ]
  },
  {
    id: "13",
    title: "Profil personnalisé",
    description: "Personnalisez votre profil avec vos préférences et restrictions alimentaires",
    category: "account",
    icon: <User className="h-5 w-5 text-violet-500" />,
    details: [
      "Préférences alimentaires",
      "Objectifs nutritionnels (à implémenter)",
      "Historique des recettes consultées (à implémenter)",
      "Recettes sauvegardées (à implémenter)",
      "Statistiques personnelles de cuisine (à implémenter)",
    ],
  },
  {
    id: "14",
    title: "Notifications personnalisées (à implémenter)",
    description: "Recevez des alertes pour les nouvelles recettes qui correspondent à vos goûts",
    category: "account",
    icon: <Bell className="h-5 w-5 text-pink-500" />,
    details: [
      "Alertes pour les nouvelles recettes similaires",
      "Rappels de planification de repas",
      "Notifications de commentaires et réponses",
      "Alertes de saison pour les ingrédients",
      "Personnalisation complète des notifications",
    ],
  },
  {
    id: "16",
    title: "Liste de courses intelligente (à implémenter)",
    description: "Générez automatiquement votre liste de courses basée sur votre planning de repas",
    category: "planning",
    icon: <ShoppingCart className="h-5 w-5 text-emerald-500" />,
    details: [
      "Génération automatique basée sur les recettes planifiées",
      "Organisation par rayons de supermarché",
      "Ajustement des quantités selon le nombre de portions",
      "Ajout manuel d'articles supplémentaires"
    ],
  },
  {
    id: "19",
    title: "Abonnement via Stripe",
    description: "Choisissez parmi différentes formules d'abonnement",
    category: "subscription",
    icon: <CreditCard className="h-5 w-5 text-indigo-500" />,
    details: [
      "Plans mensuels ou annuels",
      "Différents niveaux d'abonnement (2 pour l'instant)",
      "Annulation depuis le profil utilisateur",
    ],
  }
]
