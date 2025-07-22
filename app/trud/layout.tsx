import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Производственный календарь в iCal (ics)",
	description: "В интернете полно производственных календарей. Но все они предназначены для печати или же доступны на отдельном сайте...",
	openGraph: {
		title: "Производственный календарь в iCal (ics)",
		description: "В интернете полно производственных календарей. Но все они предназначены для печати или же доступны на отдельном сайте...",
		url: "https://ovodov.me/trud",
		siteName: "Борины проектики",
		images: "/avatar.png",
		locale: "ru_RU",
	},
};

export default function TrudLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			{children}
		</div>
	);
}
