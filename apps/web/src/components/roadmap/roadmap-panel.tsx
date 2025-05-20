"use client"

import { useState, useEffect, useRef } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { roadmapItems, type RoadmapItem, type RoadmapStatus, type RoadmapPriority } from "@/lib/roadmap-data"
import { features, type Feature, type FeatureCategory } from "@/lib/features-data"
import { Search, ArrowUpDown, CheckCircle2, Clock, AlertCircle, Lightbulb, Map } from "lucide-react"
import type { JSX } from "react"

interface RoadmapPanelProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function RoadmapPanel({ open, onOpenChange }: RoadmapPanelProps) {
    // État pour les onglets principaux (Roadmap / Fonctionnalités)
    const [mainTab, setMainTab] = useState<string>("roadmap")

    // États pour l'onglet Roadmap
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string>("all")
    const [sortOption, setSortOption] = useState<string>("priority")
    const [filteredItems, setFilteredItems] = useState<RoadmapItem[]>(roadmapItems)

    // État pour l'onglet Fonctionnalités
    const [featureSearchQuery, setFeatureSearchQuery] = useState("")
    const [selectedFeatureCategory, setSelectedFeatureCategory] = useState<string>("all")
    const [filteredFeatures, setFilteredFeatures] = useState<Feature[]>(features)

    // Filtrer et trier les éléments de la roadmap
    useEffect(() => {
        let result = [...roadmapItems]

        // Filtrer par recherche
        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            result = result.filter(
                (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
            )
        }

        // Filtrer par catégorie
        if (selectedCategory !== "all") {
            result = result.filter((item) => item.category === selectedCategory)
        }

        // Trier les éléments
        result.sort((a, b) => {
            if (sortOption === "priority") {
                const priorityOrder = { high: 0, medium: 1, low: 2 }
                return priorityOrder[a.priority] - priorityOrder[b.priority]
            } else if (sortOption === "status") {
                const statusOrder = { planned: 0, "in-progress": 1, completed: 2 }
                return statusOrder[a.status] - statusOrder[b.status]
            }
            return 0
        })

        setFilteredItems(result)
    }, [searchQuery, selectedCategory, sortOption])

    // Filtrer les fonctionnalités
    useEffect(() => {
        let result = [...features]

        // Filtrer par recherche
        if (featureSearchQuery) {
            const query = featureSearchQuery.toLowerCase()
            result = result.filter(
                (feature) =>
                    feature.title.toLowerCase().includes(query) ||
                    feature.description.toLowerCase().includes(query) ||
                    feature.details.some((detail) => detail.toLowerCase().includes(query)),
            )
        }

        // Filtrer par catégorie
        if (selectedFeatureCategory !== "all") {
            result = result.filter((feature) => feature.category === selectedFeatureCategory)
        }

        setFilteredFeatures(result)
    }, [featureSearchQuery, selectedFeatureCategory])

    // Obtenir le nombre d'éléments par catégorie
    const getCategoryCount = (category: string) => {
        if (category === "all") return roadmapItems.length
        return roadmapItems.filter((item) => item.category === category).length
    }

    // Obtenir le nombre de fonctionnalités par catégorie
    const getFeatureCategoryCount = (category: string) => {
        if (category === "all") return features.length
        return features.filter((feature) => feature.category === category).length
    }

    // Obtenir la couleur de badge pour le statut
    const getStatusColor = (status: RoadmapStatus) => {
        switch (status) {
            case "planned":
                return "bg-slate-500"
            case "in-progress":
                return "bg-blue-500"
            case "completed":
                return "bg-green-500"
            default:
                return "bg-slate-500"
        }
    }

    // Obtenir l'icône pour le statut
    const getStatusIcon = (status: RoadmapStatus) => {
        switch (status) {
            case "planned":
                return <Clock className="h-4 w-4 mr-1" />
            case "in-progress":
                return <AlertCircle className="h-4 w-4 mr-1" />
            case "completed":
                return <CheckCircle2 className="h-4 w-4 mr-1" />
            default:
                return <Clock className="h-4 w-4 mr-1" />
        }
    }

