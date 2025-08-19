import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Генератор файлов с календарными событиями из URL",
	description: "Страничка пригодится, если нужно кинуть кому-нибудь ссылку на скачивание файла с событием для календаря (iCal, ics), а поднимать свой CalDAV-сервер для этого дофига делов.",
	openGraph: {
		title: "Генератор файлов с календарными событиями из URL",
		description: "Страничка пригодится, если нужно кинуть кому-нибудь ссылку на скачивание файла с событием для календаря (iCal, ics), а поднимать свой CalDAV-сервер для этого дофига делов.",
		url: "https://ovodov.me/event",
		siteName: "Борины проектики",
		locale: "ru_RU",
	},
};

export default function EventLayout({
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
