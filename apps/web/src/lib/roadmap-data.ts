export type RoadmapCategory = "feature" | "bug" | "improvement"
export type RoadmapStatus = "planned" | "in-progress" | "completed"
export type RoadmapPriority = "high" | "medium" | "low"

export interface RoadmapItem {
  id: string
  title: string
  description: string
  category: RoadmapCategory
  status: RoadmapStatus
  priority: RoadmapPriority
}

export const roadmapItems: RoadmapItem[] = [
  {
    id: "1",
    title: "Page d'accueil",
    description:
      "Ajouter du contenu à la page d'accueil en rendant la page plus engageante. Mettre en avant les recettes populaires, les fonctionnalités du site.",
    category: "feature",
    status: "planned",
    priority: "low"
  },
  {
    id: "2",
    title: "Système de favoris",
    description: "Permettre aux utilisateurs de marquer des recettes comme favorites et de les retrouver facilement.",
    category: "feature",
    status: "planned",
    priority: "medium"
  },
  {
    id: "3",
    title: "Informations nutritionnelles",
    description: "Ajouter des informations nutritionnelles détaillées pour chaque recette (calories, protéines, etc.).",
    category: "improvement",
    status: "planned",
    priority: "medium"
  },
  {
    id: "4",
    title: "Vue d'impression",
    description: "Créer une vue optimisée pour l'impression des recettes sans les éléments de navigation.",
    category: "feature",
    status: "planned",
    priority: "low"
  },
  {
    id: "5",
    title: "Partage de recettes",
    description: "Implémenter une fonctionnalité de partage de recettes via email ou réseaux sociaux.",
    category: "feature",
    status: "planned",
    priority: "medium"
  },
  {
    id: "6",
    title: "Génération de liste de courses",
    description: "Créer une fonctionnalité qui génère automatiquement une liste de courses à partir des recettes de la semaine.",
    category: "feature",
    status: "planned",
    priority: "high"
  },
  {
    id: "7",
    title: "Génération d'images pour les recettes",
    description: "Créer une fonctionnalité qui génère automatiquement une liste de courses à partir des recettes de la semaine.",
    category: "feature",
    status: "planned",
    priority: "high"
  },
  {
    id: "10",
    title: "Rendre le site responsive",
    description: "Corriger les problèmes d'affichage sur les appareils mobiles et tablettes.",
    category: "bug",
    status: "planned",
    priority: "medium"
  },
  {
    id: "11",
    title: "Notifications de confirmation",
    description: "Ajouter des notifications pour confirmer les actions des utilisateurs (sauvegarde, partage, etc.).",
    category: "improvement",
    status: "planned",
    priority: "low"
  },
  {
    id: "13",
    title: "Filtres de recherche",
    description: "Implémenter les filtres de recherche pour les recettes.",
    category: "feature",
    status: "planned",
    priority: "high"
  },
  {
    id: "14",
    title: "Historique de recherche",
    description: "Sauvegarder l'historique des recherches des utilisateurs pour faciliter les recherches répétées.",
    category: "feature",
    status: "planned",
    priority: "low"
  },
  {
    id: "15",
    title: "Système de commentaires",
    description: "Permettre aux utilisateurs de laisser des commentaires sur les recettes.",
    category: "feature",
    status: "planned",
    priority: "medium"
  },
  {
    id: "16",
    title: "Partage social",
    description: "Ajouter des boutons de partage vers les réseaux sociaux (Facebook, Twitter, Pinterest, etc.).",
    category: "feature",
    status: "planned",
    priority: "medium"
  },
  {
    id: "17",
    title: "Page de soumission de recettes",
    description: "Créer une page permettant aux utilisateurs de soumettre leurs propres recettes.",
    category: "feature",
    status: "planned",
    priority: "low"
  },
  {
    id: "18",
    title: "Statistiques nutritionnelles",
    description: "Ajouter des graphiques pour visualiser les statistiques nutritionnelles des recettes.",
    category: "improvement",
    status: "planned",
    priority: "low"
  },
  {
    id: "21",
    title: "Modification de mot de passe",
    description: "Ajouter une fonctionnalité permettant aux utilisateurs de modifier leur mot de passe.",
    category: "feature",
    status: "planned",
    priority: "medium"
  },
  {
    id: "24",
    title: "Suppression de compte",
    description: "Ajouter une option permettant aux utilisateurs de supprimer leur compte et leurs données.",
    category: "feature",
    status: "planned",
    priority: "medium"
  },
  {
    id: "25",
    title: "Connexion avec réseaux sociaux",
    description: "Ajouter des options de connexion via Facebook, Google, etc.",
    category: "feature",
    status: "planned",
    priority: "medium"
  },
  {
    id: "26",
    title: "Coupons de réduction et codes promo",
    description: "Implémenter un système de coupons de réduction pour les abonnements premium.",
    category: "feature",
    status: "planned",
    priority: "low"
  },
  {
    id: "27",
    title: "FAQ sur les abonnements",
    description: "Créer une page de FAQ dédiée aux questions sur les abonnements.",
    category: "improvement",
    status: "planned",
    priority: "low"
  },
  {
    id: "29",
    title: "Notifications par email",
    description: "Envoyer des notifications aux utilisateurs pour la confirmtion et l'expiration de leur abonnement.",
    category: "feature",
    status: "planned",
    priority: "high"
  },
  {
    id: "30",
    title: "Descriptif des plans d'abonnement",
    description: "Ajouter des descriptions détaillées pour chaque plan d'abonnement.",
    category: "feature",
    status: "in-progress",
    priority: "high"
  },
]
