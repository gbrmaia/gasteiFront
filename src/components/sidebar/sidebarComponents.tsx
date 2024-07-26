import { cn } from "@/lib/utils";
import Link from "next/link";

export type SideBarGenericProps<T = any> = {
    children: React.ReactNode
    className?: String
} & T

export function Sidebar({ className, children }: SideBarGenericProps) {
    return (
        <aside className={cn(['border-r border-border flex flex-col ', className])}>
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
        <main className={cn(['pt-6 px-3 w-auto', className])}>
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
        <div className={cn(['text-sm uppercase text-muted-foreground ml-3', className])}>
            {children}
        </div>
    );
}

export function SidebarNavMain({ className, children }: SideBarGenericProps) {
    return (
        <main className={cn(['flex flex-col w-auto', className])}>
            {children}
        </main>
    );
}

type SidebarNavLinkProps = {
    href: string
    active?: boolean
} //Props para os botões(links) da navbar

export function SidebarNavLink({ className, children, href, active }: SideBarGenericProps<SidebarNavLinkProps>) {
    return (
        <Link
            href={href}
            className={cn(['text-sm px-3 py-2 flex items-center rounded-md',
                active ? 'bg-secondary' : '',
                className])}>
            {children}
        </Link>
    );
}

type SidebarNavTextInfoProps = {
    className?: string,
    children: React.ReactNode
} //Props para os textos informativos da navbar

export function SidebarNavTextInfo({ className, children }: SideBarGenericProps<SidebarNavTextInfoProps>) {
    return (
        <span className={cn(['select-none cursor-default text-sm px-3 py-2 flex items-center w-auto', className])}>
            {children}
        </span>
    );
}

export function SidebarFooter({ className, children }: SideBarGenericProps) {
    return (
        <footer className={cn(['p-6 mt-auto border-t border-border', className])}>
            {children}
        </footer>
    );
}
