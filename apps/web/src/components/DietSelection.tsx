"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

const dietOptions = [
  { id: "none", label: "Aucune restriction", image: "/images/no-restriction.png" },
  { id: "vegetarian", label: "Végétarien", image: "/images/vegetarian.png" },
  { id: "vegan", label: "Vegan", image: "/images/vegan.png" },
  { id: "sugar-free", label: "Sans sucre", image: "/images/sugar-free.png" },
  { id: "keto", label: "Keto", image: "/images/keto.png" },
  { id: "other", label: "Autre", image:"/te" }
];

export default function DietSelection({ selectedDiet, onSelect }: { selectedDiet: string, onSelect: (diet: string) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {dietOptions.map((diet) => (
        <Card
          key={diet.id}
          className={`p-4 cursor-pointer border ${
            selectedDiet === diet.id ? "border-green-600 shadow-md" : "border-gray-300"
          }`}
          onClick={() => onSelect(diet.id)}
        >
          <Image 
            src={diet.image} 
            alt={diet.label} 
            width={200} 
            height={150} 
            className="w-full h-24 object-contain rounded-lg" 
          />
          <p className="mt-2 text-center font-semibold">{diet.label}</p>
        </Card>
      ))}
    </div>
  );
}
