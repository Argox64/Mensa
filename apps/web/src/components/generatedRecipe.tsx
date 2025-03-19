import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";


export default function GeneratedRecipe() {
    return <div className="max-w-2xl mx-auto mt-10 w-full flex flex-col">
        <div className="bg-[#E2EDAC] rounded-t-lg w-full flex flex-col">
            <h2 className="text-center">Ingrédients</h2>
            <Checkbox>
                <Label>500 grammes de tomates</Label>
            </Checkbox>
            <Checkbox>
                <Label>200 grammes de choux</Label>
            </Checkbox>
        </div>
    </div>;
}