import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: 'Gastei',
  description: 'Autentique-se',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Toaster />
        {children}
      </body>
    </html>
  )
}
