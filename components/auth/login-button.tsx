'use client';

import { useRouter } from 'next/navigation';

interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean
}

import React from 'react'

export const LoginButton = ({
    children,
    mode= "redirect",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asChild
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login")
    }

    if (mode === "modal"){
        return (
            <span>
                TODO: Implement navigation
            </span>
        )
    }
  return (
    <span onClick={onClick} className='cursor-pointer'>
        {children}
    </span>
  )
}