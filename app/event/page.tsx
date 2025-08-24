"use client";

import { Button, Code, Link, ScrollShadow } from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

import { Avatar, Signature } from "@/components";
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
	const [errorMessage, setErrorMessage] = useState<string>("");

	useEffect(() => {
		try {
			if (isMainPage()) {
				setMode(Mode.MAIN);
			} else if (navigator.userAgent.includes("iPhone") && typeof window.TelegramWebviewProxy !== "undefined" && typeof window.TelegramWebviewProxyProto !== "undefined") {
				setMode(Mode.IOS_TELEGRAM_PREVIEW);
			} else if (navigator.userAgent.includes("Android") && typeof window.TelegramWebview !== "undefined") {
				setMode(Mode.ANDROID_TELEGRAM_PREVIEW);
			} else {
				downloadICS();
				setMode(Mode.DOWNLOAD);
			}
		} catch(error) {
			const message = error instanceof Error ? error.message : "Неизвестная ошибка";
			setErrorMessage(message);
			setMode(Mode.ERROR);
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
			: mode === Mode.ERROR ?
				<ErrorPage message={errorMessage} setMode={setMode} />
			: null}
		</>
	);
}

function MainPage() {
	return (
		<div className="p-8">
			<div className="max-w-2xl">
				<Avatar />
				<p className="text-xl">Генератор файлов с календарными событиями из URL</p>
				<p className="mt-8 mb-2">Страничка пригодится, если нужно кинуть кому-нибудь ссылку на скачивание файла с событием для календаря (iCal, ics), а поднимать свой свой CalDAV-сервер для этого дофига делов.</p>
				<p className="mt-8">Ссылка на скачивание формируется следующим образом:</p>
				<p className="mt-2"><Code size="md">https://ovodov.me/event?summary=</Code> — название события в <Link href="https://en.wikipedia.org/wiki/Percent-encoding">URL-кодировке</Link>.</p>
				<p className="mt-2"><Code size="md">&start=</Code> — дата и время начала события в формате <Link href="https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format">ISO 8601</Link> в <Link href="https://en.wikipedia.org/wiki/Percent-encoding">URL-кодировке</Link>. Если часовой пояс не указан, то используется UTC. Для событий на несколько дней указываем дату без времени и часового пояса.</p>
				<p className="mt-2"><Code size="md">&end=</Code> — дата и время окончания события в формате <Link href="https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format">ISO 8601</Link> в <Link href="https://en.wikipedia.org/wiki/Percent-encoding">URL-кодировке</Link>. Если часовой пояс не указан, то используется UTC. Для событий на несколько дней указываем дату без времени и часового пояса.</p>
				<p className="mt-2"><Code size="md">&location=</Code> — место проведения события в <Link href="https://en.wikipedia.org/wiki/Percent-encoding">URL-кодировке</Link>. Не обязательно указывать.</p>
				<p className="mt-2"><Code size="md">&url=</Code> — URL события в <Link href="https://en.wikipedia.org/wiki/Percent-encoding">URL-кодировке</Link>. Не обязательно указывать.</p>
				<p className="mt-8">Например:</p>
				<ScrollShadow className="w-full mt-2">
					<Code size="md">https://ovodov.me/event?summary=Meeting%20with%20friends&location=Kollektiv%20bar&start=2025-08-13T20:00:00%2B05:00&end=2025-08-13T23:00:00%2B05:00&url=https://klktv91.ru</Code>
				</ScrollShadow>
				<p className="mt-2">Или на несколько дней:</p>
				<ScrollShadow className="w-full mt-2">
					<Code size="md">https://ovodov.me/event?summary=Trekking&location=Taganay&start=2025-08-13&end=2025-08-16</Code>
				</ScrollShadow>
				<p className="mt-8">Переходите по ссылке и скачается файл с указанным наполнением в формате iCal.</p>
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

function ErrorPage({ message, setMode }: { message: string, setMode: (mode: Mode) => void }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
			<p className="text-4xl">Упс, чёт какая-то трабла.</p>
			<p className="mt-4">{message}</p>
			<Button
				className="mt-4"
				onPress={() => {
					setMode(Mode.MAIN)
					redirect("/event")
				}}
			>
				Вернуть всё как было
			</Button>
		</div>
	);
}
