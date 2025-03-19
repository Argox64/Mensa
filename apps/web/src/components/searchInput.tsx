import { useState } from "react";
import { Input } from "@/components/ui/input";
import { tagsData } from "@/config/tagsData";
import { X } from "lucide-react";
import { Badge } from "./ui/badge";

export function SearchInput() {
    const [search, setSearch] = useState("");
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const filteredOptions = tagsData.filter(option =>
        option.label.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5);

    const addItem = (item: string) => {
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        }
        setSearch("");
    };

    const removeItem = (item: string) => {
        setSelectedItems(selectedItems.filter(i => i !== item));
    };

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
                        onClick={() => addItem(search)}
                    >
                        Ajouter "{search}"
                    </div>
                </div>
            )}

            <div className="mt-4 gap-2 flex flex-wrap">
                {selectedItems.map((badge, index) => (
                    <Badge key={index} className="items-center px-3 py-1 gap-2">
                        {badge}
                        <X
                            className="w-4 h-4 cursor-pointer hover:text-red-500"
                            onClick={() => removeItem(selectedItems[index])}
                        />
                    </Badge>
                ))}
            </div>
        </div>
    );
}
