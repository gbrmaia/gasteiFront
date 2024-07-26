import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LoginAuth } from "@/components/authenticateComponent/login"
import '@/styles/globals.css'
import { RegisterAuth } from "@/components/authenticateComponent/register"
import { PiggyBank } from "lucide-react"

export default function Authenticate() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground flex items-center justify-center">
            Autentique-se no{" "}
            <span className="flex items-center ml-2 " style={{ color: "hsl(var(--primary))" }}>
              GASTEI <PiggyBank className="w-12 h-12 ml-2 transition-transform duration-500 hover:scale-110 hover:text-yellow-500" />
            </span>
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Faça login ou cadastre-se{" "}
          </p>
        </div>
        <Tabs defaultValue="login" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 rounded-md bg-muted p-1">
            <TabsTrigger value="login">Logar</TabsTrigger>
            <TabsTrigger value="register">Cadastrar</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div>
              <LoginAuth />
            </div>
          </TabsContent>
          <TabsContent value="register">
            <RegisterAuth />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}