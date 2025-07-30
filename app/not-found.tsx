import "@/globals.css";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-5xl">
            <h2>Ну ёб твою мать, ну что это такое...</h2>
            <Link className="text-blue-600 hover:text-blue-700 underline" href="/">Вернуться на главную</Link>
            </div>
        </div>
    )
}
