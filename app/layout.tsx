import "@/globals.css";

import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";

import { Provider } from "@/app/providers";

export const metadata: Metadata = {
	metadataBase: new URL("https://ovodov.me"),
	title: "Хоумпэйдж",
	description: "Тут про всё расписано",
	openGraph: {
		title: "Хоумпэйдж",
		description: "Тут про всё расписано",
		url: "https://ovodov.me/",
		siteName: "Борины проектики",
		locale: "ru_RU",
	},
};

const sans = PT_Sans({
	weight: ["400", "700"],
	subsets: ["cyrillic", "latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`${sans.className} bg-[#f6f5e9] dark:bg-slate-800 text-black dark:text-white`}
			>
				<Provider>
					{children}
				</Provider>
			</body>
		</html>
	);
}
