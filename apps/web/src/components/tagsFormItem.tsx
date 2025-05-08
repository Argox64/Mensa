import { Control, Controller } from "react-hook-form";
import { FormItem, FormLabel } from "./ui/form";
import { SearchInput } from "./searchInput";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

export default function TagsFormItem({
    control,
    addItem,
    removeItem,
    selectedItems = [],
}: {
    control: Control<any, any, any>;
    addItem: (item: string) => void;
    removeItem: (item: string) => void;
    selectedItems?: string[];
}) {
    return (
        <FormItem>
            <FormLabel>Ajouter un tag: </FormLabel>

            <Controller
                control={control}
                name="tags"
                defaultValue={[]}
                render={() => (
                    <>
                        <SearchInput addItem={addItem} removeItem={removeItem} />
                        <div className="mt-4 gap-2 flex flex-wrap" >
                            {
                                selectedItems.map((badge: string, index: number) => (
                                    <Badge key={index} className="items-center px-3 py-1 gap-2" >
                                        {badge}
                                        < X
                                            className="w-4 h-4 cursor-pointer hover:text-red-500"
                                            onClick={() => removeItem(badge)}
                                        />
                                    </Badge>
                                ))
                            }
                        </div>
                    </>
                )}
            />
        </FormItem>
    )
}