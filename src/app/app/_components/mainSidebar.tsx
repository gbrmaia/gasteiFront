import { HomeIcon, SettingsIcon, Wallet } from "lucide-react";
import {
    Sidebar,
    SidebarHeader,
    SidebarMain,
    SidebarNav,
    SidebarNavMain,
    SidebarNavLink,
    SidebarFooter,
    SidebarNavTextInfo
} from "@/components/sidebar/sidebarComponents";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function SidebarLayout() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarMain>
                <SidebarNav>
                    <SidebarNavMain>
                        <TooltipProvider>
                            <Tooltip >
                                <TooltipTrigger asChild>
                                    <SidebarNavTextInfo icon={Wallet}>Saldo</SidebarNavTextInfo>
                                </TooltipTrigger>
                                <TooltipContent className="ml-(-10)" side="right">
                                    <p>Seu saldo</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <SidebarNavLink icon={HomeIcon} href='/app'>Home</SidebarNavLink>
                        <SidebarNavLink icon={SettingsIcon} href='/app/settings'>Configuração</SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>
            </SidebarMain>
            <SidebarFooter>
                <h1>User</h1>
            </SidebarFooter>
        </Sidebar>
    );
}