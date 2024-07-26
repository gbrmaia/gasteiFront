import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css'
import { PropsWithChildren } from "react";
import { SidebarLayout } from "@/app/app/_components/mainSidebar";
import { ThemeProvider } from "@/components/themeComponents/themeProvider";
import { ModeToggle } from "@/components/themeComponents/switchTheme";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gastei",
  description: "Controle seus gastos com Gastei!",
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="pt">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" grid grid-cols-[16rem_1fr] gap-4">
            <SidebarLayout />
            <main>
            <ModeToggle />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}