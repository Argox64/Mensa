import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold text-[--primary-color] font-montserrat">
          Mensa
        </Link>
        <div className="space-x-5 flex flex-nowrap items-center">
          <Link href="/generate" className="text-gray-700 hover:text-green-600">
            Générer une recette
          </Link>
          <Link href="/recipes" className="text-gray-700 hover:text-green-600">
            Mes recettes
          </Link>
          <div className="border-l border-gray-300 h-6"></div>
          <Link href="/signin" className="text-gray-700 hover:text-green-600">
            Sign In
          </Link>
          <Button type="button" className="bg-[--primary-color]">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}