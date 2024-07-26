'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }
interface IUser {
    name: string;
    email: string;
    password: string;
}


export function RegisterAuth({ className, ...props }: UserAuthFormProps) {

    const { toast } = useToast();

    const [data, setData] = useState<IUser>({
        name: "",
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState(false);

    //     async function onSubmit(event: React.SyntheticEvent) {
    //     event.preventDefault();
    //     setIsLoading(true);

    //     try {
    //       const request = await fetch('/api/users', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //       });

    //       const response = await request.json();
    //       console.log('USER REGISTER FORM', response);

    //       if (!request.ok) {
    //         toast({
    //           title: 'Oooops...',
    //           description: response.error,
    //           variant: 'destructive',
    //           action: (
    //             <ToastAction altText="Tente novamente">Tente Novamente</ToastAction>
    //           ),
    //         });
    //       } else {
    //         toast({
    //           title: 'Uhullll',
    //           description: 'Usuario cadastrado com sucesso',
    //         });
    //       }

    //       setData({
    //         name: '',
    //         email: '',
    //         password: '',
    //       });
    //     } catch (error) {
    //       console.error('Erro ao registrar usuário:', error);
    //       toast({
    //         title: 'Oooops...',
    //         description: 'Algo deu errado. Tente novamente.',
    //         variant: 'destructive',
    //       });
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   }

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        try {
            const request = await fetch('/app/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const response = await request.json();
            console.log('USER REGISTER FORM', response);

            if (!request.ok) {
                toast({
                    title: 'Oooops...',
                    description: response.error,
                    variant: 'destructive',
                    action: (
                        <ToastAction altText="Tente novamente">Tente Novamente</ToastAction>
                    ),
                });
            } else {
                toast({
                    title: 'Uhullll',
                    description: 'Usuario cadastrado com sucesso',
                });
            }

            setData({
                name: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            toast({
                title: 'Oooops...',
                description: 'Algo deu errado. Tente novamente.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }


    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className={cn("")} {...props}>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                        name="name"
                        id="name"
                        type="text"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={isLoading}
                        required
                        className="mt-1 block w-full"
                        placeholder="Seu nome"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>
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
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        id="password"
                        autoCapitalize="none"
                        autoCorrect="off"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        disabled={isLoading}
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full"
                        placeholder={showPassword ? "caiu denovo kkkkkkkk" : "*******"}
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
                    {isLoading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Cadastrar
                </Button>
            </form>
        </div>
    );
}