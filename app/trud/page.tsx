"use client";

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import {
	Accordion,
	AccordionItem,
	Button,
	Card,
	CardBody,
	Code,
	ScrollShadow,
} from "@heroui/react";

import { PageHeader, Signature } from "@/components";

export default function TrudPage() {
	function addToClipboard() {
		navigator.clipboard.writeText("https://ovodov.me/trud.ics");
	}
	
	return (
		<div className="max-w-2xl">
			<PageHeader
				title="Производственный календарь в формате iCal (ics)"
				description="Поддерживается с 2019-го, обновлён на 2026-й"
			/>
			<p className="mb-2">В интернете полно производственных календарей. Бери и пользуйся! Все они предназначены для печати или же доступны на отдельном сайте.</p>
			<p className="mb-2">Однако многие из нас пользуются приложениями-календарями (например Гугл Календарём или Аутлуком). Проблема в том, что для них не существует полноценного производственного календаря, а стандартные календари с праздниками путают нас событиями навроде «Масленицы» или «Дня смеха».</p>
			<p className="mb-2">Теперь вы можете подписаться на производственный календарь в формате iCal (ics), который понимает каждое приложение-календарь и ежегодно обновляется.</p>
			<p className="mb-2">Подписаться на календарь:</p>
			<ScrollShadow className="mb-4">
				<Code size="lg" className="inline-flex items-center">
					<span>https://ovodov.me/trud.ics</span>
					<Button onPress={addToClipboard} className="min-w-6 bg-default/40 bg-opacity-0">
						<ClipboardDocumentIcon className="size-6" />
					</Button>
				</Code>
			</ScrollShadow>
			<p className="mb-2">Инструкция по добавлению подписки на календарь:</p>
			<Accordion>
				<AccordionItem key="gInstruction" title="Гугл Календарь">
					<p>Главное меню — Добавить другие календари — Добавить по URL — В поле «URL календаря» вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «Добавить календарь»</p>
				</AccordionItem>
				<AccordionItem key="mInstruction" title="Майкрософт Аутлук">
					<p>Главная — Открыть календарь — Из Интернета — В поле вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «ОК»</p>
				</AccordionItem>
				<AccordionItem key="aInstruction" title="Эппл Календарь на маке">
					<p>Файл — Новая подписка Календаря — В поле «URL-адрес календаря» вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «Подписаться»</p>
				</AccordionItem>
				<AccordionItem key="iosInstruction" title="Эппл Календарь на айфоне">
					<p>Настройки — Пароли и учетные записи — Новая учетная запись — Другое — Подписной календарь — В поле «Сервер» вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «Далее»</p>
				</AccordionItem>
			</Accordion>
			<div className="mt-5">
				<Card shadow="sm" className="mt-4">
					<CardBody>
						<p>«<i>Спасибо за https://ovodov.me/trud — полжизни такое искал</i>»</p>
						<small>— Антон</small>
					</CardBody>
				</Card>
				<Card shadow="sm" className="mt-4">
					<CardBody>
						<p>«<i>Очень выручили!</i>»</p>
						<small>— Дмитрий Овчаренко</small>
					</CardBody>
				</Card>
				<Card shadow="sm" className="mt-4">
					<CardBody>
						<p>«<i>Искала сегодня производственный календарь, который можно было бы импортировать в iOS. Нашла Ваш сайт и радости не было предела!</i>»</p>
						<small>— Анна Гроховска</small>
					</CardBody>
				</Card>
				<Card shadow="sm" className="mt-4">
					<CardBody>
						<p>«<i>Мне это нужно было всё время, что я работаю, но я не могла найти ничего подобного. Это было так странно — это же нужно всем, почему этого ещё никто не сделал?</i>»</p>
						<small>— Виктория Длугопольская</small>
					</CardBody>
				</Card>
				<Card shadow="sm" className="mt-4">
					<CardBody>
						<p>«<i>Реально нужная тема, я всегда все праздничные дни либо гуглю, либо в ЛСР присылали по мылу</i>»</p>
						<small>— Кирилл Саламатов</small>
					</CardBody>
				</Card>
			</div>
			<Signature />
		</div>
	);
}
