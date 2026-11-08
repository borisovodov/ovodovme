"use client";

import "@/globals.css";

import { Link } from "@heroui/react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-5xl">
                <h2>Ну ёб твою мать, ну что это такое...</h2>
                <Link className="text-blue-600 underline hover:text-blue-700" href="/">Вернуться на главную</Link>
            </div>
        </div>
    )
}
