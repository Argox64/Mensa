import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  console.log('Token:', token); // Afficher le token dans la console

  // Si le token existe, l'utilisateur est authentifié
  if (token) {
    return NextResponse.next();
  }

  // Rediriger vers /login si non authentifié
  return NextResponse.redirect(new URL('/signin', request.url));
}

// Configurer les routes concernées par le middleware
export const config = {
  matcher: ['/dashboard/:path*', '/profil/:path*'], // Ajouter ici les routes protégées
};