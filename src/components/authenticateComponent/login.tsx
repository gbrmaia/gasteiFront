'use client'

import { useState } from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";
import { signIn } from "next-auth/react"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
interface IUser {
    email: string;
    password: string;
}

export function LoginAuth({ className, ...props }: UserAuthFormProps ){

    const [data, setData] = useState<IUser>({
        email: "",
        password: "",
    });
    
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent){
        event.preventDefault();
        setIsLoading(true);

        const res = await signIn<"credentials">("credentials", {
            ...data,
            redirect: false,
        });

        setData({
            email: "",
            password: "",
        })
        setIsLoading(false);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setData((prev) => {
            return {...prev, [e.target.name]: e.target.value};
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className={cn("")} {...props}>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="email">Seu e-mail</Label>
                    <Input
                        name="email"
                        id="email"
                        type="email"
                        autoComplete="email"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={isLoading}
                        required
                        className="mt-1 block w-full"
                        placeholder="seuemail@email.com"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="relative">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Sua senha</Label>
                        <Link href="#" className="text-sm font-medium text-primary hover:text-primary/90" prefetch={false}>
                            Esqueceu sua senha?
                        </Link>
                    </div>
                    <Input
                        id="password"
                        autoCapitalize="none"
                        autoCorrect="off"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        disabled={isLoading}
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full"
                        placeholder="*******"
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-1 right-1 h-7 w-7"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                        <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                    </Button>
                </div>
                <Button disabled={isLoading} type="submit" className="w-full">
                    {isLoading &&(
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Logar
                </Button>
            </form>
        </div>
    );
}
