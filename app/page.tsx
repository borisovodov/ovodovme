"use client";

import {
	Card,
	CardBody,
	Tab,
	Tabs,
} from "@heroui/react"
import { useState, useEffect } from "react"

import {
	Link,
	PageHeader,
	ProjectCard,
	Signature,
	TalkCard,
} from "@/components"
import { data } from "@/data"
import { fetchWeather, Weather } from "@/lib/weather";

export default function HomePage() {
	return (
		<div className="max-w-2xl">
			<PageHeader title="Всем привет от Бориса Оводова 👋🏻" />
			<Card shadow="sm">
				<CardBody className="text-gray-400 text-sm">
					<p>{data.city}<LocalTime /><LocalWeather /></p>
					{/* <p className="mt-1">R1a-M417 (R1a1a1) • Z1a1a</p>
					<p>D80B 2855 595A 0BAF FE09  0DC1 03D4 F66F D856 A100</p>
					<p>FQKf8ftw4JTgHeyhzFyL8yj5F64Z4bC7+DJFWuzUn4s</p> */}
					<p className="mt-1"><RemainingYears /></p>
				</CardBody>
			</Card>
			<Tabs fullWidth aria-label="Сферы" size="lg" className="mt-8">
				<Tab key="projects" title="Проекты">
					<ProjectCard
						name="Hermann"
						url="https://hermann.ovodov.me/"
						imageSrc="/hermann.png"
					>
						Тайм-трекер без трения для мака, айфона и эппл вотч.
					</ProjectCard>
					<ProjectCard
						name="Производственный календарь в формате iCal"
						url="/trud"
					>
						Ежегодно обновляемый производственный календарь для приложений-календарей.
					</ProjectCard>
					<ProjectCard
						name="Субъективный путеводитель по культовым местам Екатеринбурга"
						url="/ye"
						imageSrc="/ekb.png"
					>
						<i>Love letter</i> родному городу.
					</ProjectCard>
					<ProjectCard
						name="Генератор iCal-файлов с календарными событиями из URL"
						url="/event"
					>
						Полезная штучка для ваших автоматизаций.
					</ProjectCard>
				</Tab>
				<Tab key="media" title="Медийка">
					<ProjectCard
						name="Срединный путь"
						url="https://middleway.mave.digital"
						imageSrc="/middleway.jpg"
					>
						Саша и Боря разговаривают о том, что происходит вокруг. Как выбрать сторону, на которой хочется быть? Как сделать мир, или хотя бы себя, лучше? Как не сойти с ума в этом безумном мире?
					</ProjectCard>
					<ProjectCard
						name="Сайнс, бич"
						url="https://sciencebitch.mave.digital/"
						imageSrc="/sciencebitch.jpg"
					>
						«Сайнс, бич» — это шоу, в котором двое ребят пытаются разобраться в научных щщах. Мы глуповаты для науки, но всё равно её любим. Периодически копаемся в научных статьях, сёрфим Википедию и консультируемся у друзей. Раз в неделю мы собираемся обсудить очередную околонаучную тему, потравить байки и рассказать друг другу свои открытия во время рисёрча.
					</ProjectCard>
					<ProjectCard
						name="Борины закладки в Сафари"
						url="https://t.me/safariBookmarks"
						imageSrc="/safariBookmarks.jpeg"
					>
						Перфомансы и анонсы проектов.
					</ProjectCard>
					<ProjectCard
						name="Айтишные ивенты Екатеринбурга"
						url="https://t.me/itevents_ekb"
						imageSrc="/itevents_ekb.jpeg"
					>
						Агрегатор оффлайновых мероприятий для айтишников: митапов, конференций, лекций, хакатонов.
					</ProjectCard>
					<ProjectCard
						name="Туалетные записки"
						url="https://t.me/toiletnotes"
						imageSrc="/toiletnotes.jpeg"
					>
						Многогранность народного творчества из уборных всего мира в мультифорах формата A4.
					</ProjectCard>
					<ProjectCard
						name="Фильтры Tasty Coffee"
						url="https://t.me/tastyCoffeeFilters"
						imageSrc="/tastyCoffeeFilters.jpeg"
					>
						Впечатления от фильтров Тэйсти кофе и других обжарщиков.
					</ProjectCard>
					<ProjectCard
						name="Дневник Николая Неганова"
						url="/diary"
					>
						Письмо Николая Поликарповича Неганова, отправленное из станицы Кавказской его матери Агнии Ильиничне Негановой (Веселицкой) в Свердловск
					</ProjectCard>
				</Tab>
				<Tab key="talks" title="Паблик токи">
					<TalkCard
						name="Интервью для IT-подкаста Саши Торбека"
						url="https://www.youtube.com/watch?v=A6u0JiTCYpc"
						imageSrc="torbek.jpeg"
						year="2025"
						duration="1 час 27 минут"
					>
						<p>Как решиться на карьерный даунгрейд ради ментального комфорта. Зачем создавать свой инструмент, если есть готовые решения. Почему Боря считает время самым ценным ресурсом.</p>
					</TalkCard>
					<TalkCard
						name="Кейс-клуб с экспертами на Контуровской конференции аналитиков"
						url="https://youtu.be/6ex2IZJ6CCw?t=5669"
						imageSrc="kontur2024.jpeg"
						year="2024"
						duration="44 минуты"
					>
						<p>???</p>
					</TalkCard>
					<TalkCard
						name="Доклад «Почему аналитикам стоит делать пет-проекты» для ютуб-канала Наумена"
						url="https://www.youtube.com/watch?v=YJRmndQbBG8"
						imageSrc="pet-naumen.jpeg"
						year="2023"
						duration="26 минут"
					>
						<p>???</p>
					</TalkCard>
					<TalkCard
						name="Кейс-клуб с экспертами на Контуровской конференции аналитиков"
						url="https://www.youtube.com/live/vJi1IsFgQqU?t=7454"
						imageSrc="kontur2023.jpg"
						year="2023"
						duration="46 минут"
					>
						<p>???</p>
					</TalkCard>
					<TalkCard
						name="Доклад «Почему аналитикам стоит делать пет-проекты» на ДАМПе"
						url="https://youtube.com/watch?v=zeOJ6WIpv78"
						imageSrc="dump2023.jpeg"
						year="2023"
						duration="37 минут"
					>
						<p>???</p>
					</TalkCard>
					<TalkCard
						name="«Барный аналитик» на Контуровской конференции аналитиков"
						url="https://youtube.com/watch?v=PHwiIUsUvgQ"
						imageSrc="kontur2021.jpeg"
						year="2021"
						duration="29 минут"
					>
						<p>???</p>
					</TalkCard>
				</Tab>
				<Tab key="social" title="Соцсети">
					<p className="mt-4"><Link href="https://vas3k.club/user/borisovodov/">Вастрик.Клуб</Link></p>
					<p className="mt-4"><Link href="https://vk.com/borisovodov">ВК</Link></p>
					<p className="mt-4"><Link href="https://github.com/borisovodov">Гитхаб</Link></p>
					<p className="mt-4"><Link href="https://www.goodreads.com/borisovodov">Гудридс</Link></p>
					<p className="mt-4"><Link href="https://www.instagram.com/ovodovboris/">Инстаграм</Link></p>
					<p className="mt-4"><Link href="https://mykp.ru/borisovodov">Кинопоиск</Link></p>
					<p className="mt-4"><Link href="https://www.linkedin.com/in/borisovodov/">Линкедин</Link></p>
					{/* <p className="mt-4"><Link href="https://mastodon.social/@borisovodov">Мастодон</Link></p> */}
					<p className="mt-4"><Link href="https://nomadmania.com/profile/21540/nm/un/by/2024">Номад мания</Link></p>
					<p className="mt-4"><Link href="https://t.me/safariBookmarks">Телеграм</Link></p>
					{/* <p className="mt-4"><Link href="https://www.facebook.com/borisovodov">Фэйсбук</Link></p> */}
					<p className="mt-4"><Link href="https://www.youtube.com/@borisovodovlive">Ютуб</Link></p>
				</Tab>
				<Tab key="past" title="Позади">
					<p className="mt-4">Собирал <Link href="https://papersaround.com/">газеты со всего света</Link>.</p>
					<p className="mt-4">Преподавал астрономию в екатеринбургской <Link href="https://xn--35-6kclvec3aj7p.xn--80acgfbsl1azdqr.xn--p1ai/">35-й гимназии</Link>. В это время подготовил <Link href="/astroege.pdf">методичку по астрономии</Link> для успешной сдачи ЕГЭ по физике.</p>
					<p className="mt-4">Писал статьи в <Link href="https://vk.com/revmus">Ревмузе</Link>.</p>
					<p className="mt-4">Разработал <Link href="https://www.dropbox.com/s/owx6ddrix3gepcj/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D0%B5%20Quantum%20GIS.zip?dl=0">методичку</Link> для обучения студентов основам работы в ГИС.</p>
					<p className="mt-4">Играл в <Link href="https://cybico.bandcamp.com/music">КYБ и Ко</Link>.</p>
					<p className="mt-4">Сочинял стихи юности на «<Link href="http://pisanina.su">Писанине</Link>».</p>
					<p className="mt-4">Снимал фильмы на <Link href="/28studio.png">28-й студии</Link>.</p>
				</Tab>
				<Tab key="future" title="Впереди">
					<p className="mt-4">Проживу жизнь, наполненную до краёв.</p>
				</Tab>
			</Tabs>
			<Signature />
		</div>
	);
}

