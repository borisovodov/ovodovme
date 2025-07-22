import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Глупая страничка для формирования событий календаря по URL",
	description: "Только для часового пояса Екатеринбурга",
	openGraph: {
		title: "Глупая страничка для формирования событий календаря по URL",
		description: "Только для часового пояса Екатеринбурга",
		url: "https://ovodov.me/event",
		siteName: "Борины проектики",
		images: "/avatar.png",
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
