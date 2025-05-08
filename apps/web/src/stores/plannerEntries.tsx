import { create } from "zustand"
import { PlannerEntry } from "@cook/validations"

export type PlannerEntriesStoreState = {
    entries: Record<string, PlannerEntry[]>;
    refreshEntries: (data: PlannerEntry[]) => void;
    updateOrAddEntry: (date: string, entry: PlannerEntry) => void;
    updateOrAddEntries: (entries: PlannerEntry[]) => void;
    removeEntry: (date: string, entryId: number) => void;
    removeEntries: (dates: string[], entryIds: number[]) => void;
    clear: () => void;
}

export const usePlannerEntriesStore = create<PlannerEntriesStoreState>((set, get) => ({
    entries: {},
    refreshEntries: (data: PlannerEntry[]) => {
        const grouped: Record<string, PlannerEntry[]> = {}
        for (const entry of data) {
            if (!grouped[entry.date]) grouped[entry.date] = []
            grouped[entry.date].push(entry)
        }
        set({ entries: grouped })
    },
    updateOrAddEntry: (dateKey, newEntry) => {
        const current = get().entries[dateKey] || []
        const updated = current.some((e) => e.id === newEntry.id)
            ? current.map((e) => (e.id === newEntry.id ? newEntry : e))
            : [...current, newEntry]

        set((state) => ({
            entries: {
                ...state.entries,
                [dateKey]: updated,
            },
        }))
    },
    updateOrAddEntries: (entries) => {
        const grouped: Record<string, PlannerEntry[]> = {}

        for (const entry of entries) {
            const key = entry.date
            grouped[key] = grouped[key] || []
            const existing = grouped[key].find((e) => e.id === entry.id)
            if (existing) {
                grouped[key] = grouped[key].map((e) => (e.id === entry.id ? entry : e))
            } else {
                grouped[key].push(entry)
            }
        }

        set((state) => {
            const merged = { ...state.entries }

            for (const key in grouped) {
                const existing = merged[key] || []
                const mergedList = [...existing.filter((e) => !grouped[key].some((ne) => ne.id === e.id)), ...grouped[key]]
                merged[key] = mergedList
            }

            return { entries: merged }
        })
    },
    removeEntry: (dateKey, entryId) => {
        const current = get().entries[dateKey] || []
        set((state) => ({
            entries: {
                ...state.entries,
                [dateKey]: current.filter((e) => e.id !== entryId),
            },
        }))
    },
    removeEntries: (dates, entryIds) => {
        const updated: Record<string, PlannerEntry[]> = { ...get().entries }

        for (const dateKey of dates) {
            updated[dateKey] = (updated[dateKey] || []).filter((e) => !entryIds.includes(e.id))
        }

        set({ entries: updated })
    },
    clear: () => {
        set({ entries: {} })
    },
}))
