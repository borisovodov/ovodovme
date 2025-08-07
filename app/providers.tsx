"use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";

export function Provider({ children }: { children: ReactNode }) {
    return (
        <HeroUIProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </HeroUIProvider>
    );
}
