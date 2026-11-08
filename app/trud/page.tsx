"use client";

import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
	Accordion,
	Button,
	Card,
	ScrollShadow,
} from "@heroui/react";

import { Heading, Link, PageHeader, Signature } from "@/components";

export default function TrudPage() {
	const [isCopied, setIsCopied] = useState(false);
	const [isArchiveCopied, setIsArchiveCopied] = useState(false);

	async function addToClipboard() {
		const url = "https://ovodov.me/trud.ics";
		try {
			await navigator.clipboard.writeText(url);
		} catch {
			// Фолбэк: clipboard API может быть недоступен (нет фокуса/разрешения)
			const textarea = document.createElement("textarea");
			textarea.value = url;
			textarea.style.position = "fixed";
			textarea.style.opacity = "0";
			document.body.appendChild(textarea);
			textarea.select();
			// Единственный надёжный фолбэк копирования без clipboard API
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			document.execCommand("copy");
			textarea.remove();
		}
		setIsCopied(true);
		setTimeout(() => { setIsCopied(false); }, 1500);
	}

	async function addArchiveToClipboard() {
		const url = "https://ovodov.me/trud_archive.ics";
		try {
			await navigator.clipboard.writeText(url);
		} catch {
			// Фолбэк: clipboard API может быть недоступен (нет фокуса/разрешения)
			const textarea = document.createElement("textarea");
			textarea.value = url;
			textarea.style.position = "fixed";
			textarea.style.opacity = "0";
			document.body.appendChild(textarea);
			textarea.select();
			// Единственный надёжный фолбэк копирования без clipboard API
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			document.execCommand("copy");
			textarea.remove();
		}
		setIsArchiveCopied(true);
		setTimeout(() => { setIsArchiveCopied(false); }, 1500);
	}

	return (
		<div className="max-w-3xl">
			<PageHeader
				title="Производственный календарь в формате iCal (ics)"
				description="Поддерживается с 2010-го, обновлён на 2027-й. На Россию."
			/>
			<p className="mb-2">В интернете полно производственных календарей. Бери и пользуйся! Все они предназначены для печати или же доступны на отдельном сайте.</p>
			<p className="mb-2">Однако многие из нас пользуются приложениями-календарями (например Гугл Календарём или Аутлуком). Проблема в том, что для них не существует полноценного производственного календаря, а стандартные календари с праздниками путают нас событиями навроде «Масленицы» или «Дня смеха».</p>
			<p className="mb-2">Теперь вы можете подписаться на производственный календарь в формате iCal (ics), который понимает каждое приложение-календарь и ежегодно обновляется.</p>
			<p className="mb-2">Подписаться на календарь:</p>
			<ScrollShadow className="mb-4">
				<code className="inline-flex h-fit items-center rounded-sm bg-default/40 px-2 py-1 font-mono text-lg font-normal whitespace-nowrap text-default-foreground">
					<span>https://ovodov.me/trud.ics</span>
					<Button onPress={() => { void addToClipboard(); }} className="min-w-6" variant="ghost">
						{isCopied ? <CheckIcon className="size-6" /> : <ClipboardDocumentIcon className="size-6" />}
					</Button>
				</code>
			</ScrollShadow>
			<Heading>Инструкция по добавлению подписки на календарь</Heading>
			<Accordion className="mt-5">
				<Accordion.Item id="gInstruction">
					<Accordion.Heading>
						<Accordion.Trigger>
							Гугл Календарь
							<Accordion.Indicator />
						</Accordion.Trigger>
					</Accordion.Heading>
					<Accordion.Panel>
						<Accordion.Body>
							<p>Главное меню — Добавить другие календари — Добавить по URL — В поле «URL календаря» вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «Добавить календарь»</p>
						</Accordion.Body>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item id="mInstruction">
					<Accordion.Heading>
						<Accordion.Trigger>
							Майкрософт Аутлук
							<Accordion.Indicator />
						</Accordion.Trigger>
					</Accordion.Heading>
					<Accordion.Panel>
						<Accordion.Body>
							<p>Главная — Открыть календарь — Из Интернета — В поле вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «ОК»</p>
						</Accordion.Body>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item id="aInstruction">
					<Accordion.Heading>
						<Accordion.Trigger>
							Эппл Календарь на маке
							<Accordion.Indicator />
						</Accordion.Trigger>
					</Accordion.Heading>
					<Accordion.Panel>
						<Accordion.Body>
							<p>Файл — Новая подписка Календаря — В поле «URL-адрес календаря» вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «Подписаться»</p>
						</Accordion.Body>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item id="iosInstruction">
					<Accordion.Heading>
						<Accordion.Trigger>
							Эппл Календарь на айфоне
							<Accordion.Indicator />
						</Accordion.Trigger>
					</Accordion.Heading>
					<Accordion.Panel>
						<Accordion.Body>
							<p>Настройки — Пароли и учетные записи — Новая учетная запись — Другое — Подписной календарь — В поле «Сервер» вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «Далее»</p>
						</Accordion.Body>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
			<p className="mt-6 mb-2">Есть ещё календарь со всеми событиями с 2010-го. С ним могут быть проблемы на айфонах.</p>
			<ScrollShadow className="mb-4">
				<code className="inline-flex h-fit items-center rounded-sm bg-default/40 px-2 py-1 font-mono text-lg font-normal whitespace-nowrap text-default-foreground">
					<span>https://ovodov.me/trud_archive.ics</span>
					<Button onPress={() => { void addArchiveToClipboard(); }} className="min-w-6" variant="ghost">
						{isArchiveCopied ? <CheckIcon className="size-6" /> : <ClipboardDocumentIcon className="size-6" />}
					</Button>
				</code>
			</ScrollShadow>
			<Heading>Отзывы</Heading>
			<div className="mt-5">
				<Card className="mt-4">
					<Card.Content>
						<p>«<i>Легко импортировался в Сonfluence</i>»</p>
						<small>— Александр Шабельский</small>
					</Card.Content>
				</Card>
				<Card className="mt-4">
					<Card.Content>
						<p>«<i>Полжизни такое искал</i>»</p>
						<small>— Антон</small>
					</Card.Content>
				</Card>
				<Card className="mt-4">
					<Card.Content>
						<p>«<i>Очень выручили!</i>»</p>
						<small>— Дмитрий Овчаренко</small>
					</Card.Content>
				</Card>
				<Card className="mt-4">
					<Card.Content>
						<p>«<i>Искала сегодня производственный календарь, который можно было бы импортировать в iOS. Нашла Ваш сайт и радости не было предела!</i>»</p>
						<small>— Анна Гроховска</small>
					</Card.Content>
				</Card>
				<Card className="mt-4">
					<Card.Content>
						<p>«<i>Мне это нужно было всё время, что я работаю, но я не могла найти ничего подобного. Это было так странно — это же нужно всем, почему этого ещё никто не сделал?</i>»</p>
						<small>— Виктория Длугопольская</small>
					</Card.Content>
				</Card>
				<Card className="mt-4">
					<Card.Content>
						<p>«<i>Реально нужная тема, я всегда все праздничные дни либо гуглю, либо в ЛСР присылали по мылу</i>»</p>
						<small>— Кирилл Саламатов</small>
					</Card.Content>
				</Card>
			</div>
			<Heading>Мы в медиа</Heading>
			<ul className="mt-2 list-inside list-disc">
				<li className="mb-2"><Link href="https://пск-нн.рф/projector">ПСК-НН</Link></li>
				<li className="mb-2"><Link href="https://www.instagram.com/kova.tatya/reel/DVWHyrBja3_/">Татьяна | Financial analyst | Финансовый аналитик</Link></li>
				<li className="mb-2"><Link href="https://mbk-lab.ru/производственный-календарь-в-формат/">Лаборатория МБК</Link></li>
				<li className="mb-2"><Link href="https://www.youtube.com/watch?v=hsCv6eSbSFs&t=584s">Just Use</Link></li>
				<li className="mb-2"><Link href="https://www.iphones.ru/iNotes/kakoy-segodnya-prazdnik-dobavlyaem-vse-rossiyskie-vyhodnye-i-prazdniki-v-kalendar-na-iphone">iPhones.ru</Link></li>
			</ul>

			<Signature />
		</div>
	);
}
