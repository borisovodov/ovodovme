"use client";

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
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
			{ mode === Mode.MAIN ?
				<MainPage />
			: mode === Mode.IOS_TELEGRAM_PREVIEW ?
				<IOSPage />
			: mode === Mode.ANDROID_TELEGRAM_PREVIEW ?
				<AndroidPage />
			: mode === Mode.DOWNLOAD ?
				<DownloadPage />
			: null}
		</div>
	);
}

function MainPage() {
	return (
		<div className="max-w-2xl">
			<Avatar />
			<p className="text-xl">Генератор iCal (ics) файлов из параметров URL</p>
			<p><i>Поддерживается с 2019-го, обновлён на 2025-й</i></p>
			<p className="mt-8 mb-2">В интернете полно производственных календарей. Бери и пользуйся! Все они предназначены для печати или же доступны на отдельном сайте.</p>
			<p className="mb-2">Однако многие из нас пользуются приложениями-календарями (например Гугл Календарём или Аутлуком). Проблема в том, что для них не существует полноценного производственного календаря, а стандартные календари с праздниками путают нас событиями навроде «Масленицы» или «Дня смеха».</p>
			<p className="mb-2">Теперь вы можете воспользоваться производственным календарём в формате iCal (ics), который понимает каждое приложение-календарь и ежегодно обновляется.</p>
			{/* <p className="mb-2 inline-flex flex-none gap-2">
				<span>Подписаться на календарь:</span>
				<Code className="h-8">https://ovodov.me/trud.ics</Code>
				<Button onPress={addToClipboard} className="bg-default/40 h-8 px-0 rounded-small">
					<ClipboardDocumentIcon className="size-6" />
				</Button>
			</p> */}
			<p className="mb-2">Инструкция по добавлению календаря в используемое вами приложение:</p>
			<Signature />
		</div>
	);
}

function IOSPage() {
	return (
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
	);
}

function AndroidPage() {
	return (
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
	);
}

function DownloadPage() {
	return (
		<div>
			<p className="text-4xl">Должен был скачаться файл для добавления события в календарь. Если не получилось, то тыкните по <a className="text-blue-600 hover:text-blue-700 underline cursor-pointer" onClick={downloadICS}>ссылке</a>.</p>
		</div>
	);
}
