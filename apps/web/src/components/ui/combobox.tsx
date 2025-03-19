"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxItem {
    label: string
    id: string
}

export function Combobox({ baseText, choices }: { baseText: string, choices: ComboboxItem[] }) {
    const [open, setOpen] = React.useState(false)
    const [selectedChoice, setSelectedChoice] = React.useState<ComboboxItem | null>(
        null
    )

    return (
        <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">Status</p>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-[150px] justify-start"
                    >
                        {selectedChoice ? (
                            <>
                                {selectedChoice.label}
                            </>
                        ) : (
                            <>{baseText}</>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" side="right" align="start">
                    <Command>
                        <CommandInput placeholder={baseText} />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {choices.map((choice) => (
                                    <CommandItem
                                        key={choice.id}
                                        value={choice.id}
                                        onSelect={(value) => {
                                            setSelectedChoice(
                                                choices.find((priority) => priority.id === value) ||
                                                null
                                            )
                                            setOpen(false)
                                        }}
                                    >
                                        <span>{choice.label}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}