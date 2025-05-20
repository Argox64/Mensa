"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RoadmapPanel } from "./roadmap-panel"
import { ClipboardList } from "lucide-react"

export function RoadmapButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-blue-600 hover:bg-blue-700"
        aria-label="Ouvrir la roadmap"
      >
        <ClipboardList className="h-6 w-6" />
      </Button>
      <RoadmapPanel open={open} onOpenChange={setOpen} />
    </>
  )
}