function LocalTime() {
	const { timeZone } = data
	const [time, setTime] = useState<Date | null>(null)

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date()), 1000)
		return () => clearInterval(interval)
	}, [])

	if (!time) {
		return <></>
	}

	const timeString = time.toLocaleTimeString("ru-RU", {
		hour12: false,
		timeZone,
	})

	return (
		<>, {timeString}</>
	);
}

function LocalWeather() {
	const [weather, setWeather] = useState<Weather | null>(null);

	useEffect(() => {
		fetchWeather(data.latitude, data.longitude, setWeather);
	}, []);

	if (!weather) {
		return <></>;
	}

	return (
		<>, {weather.condition} {weather.temperature}°C</>
	);
}

function RemainingYears() {
	const now = new Date();
	const target = new Date("2071-07-29");
	const msPerYear = 1000 * 60 * 60 * 24 * 365.2425;
	const diff = target.getTime() - now.getTime();
	const years = diff / msPerYear;
	const formatted = years.toLocaleString("ru-RU", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
	const intPart = Math.floor(years);
	let noun;
	const mod100 = intPart % 100;
	if (mod100 >= 11 && mod100 <= 14) {
		noun = "лет";
	} else {
		const mod10 = intPart % 10;
		if (mod10 === 1) noun = "год";
		else if (mod10 >= 2 && mod10 <= 4) noun = "года";
		else noun = "лет";
	}
	return <>Осталось ~ {formatted} {noun}</>;
}
