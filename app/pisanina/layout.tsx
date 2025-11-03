import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";

export const metadata: Metadata = {
    title: "???",
    description: "???",
    openGraph: {
        title: "???",
        description: "???",
        url: "https://ovodov.me/pisanina",
        siteName: "Борины проектики",
        locale: "ru_RU",
    },
};

const serif = PT_Serif({
    weight: ["400", "700"],
    subsets: ["cyrillic", "latin"],
});

export default function PisaninaLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={serif.className}>
            {children}
        </div>
    );
}
