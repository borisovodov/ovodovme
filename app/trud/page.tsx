"use client";

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
import { Card, CardBody } from "@heroui/card";

import Avatar from "@/components/avatar";
import Signature from "@/components/signature";

export default function TrudPage() {
	function addToClipboard() {
		navigator.clipboard.writeText("https://ovodov.me/trud.ics");
	}
	
	return (
		<div className="bg-white dark:bg-gray-800">
			<div className="p-8">
				<div className="max-w-2xl">
					<Avatar />
					<p className="text-xl">Производственный календарь в формате iCal (ics)</p>
					<p><i>Поддерживается с 2019-го, обновлён на 2025-й</i></p>
					<p className="mt-8 mb-2">В интернете полно производственных календарей. Бери и пользуйся! Все они предназначены для печати или же доступны на отдельном сайте.</p>
					<p className="mb-2">Однако многие из нас пользуются приложениями-календарями (например Гугл Календарём или Аутлуком). Проблема в том, что для них не существует полноценного производственного календаря, а стандартные календари с праздниками путают нас событиями навроде «Масленицы» или «Дня смеха».</p>
					<p className="mb-2">Теперь вы можете воспользоваться производственным календарём в формате iCal (ics), который понимает каждое приложение-календарь и ежегодно обновляется.</p>
					<p className="mb-2 inline-flex flex-none gap-2">
						<span>Подписаться на календарь:</span>
						<Code className="h-8">https://ovodov.me/trud.ics</Code>
						<Button onPress={addToClipboard} className="bg-default/40 h-8 px-0 rounded-small">
							<ClipboardDocumentIcon className="size-6" />
						</Button>
					</p>
					<p className="mb-2">Инструкция по добавлению календаря в используемое вами приложение:</p>
					<Accordion>
						<AccordionItem key="gInstruction" title="Гугл Календарь">
							<p>Главное меню — Добавить другие календари — Добавить по URL — В поле «URL календаря» вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «Добавить календарь»</p>
						</AccordionItem>
						<AccordionItem key="mInstruction" title="Майкрософт Аутлук">
							<p>Главная — Открыть календарь — Из Интернета — В поле вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «ОК»</p>
						</AccordionItem>
						<AccordionItem key="aInstruction" title="Эппл Календарь">
							<p>Файл — Новая подписка Календаря — В поле «URL-адрес календаря» вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «Подписаться»</p>
						</AccordionItem>
						<AccordionItem key="iosInstruction" title="Эппл Календарь на iOS">
							<p>Настройки — Пароли и учетные записи — Новая учетная запись — Другое — Подписной календарь — В поле «Сервер» вставьте «https://ovodov.me/trud.ics» после чего нажмите кнопку «Далее»</p>
						</AccordionItem>
					</Accordion>
					<div className="mt-5">
						<Card className="mt-4">
							<CardBody>
								<p>«<i>Спасибо за https://ovodov.me/trud — полжизни такое искал</i>»</p>
								<small>— Антон</small>
							</CardBody>
						</Card>
						<Card className="mt-4">
							<CardBody>
								<p>«<i>Очень выручили!</i>»</p>
								<small>— Дмитрий Овчаренко</small>
							</CardBody>
						</Card>
						<Card className="mt-4">
							<CardBody>
								<p>«<i>Искала сегодня производственный календарь, который можно было бы импортировать в iOS. Нашла Ваш сайт и радости не было предела!</i>»</p>
								<small>— Анна Гроховска</small>
							</CardBody>
						</Card>
						<Card className="mt-4">
							<CardBody>
								<p>«<i>Мне это нужно было всё время, что я работаю, но я не могла найти ничего подобного. Это было так странно — это же нужно всем, почему этого ещё никто не сделал?</i>»</p>
								<small>— Виктория Длугопольская</small>
							</CardBody>
						</Card>
						<Card className="mt-4">
							<CardBody>
								<p>«<i>Реально нужная тема, я всегда все праздничные дни либо гуглю, либо в ЛСР присылали по мылу</i>»</p>
								<small>— Кирилл Саламатов</small>
							</CardBody>
						</Card>
					</div>
					<Signature />
				</div>
			</div>
		</div>
	);
}
