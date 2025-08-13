"use client";

import { Code } from "@heroui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

import Avatar from "@/components/avatar";
import { Signature } from "@/components/signature";
import { Mode, isMainPage, downloadICS } from "@/lib/event";

declare global {
	interface Window {
		TelegramWebviewProxy?: unknown;
		TelegramWebviewProxyProto?: unknown;
		TelegramWebview?: unknown;
	}
}

export default function EventPage() {
	const [mode, setMode] = useState<Mode>(Mode.EMPTY);

	useEffect(() => {
		if (isMainPage()) {
			setMode(Mode.MAIN);
		} else if (navigator.userAgent.includes("iPhone") && 
			typeof window.TelegramWebviewProxy !== "undefined" && 
			typeof window.TelegramWebviewProxyProto !== "undefined"
		) {
			setMode(Mode.IOS_TELEGRAM_PREVIEW);
		} else if (navigator.userAgent.includes("Android") && 
			typeof window.TelegramWebview !== "undefined"
		) {
			setMode(Mode.ANDROID_TELEGRAM_PREVIEW);
		} else {
			downloadICS();
			setMode(Mode.DOWNLOAD);
		}
	}, []);

	return (
		<>
			{ mode === Mode.MAIN ?
				<MainPage />
			: mode === Mode.IOS_TELEGRAM_PREVIEW ?
				<IOSPage />
			: mode === Mode.ANDROID_TELEGRAM_PREVIEW ?
				<AndroidPage />
			: mode === Mode.DOWNLOAD ?
				<DownloadPage />
			: null}
		</>
	);
}

function MainPage() {
	return (
		<div className="p-8">
			<div className="max-w-2xl">
				<Avatar />
				<p className="text-xl">Генератор файлов с календарными событиями из параметров URL</p>
				<p className="mt-8 mb-2">Страничка пригодится, если нужно кинуть кому-нибудь ссылку на скачивание файла с событием для календаря (iCal, ics), а поднимать свой свой CalDAV-сервер для этого дофига делов.</p>
				<p className="mt-8">Ссылка формируется следующим образом:</p>
				<p className="mt-2"><Code size="sm">https://ovodov.me/event?summary=</Code>название события в URL-кодировке</p>
				<p className="mt-2"><Code size="sm">&location=</Code>место проведения в URL-кодировке (не обязательно?)</p>
				<p className="mt-2"><Code size="sm">&start=</Code>дата и время (можно без времени) начала события в формате ISO 8601</p>
				<p className="mt-2"><Code size="sm">&end=</Code>дата и время (можно без времени) окончания события в формате ISO 8601</p>
				<p className="mt-2"><Code size="sm">&url=</Code>URL на страницу события в URL-кодировке (не обязательно?)</p>
				<p className="mt-8">Например:</p>
				<p className="mt-2"><Code size="sm">https://ovodov.me/event?summary=Саша_погнали_в_бар&location=Коллектив&start=2025-08-13T20:00:00Z&end=2025-08-13T23:00:00Z&url=https://klktv91.ru</Code></p>
				<Signature />
			</div>
		</div>
	);
}

function IOSPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
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
	);
}

function AndroidPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
			<Image
				width="300"
				height="300"
				src="/arrow.svg"
				alt="Arrow"
				className="rotate-270 mx-auto"
			/>
			<p className="text-4xl">Откройте страницу в браузере, чтобы добавить событие в календарь.</p>
		</div>
	);
}

function DownloadPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
			<p className="text-4xl">Должен был скачаться файл для добавления события в календарь. Если не получилось, то тыкните по <a className="text-blue-600 hover:text-blue-700 underline cursor-pointer" onClick={downloadICS}>ссылке</a>.</p>
		</div>
	);
}
