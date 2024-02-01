import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stastica",
  description: "Statistics dashboard for infrastructure data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex")}>
        <TooltipProvider delayDuration={400} skipDelayDuration={500}>
          <Sidebar />
          <div className="w-full">
            <Navbar />
            {children}
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
