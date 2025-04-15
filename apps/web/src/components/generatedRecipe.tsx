import { Label } from "@radix-ui/react-label";


export default function GeneratedRecipe() {
    return <div className="max-w-2xl mx-auto mt-10 w-full flex flex-col">
        <div className="bg-[#E2EDAC] rounded-t-lg w-full flex flex-col text-center">
            <h2>Ingrédients</h2>
            <Label>500 grammes de tomates</Label>
            <Label>200 grammes de choux</Label>
        </div>
        <div className="bg-[#ffd968] rounded-t-lg w-full flex flex-col text-center">
            <h2>Etapes</h2>
            <ol className="list-decimal list-inside">
                <li>Laver les tomates</li>
                <li>Laver le choux</li>
            </ol>
        </div>
    </div>;
}