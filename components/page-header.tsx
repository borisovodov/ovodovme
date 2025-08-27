"use client";

import Image from "next/image";
import { Link } from "@/components";

type PageHeaderProps = {
	title: string;
	description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
	return (
		<div className="py-8">
			<Link href="/" className="pb-8">
				<Image
					width="48"
					height="48"
					src="/avatar.png"
					alt="Аватарка автора"
				/>
			</Link>
			<p className="text-xl">{title}</p>
			{description && (
				<p><i>{description}</i></p>
			)}
		</div>
	);
}
