import { Plan } from "@cook/validations"

export const difficultyColors: Record<number, {
    class: string
    text: string
  }> = {
    0: { class: "bg-green-300 text-green-800", text: "Très facile" },
    1: { class: "bg-green-100 text-green-800", text: "Facile" },
    2: { class: "bg-yellow-100 text-yellow-800", text: "Moyen" },
    3: { class: "bg-red-100 text-red-800", text: "Difficile" },
    4: { class: "bg-red-300 text-red-800", text: "Très difficile" }
  }