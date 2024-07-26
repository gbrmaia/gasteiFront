'use client'

import {
    Sidebar,
    SidebarHeader,
    SidebarMain,
    SidebarNav,
    SidebarNavMain,
    SidebarNavLink,
    SidebarFooter,
    SidebarNavHeader,
    SidebarNavHeaderTitle,
    SidebarNavTextInfo,
} from "@/components/sidebar/sidebarComponents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarDays, PenLine } from "lucide-react";
import { usePathname } from "next/navigation";

export function SidebarLayout() {

    const pathName = usePathname()

    const isActive = (path: string) => pathName === path

    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarMain className="flex flex-col flex-grow">
                <SidebarNav>
                    <SidebarNavMain>
                        <SidebarNavTextInfo>
                            <Popover>
                                <div style={{ color: "hsl(var(--primary))" }} className="font-bold">R$</div>
                                <PopoverTrigger asChild>
                                    <span className="ml-1 font-bold">1000.00</span>
                                </PopoverTrigger>
                                <PopoverContent side="right" className="ml-4 w-80">
                                    <div className="grid gap-4">
                                        <div className="space-y-2">
                                            <h4 className="flex flex-auto font-medium leading-none">
                                                Saldo mensal
                                                <CalendarDays style={{ color: "hsl(var(--primary))" }} className="ml-2 size-4" /></h4>
                                            <p className="text-sm text-muted-foreground">
                                                Basicamente seu salario...
                                            </p>
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="width" className="flex items-center">
                                                    <PenLine className="size-4 mr-2" style={{ color: "hsl(var(--primary))" }} />Editar
                                                </Label>
                                                <Input
                                                    id="width"
                                                    defaultValue="R$00.00"
                                                    className="col-span-2 h-8"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </SidebarNavTextInfo>
                        <SidebarNavLink href='/app' active={isActive('/app')}>
                            Home
                        </SidebarNavLink>
                        <SidebarNavLink href='/app/settings' active={isActive('/app/settings')}>
                            Configuração
                        </SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>
                <SidebarNav className="mt-auto">
                    <SidebarNavHeader>
                        <SidebarNavHeaderTitle>
                            Ajuda
                        </SidebarNavHeaderTitle>
                    </SidebarNavHeader>
                    <SidebarNavMain>
                        <SidebarNavLink href='/app'>Gastei</SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>
            </SidebarMain>
            <SidebarFooter>
                <h1>User</h1>
            </SidebarFooter>
        </Sidebar>
    );
}