    // Obtenir la couleur de badge pour la priorité
    const getPriorityColor = (priority: RoadmapPriority) => {
        switch (priority) {
            case "high":
                return "bg-red-500"
            case "medium":
                return "bg-orange-500"
            case "low":
                return "bg-yellow-500"
            default:
                return "bg-slate-500"
        }
    }

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="right" className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl p-0 flex flex-col">
                <SheetHeader className="p-6">
                    <div className="flex justify-between items-center">
                        <SheetTitle className="text-2xl">
                            {mainTab === "roadmap" ? "Roadmap & Problèmes" : "Fonctionnalités"}
                        </SheetTitle>
                    </div>
                    <SheetDescription>
                        {mainTab === "roadmap"
                            ? "Suivez l'avancement des fonctionnalités et des corrections"
                            : "Découvrez comment utiliser toutes les fonctionnalités disponibles"}
                    </SheetDescription>
                </SheetHeader>

                {/* Onglets principaux */}
                <Tabs defaultValue="roadmap" className="flex-1 flex flex-col" onValueChange={setMainTab} value={mainTab}>
                    <TabsList className="px-6 pt-2 justify-center border-b rounded-none h-auto">
                        <TabsTrigger value="roadmap" className="data-[state=active]:bg-slate-100 gap-2">
                            <Map className="h-4 w-4" />
                            Roadmap
                        </TabsTrigger>
                        <TabsTrigger value="features" className="data-[state=active]:bg-slate-100 gap-2">
                            <Lightbulb className="h-4 w-4" />
                            Fonctionnalités
                        </TabsTrigger>
                    </TabsList>

                    {/* Contenu de l'onglet Roadmap */}
                    <TabsContent value="roadmap" className="m-0 p-0 flex-1 data-[state=active]:flex flex-col">
                        <div className="p-6 border-b">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Rechercher..."
                                        className="pl-8"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <Select value={sortOption} onValueChange={setSortOption}>
                                    <SelectTrigger className="w-full sm:w-[180px]">
                                        <ArrowUpDown className="mr-2 h-4 w-4" />
                                        <SelectValue placeholder="Trier par" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="priority">Priorité</SelectItem>
                                        <SelectItem value="status">Statut</SelectItem>
                                        <SelectItem value="date">Date</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Tabs defaultValue="all" className="flex-1 flex flex-col" onValueChange={setSelectedCategory}>
                            <TabsList className="px-6 pt-2 justify-start border-b rounded-none h-auto flex-wrap">
                                <TabsTrigger value="all" className="data-[state=active]:bg-slate-100">
                                    Tous
                                    <Badge variant="secondary" className="ml-2">
                                        {getCategoryCount("all")}
                                    </Badge>
                                </TabsTrigger>
                                <TabsTrigger value="feature" className="data-[state=active]:bg-slate-100">
                                    Fonctionnalités
                                    <Badge variant="secondary" className="ml-2">
                                        {getCategoryCount("feature")}
                                    </Badge>
                                </TabsTrigger>
                                <TabsTrigger value="bug" className="data-[state=active]:bg-slate-100">
                                    Bugs
                                    <Badge variant="secondary" className="ml-2">
                                        {getCategoryCount("bug")}
                                    </Badge>
                                </TabsTrigger>
                                <TabsTrigger value="improvement" className="data-[state=active]:bg-slate-100">
                                    Améliorations
                                    <Badge variant="secondary" className="ml-2">
                                        {getCategoryCount("improvement")}
                                    </Badge>
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="all" className="m-0 p-0 data-[state=active]:flex-1">
                                <RoadmapItemsList
                                    items={filteredItems}
                                    getStatusColor={getStatusColor}
                                    getStatusIcon={getStatusIcon}
                                    getPriorityColor={getPriorityColor}
                                />

                            </TabsContent>
                            <TabsContent value="feature" className="m-0 p-0 data-[state=active]:flex-1">
                                <RoadmapItemsList
                                    items={filteredItems}
                                    getStatusColor={getStatusColor}
                                    getStatusIcon={getStatusIcon}
                                    getPriorityColor={getPriorityColor}
                                />
                            </TabsContent>
                            <TabsContent value="bug" className="m-0 p-0 data-[state=active]:flex-1">
                                <RoadmapItemsList
                                    items={filteredItems}
                                    getStatusColor={getStatusColor}
                                    getStatusIcon={getStatusIcon}
                                    getPriorityColor={getPriorityColor}
                                />
                            </TabsContent>
                            <TabsContent value="improvement" className="m-0 p-0 data-[state=active]:flex-1">

