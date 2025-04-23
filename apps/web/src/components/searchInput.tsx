import { useState } from "react";
import { Input } from "@/components/ui/input";
import { tagsData } from "@/config/tagsData";

interface SearchInputProps {
    addItem: (item: string) => void;
    removeItem: (item: string) => void;
}

export function SearchInput(SearchInputProps: SearchInputProps) {
    const { addItem, removeItem } = SearchInputProps;
    const [search, setSearch] = useState("");

    const filteredOptions = tagsData.filter(option =>
        option.label.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5);

    return (
        <div className="w-full mx-auto">
            <Input
                placeholder="Allergies, intolérances, régimes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
                <div className="border rounded-md shadow-md bg-white absolute w-full">
                    {filteredOptions.length > 0 && (
                        filteredOptions.map((option, index) => (
                            <div
                                key={index}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => addItem(option.label)}
                            >
                                {option.label}
                            </div>
                        ))
                    )}
                    <div
                        className="p-2 text-blue-500 cursor-pointer hover:underline"
                        onClick={() => {addItem(search); setSearch("")}}
                    >
                        Ajouter "{search}"
                    </div>
                </div>
            )}
        </div>
    );
}
