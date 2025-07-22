"use client";

import Image from "next/image";

import {
	isIOSTelegramInAppBrowser,
	isAndroidTelegramInAppBrowser,
	downloadICS
} from "@/lib/event";

export default function EventPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
			{isIOSTelegramInAppBrowser() ? (
				<div className="">
					<p className="text-4xl">
						<span>Тыкните по кнопке</span>
						<Image
							width="40"
							height="40"
							src="/safari.jpeg"
							alt="Telegram"
							className="inline m-4 rounded-full"
						/>
						<span>чтобы добавить событие в календарь.</span>
					</p>
					<Image
						width="300"
						height="300"
						src="/arrow.svg"
						alt="Arrow"
						className="mx-auto"
					/>
				</div>
			) : isAndroidTelegramInAppBrowser() ? (
				<div className="">
					<Image
						width="300"
						height="300"
						src="/arrow.svg"
						alt="Arrow"
						className="rotate-270 mx-auto"
					/>
					<p className="text-4xl">Откройте страницу в браузере, чтобы добавить событие в календарь.</p>
				</div>
			) : (
				<div className="">
					<p className="text-4xl">Должен был скачаться файл для добавления события в календарь. Если не получилось, то тыкните по <a className="text-blue-600 hover:text-blue-700 underline cursor-pointer" onClick={downloadICS}>ссылке</a>.</p>
				</div>
			)}
		</div>
	);
}