                                <RoadmapItemsList
                                    items={filteredItems}
                                    getStatusColor={getStatusColor}
                                    getStatusIcon={getStatusIcon}
                                    getPriorityColor={getPriorityColor}
                                />
                            </TabsContent>
                        </Tabs>

                        <div className="p-4 border-t">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">
                                    {filteredItems.length} élément{filteredItems.length !== 1 ? "s" : ""} affiché
                                    {filteredItems.length !== 1 ? "s" : ""}
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setSearchQuery("")
                                        setSelectedCategory("all")
                                        setSortOption("priority")
                                    }}
                                >
                                    Réinitialiser les filtres
                                </Button>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Contenu de l'onglet Fonctionnalités */}
                    <TabsContent value="features" className="m-0 p-0 flex-1 flex flex-col">
                        <div className="p-6 border-b">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Rechercher une fonctionnalité..."
                                    className="pl-8"
                                    value={featureSearchQuery}
                                    onChange={(e) => setFeatureSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <Tabs defaultValue="all" className="flex-1 flex flex-col" onValueChange={setSelectedFeatureCategory}>
                            <TabsList className="px-6 pt-2 justify-start border-b rounded-none h-auto flex-wrap">
                                <TabsTrigger value="all" className="data-[state=active]:bg-slate-100">
                                    Toutes
                                    <Badge variant="secondary" className="ml-2">
                                        {getFeatureCategoryCount("all")}
                                    </Badge>
                                </TabsTrigger>
                                <TabsTrigger value="planning" className="data-[state=active]:bg-slate-100">
                                    Planification
                                    <Badge variant="secondary" className="ml-2">
                                        {getFeatureCategoryCount("planning")}
                                    </Badge>
                                </TabsTrigger>
                                <TabsTrigger value="recipes" className="data-[state=active]:bg-slate-100">
                                    Recettes
                                    <Badge variant="secondary" className="ml-2">
                                        {getFeatureCategoryCount("recipes")}
                                    </Badge>
                                </TabsTrigger>
                                <TabsTrigger value="community" className="data-[state=active]:bg-slate-100">
                                    Communauté
                                    <Badge variant="secondary" className="ml-2">
                                        {getFeatureCategoryCount("community")}
                                    </Badge>
                                </TabsTrigger>
                                <TabsTrigger value="account" className="data-[state=active]:bg-slate-100">
                                    Compte
                                    <Badge variant="secondary" className="ml-2">
                                        {getFeatureCategoryCount("account")}
                                    </Badge>
                                </TabsTrigger>
                                <TabsTrigger value="subscription" className="data-[state=active]:bg-slate-100">
                                    Abonnement
                                    <Badge variant="secondary" className="ml-2">
                                        {getFeatureCategoryCount("subscription")}
                                    </Badge>
                                </TabsTrigger>
                            </TabsList>
                            <FeaturesTabsContent
                                features={filteredFeatures}
                            />
                        </Tabs>

                        <div className="p-4 border-t">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">
                                    {filteredFeatures.length} fonctionnalité{filteredFeatures.length !== 1 ? "s" : ""} affichée
                                    {filteredFeatures.length !== 1 ? "s" : ""}
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setFeatureSearchQuery("")
                                        setSelectedFeatureCategory("all")
                                    }}
                                >
                                    Réinitialiser les filtres
                                </Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </SheetContent>
        </Sheet>
    )
}

interface RoadmapItemsListProps {
    items: RoadmapItem[]
    getStatusColor: (status: RoadmapStatus) => string
    getStatusIcon: (status: RoadmapStatus) => JSX.Element
    getPriorityColor: (priority: RoadmapPriority) => string
}

