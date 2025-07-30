import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";

export const metadata: Metadata = {
	title: "Дневник Николая Неганова",
	description: "Письмо Николая Поликарповича Неганова, отправленное из станицы Кавказской его матери Агнии Ильиничне Негановой (Веселицкой) в Свердловск",
	openGraph: {
		title: "Дневник Николая Неганова",
		description: "Письмо Николая Поликарповича Неганова, отправленное из станицы Кавказской его матери Агнии Ильиничне Негановой (Веселицкой) в Свердловск",
		url: "https://ovodov.me/diary",
		siteName: "Борины проектики",
		locale: "ru_RU",
	},
};

const serif = PT_Serif({
	weight: ["400", "700"],
	subsets: ["cyrillic", "latin"],
});

export default function DiaryLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={`${serif.className} bg-[#fff8ec] text-black`}>
			{children}
		</div>
	);
}
