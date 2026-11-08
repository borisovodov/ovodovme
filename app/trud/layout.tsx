import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Производственный календарь в iCal (ics)",
	description: "Ежегодно обновляемый производственный календарь для приложений-календарей",
	openGraph: {
		title: "Производственный календарь в iCal (ics)",
		description: "Ежегодно обновляемый производственный календарь для приложений-календарей",
		url: "https://ovodov.me/trud",
		siteName: "Борины проектики",
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
