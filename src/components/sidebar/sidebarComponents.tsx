import { cn } from "@/lib/utils";
import Link from "next/link";
import { LucideIcon } from 'lucide-react';

export type SideBarGenericProps<T = any> = {
    children: React.ReactNode
    className?: String
} & T

export function Sidebar({ className, children }: SideBarGenericProps) {
    return (
        <aside className={cn(['border-r border-border flex flex-col', className])}>
            {children}
        </aside>
    );
}

export function SidebarHeader({ className, children }: SideBarGenericProps) {
    return (
        <header className={cn(['p-6', className])}>
            {children}
        </header>
    );
}

export function SidebarMain({ className, children }: SideBarGenericProps) {
    return (
        <main className={cn(['p-6 w-auto', className])}>
            {children}
        </main>
    );
}

export function SidebarNav({ className, children }: SideBarGenericProps) {
    return (
        <nav className={cn(['', className])}>
            {children}
        </nav>
    );
}

export function SidebarNavHeader({ className, children }: SideBarGenericProps) {
    return (
        <header className={cn(['', className])}>
            {children}
        </header>
    );
}

export function SidebarNavHeaderTitle({ className, children }: SideBarGenericProps) {
    return (
        <div className={cn(['text-xs uppercase text-muted-foreground', className])}>
            {children}
        </div>
    );
}

export function SidebarNavMain({ className, children }: SideBarGenericProps) {
    return (
        <main className={cn(['flex flex-col w-auto items-start', className])}>
            {children}
        </main>
    );
}

type SidebarNavLinkProps = {
    href: string,
    icon?: LucideIcon,
    className?: string,
    children: React.ReactNode
} //Props para os botões(links) da navbar

export function SidebarNavLink({ className, children, href, icon: Icon }: SideBarGenericProps<SidebarNavLinkProps>) {
    return (
        <Link href={href} className={cn(['text-md px-3 py-2 flex items-center', className])}>
            {Icon && <Icon className="mr-2 size-5" />}
            {children}
        </Link>
    );
}

type SidebarNavTextInfoProps = {
    icon?: LucideIcon,
    className?: string,
    children: React.ReactNode
} //Props para os textos informativos da navbar

export function SidebarNavTextInfo({ className, children, icon: Icon }: SideBarGenericProps<SidebarNavTextInfoProps>) {
    return (
        <div className={cn(['text-md px-3 py-2 flex items-center w-auto', className])}>
            {Icon && <Icon className="mr-2 size-5" />}
            {children}
        </div>
    );
}

export function SidebarFooter({ className, children }: SideBarGenericProps) {
    return (
        <footer className={cn(['p-6 mt-auto border-t border-border', className])}>
            {children}
        </footer>
    );
}