function RoadmapItemsList({
    items,
    getStatusColor,
    getStatusIcon,
    getPriorityColor,
}: RoadmapItemsListProps) {
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
    const ref = useRef<HTMLDivElement>(null);
    const [remainingHeight, setRemainingHeight] = useState(0);

    useEffect(() => {
        function updateHeight() {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setRemainingHeight(Math.trunc(window.innerHeight - rect.top));
            }
        }

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const toggleItem = (id: string) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="rounded-full bg-slate-100 p-3 mb-4">
                    <Search className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium">Aucun élément trouvé</h3>
                <p className="text-sm text-muted-foreground mt-1">Essayez de modifier vos filtres ou votre recherche</p>
            </div>
        )
    }
    console.log("Remaining height:", remainingHeight)

    return (
        <div className="flex-1 h-full">
            <ScrollArea className={"flex-1 overflow-auto"} ref={ref} style={{ height: remainingHeight - 70 }}>
                <div className="divide-y">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`p-4 transition-colors hover:bg-slate-50 cursor-pointer ${expandedItems[item.id] ? "bg-slate-50" : ""}`}
                            onClick={() => toggleItem(item.id)}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                        <Badge className={`${getPriorityColor(item.priority)} text-white`}>
                                            {item.priority === "high" ? "Haute" : item.priority === "medium" ? "Moyenne" : "Basse"}
                                        </Badge>
                                        <Badge className={`${getStatusColor(item.status)} text-white flex items-center`}>
                                            {getStatusIcon(item.status)}
                                            {item.status === "planned" ? "Planifié" : item.status === "in-progress" ? "En cours" : "Terminé"}
                                        </Badge>
                                        <Badge variant="outline">
                                            {item.category === "feature" ? "Fonctionnalité" : item.category === "bug" ? "Bug" : "Amélioration"}
                                        </Badge>
                                    </div>
                                    <h3 className="font-medium">{item.title}</h3>
                                </div>
                            </div>

                            {expandedItems[item.id] && (
                                <div className="mt-2 text-sm text-slate-600 border-t pt-2">
                                    <p>{item.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

interface FeatureItemProps {
    feature: Feature
    getCategoryColor: (category: FeatureCategory) => string
}

function FeatureItem({ feature, getCategoryColor }: FeatureItemProps) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div
            className={`p-4 transition-colors hover:bg-slate-50 cursor-pointer ${expanded ? "bg-slate-50" : ""}`}
            onClick={() => setExpanded(!expanded)}
        >
            <div className="flex items-start">
                <div className="mr-4 mt-1">{feature.icon}</div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Badge className={getCategoryColor(feature.category)}>
                            {feature.category === "planning"
                                ? "Planification"
                                : feature.category === "recipes"
                                    ? "Recettes"
                                    : feature.category === "community"
                                        ? "Communauté"
                                        : feature.category === "account"
                                            ? "Compte"
                                            : "Abonnement"}
                        </Badge>
                        {feature.premium && (
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-300">
                                Premium
                            </Badge>
                        )}
                    </div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{feature.description}</p>

                    {expanded && (
                        <div className="mt-3 border-t pt-3">
                            <h4 className="text-sm font-medium mb-2">Détails</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                {feature.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>

                            {feature.image && (
                                <div className="mt-3 rounded-md overflow-hidden border">
                                    <img src={feature.image || "/placeholder.svg"} alt={feature.title} className="w-full h-auto" />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function FeaturesTabsContent({
    features,
}: {
    features: Feature[]
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [remainingHeight, setRemainingHeight] = useState(0);

    useEffect(() => {
        function updateHeight() {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setRemainingHeight(Math.trunc(window.innerHeight - rect.top));
            }
        }

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    // Obtenir la couleur pour la catégorie de fonctionnalité
    const getFeatureCategoryColor = (category: FeatureCategory) => {
        switch (category) {
            case "planning":
                return "bg-blue-100 text-blue-800"
            case "recipes":
                return "bg-green-100 text-green-800"
            case "community":
                return "bg-purple-100 text-purple-800"
            case "account":
                return "bg-orange-100 text-orange-800"
            case "subscription":
                return "bg-pink-100 text-pink-800"
            default:
                return "bg-slate-100 text-slate-800"
        }
    }

    return (
        <ScrollArea ref={ref} style={{ height: remainingHeight - 70 }}>
            <div className="divide-y">
                {features.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                        <div className="rounded-full bg-slate-100 p-3 mb-4">
                            <Search className="h-6 w-6 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-medium">Aucune fonctionnalité trouvée</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Essayez de modifier votre recherche ou sélectionnez une autre catégorie
                        </p>
                    </div>
                ) : (
                    features.map((feature) => (
                        <FeatureItem key={feature.id} feature={feature} getCategoryColor={getFeatureCategoryColor} />
                    ))

                )}
            </div>
        </ScrollArea>
    )
}