import type { Metadata } from "next";
import { Montserrat, Quicksand, Poppins } from "next/font/google";
import "./globals.css";
import { Provider as TrpcProvider } from "@cook/trpc-client/Provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/contexts/UserContext";
import { RoadmapButton } from "@/components/roadmap/roadmap-button";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});*/

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/*const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(montserrat.variable, quicksand.variable, poppins.variable, 'antialiased')}
      >
        <TrpcProvider>
          <UserProvider>
            <Navbar />
            <div className="flex flex-col gap-4">
              {children}
            </div>
            <RoadmapButton />
            <Toaster />
          </UserProvider>
        </TrpcProvider>
      </body>
    </html>
  );
}
