import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";

export const metadata: Metadata = {
    title: "Субъективный путеводитель по культовым местам Екатеринбурга",
    description: "Живу в Екатеринбурге всю свою жизнь и люблю его. Хочется поделиться своим взглядом на город для ребят, которые оказались тут проездом.",
    openGraph: {
        title: "Субъективный путеводитель по культовым местам Екатеринбурга",
        description: "Живу в Екатеринбурге всю свою жизнь и люблю его. Хочется поделиться своим взглядом на город для ребят, которые оказались тут проездом.",
        url: "https://ovodov.me/ye",
        siteName: "Борины проектики",
        locale: "ru_RU",
    },
};

const serif = PT_Serif({
    weight: ["400", "700"],
    subsets: ["cyrillic", "latin"],
});

export default function YeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${serif.className} bg-[#006732] text-white`}>
            {children}
        </div>
    );
}
