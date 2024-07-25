import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css'
import { PropsWithChildren } from "react";
import { SidebarLayout } from "@/app/app/_components/mainSidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gastei",
  description: "Controle seus gastos com Gastei!",
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="pt">
      <body className={inter.className}>
          <div className=" grid grid-cols-[16rem_1fr] gap-4">
            <SidebarLayout />
            <main>
              {children}
            </main>
          </div>
      </body>
    </html>
  )
}