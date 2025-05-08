import { DailyRecipePlanner } from "@/components/recipePlanner";
import PlannerRecipeGenerator from "@/components/planner-recipe-generator";

export default function DashboardPage() {
    return (
        <div className="p-4 space-y-6">
            {/* Planner */}
            <DailyRecipePlanner />
            <PlannerRecipeGenerator/>
        </div>
    )
}
