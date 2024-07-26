import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/themeComponents/themeProvider";
import "@/styles/globals.css";
import { ModeToggle } from "@/components/themeComponents/switchTheme";

export const metadata = {
  title: "Gastei",
  description: "Autentique-se",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" key="html-root">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
