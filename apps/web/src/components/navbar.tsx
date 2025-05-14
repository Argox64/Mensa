"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/contexts/UserContext";

export default function Navbar() {
  const { user, signOut } = useUser();

  return (
    <nav className="p-4"> {/* "bg-white shadow-sm" */}
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-4xl font-bold text-[--primary-color] font-montserrat"
        >
          Mensa
        </Link>

        <div className="space-x-5 flex flex-nowrap items-center">
          <Link href="/generate" className="text-gray-700 hover:text-green-600">
            Générer une recette
          </Link>
          <Link href="/recipes" className="text-gray-700 hover:text-green-600">
            Recettes
          </Link>

          <div className="border-l border-gray-300 h-6"></div>

          {!user ? (
            <>
              <Link href="/signin" className="text-gray-700 hover:text-green-600">
                Sign In
              </Link>
              <Button type="button" className="bg-[--primary-color] text-white">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-sm font-medium">
                  {user.email}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profil">Profil</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="text-red-600">
                  Se déconnecter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
}
