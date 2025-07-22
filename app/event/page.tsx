"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { downloadICS } from "@/lib/event";

declare global {
	interface Window {
		TelegramWebviewProxy?: unknown;
		TelegramWebviewProxyProto?: unknown;
		TelegramWebview?: unknown;
	}
}

export default function EventPage() {
	const [userAgent, setUserAgent] = useState<string>("");

	useEffect(() => {
		if (navigator.userAgent.includes("iPhone") && 
			typeof window.TelegramWebviewProxy !== "undefined" && 
			typeof window.TelegramWebviewProxyProto !== "undefined"
		) {
			setUserAgent("ios-telegram-preview");
		} else if (navigator.userAgent.includes("Android") && 
			typeof window.TelegramWebview !== "undefined"
		) {
			setUserAgent("android-telegram-preview");
		} else {
			setUserAgent("browser");
		}
	}, []);
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
			{userAgent === "ios-telegram-preview" ? (
				<div>
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
			) : userAgent === "android-telegram-preview" ? (
				<div>
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
				<div>
					<p className="text-4xl">Должен был скачаться файл для добавления события в календарь. Если не получилось, то тыкните по <a className="text-blue-600 hover:text-blue-700 underline cursor-pointer" onClick={downloadICS}>ссылке</a>.</p>
				</div>
			)}
		</div>
	);
}
