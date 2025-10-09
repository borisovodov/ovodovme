"use client";

import {
	Card,
	CardBody,
	Tab,
	Tabs
} from "@heroui/react"
import { fetchWeatherApi } from "openmeteo";
import { useState, useEffect } from "react"

import { data } from "@/data"
import { Link, PageHeader, Signature } from "@/components"

export default function HomePage() {
	return (
		<div className="max-w-2xl">
			<PageHeader title="Всем привет от Бориса Оводова 👋🏻" />
			<Card shadow="sm">
				<CardBody className="text-gray-400 text-sm">
					<p>{data.city}, <LocalTime /><Weather /></p>
					<p className="mt-1">R1a-M417 (R1a1a1) • Z1a1a</p>
					{/* <p>D80B 2855 595A 0BAF FE09  0DC1 03D4 F66F D856 A100</p>
					<p>FQKf8ftw4JTgHeyhzFyL8yj5F64Z4bC7+DJFWuzUn4s</p> */}
					<p className="mt-1"><RemainingYears /></p>
				</CardBody>
			</Card>
			<Tabs fullWidth aria-label="Сферы" size="lg" className="mt-8">
				<Tab key="projects" title="Проекты">
					<p className="mt-4">Разрабатываю «<Link href="https://hermann.ovodov.me/">Германн</Link>» — тайм-трекер без трения.</p>
					<p className="mt-4">Собираю газеты со всего света и веду об этом англоязычный <Link href="https://papersaround.com/">вебсайт</Link>.</p>
					<p className="mt-4">Поддерживаю <i>нормальный</i> <Link href="/trud">производственный календарь</Link> в формате айкол.</p>
					<p className="mt-4">Пишу субъективный <Link href="/ye">путеводитель</Link> по культовым местам Екатеринбурга.</p>
					<p className="mt-4">Сделал <Link href="/event">генератор</Link> iCal-файлов с календарными событиями из URL.</p>
				</Tab>
				<Tab key="media" title="Медийка">
					<p className="mt-4">Рассказываю истории про науку, общество и прочие щщи в подкастах студии «<Link href="https://podcasts.apple.com/ru/channel/%D0%B1%D0%BE%D1%80%D0%B8%D1%8F-%D0%B8-%D1%80%D0%B5%D0%B1%D1%8F%D1%82%D0%B0/id6445257341?l=en">Боря и ребята</Link>».</p>
					<p className="mt-4">Опубликовал <Link href="/diary">письмо</Link> двоюродного деда.</p>
					<p className="mt-8">Веду несколько уютных Телеграм-каналов:</p>
					<ul className="list-disc list-inside">
						<li className="mt-2"><Link href="https://t.me/safariBookmarks">Борины закладки в Сафари</Link> — перфомансы и анонсы проектов.</li>
						<li className="mt-2"><Link href="https://t.me/itevents_ekb">Айтишные ивенты Екатеринбурга</Link> — агрегатор оффлайновых мероприятий для айтишников: митапов, конференций, лекций, хакатонов.</li>
						<li className="mt-2"><Link href="https://t.me/tastyCoffeeFilters">Фильтры Tasty Coffee</Link> — впечатления от фильтров Тэйсти кофе и других обжарщиков.</li>
						<li className="mt-2"><Link href="https://t.me/toiletnotes">Туалетные записки</Link> — многогранность народного творчества из уборных всего мира в мультифорах формата A4.</li>
						<li className="mt-2"><Link href="https://t.me/hermannapp">Hermann</Link> — новости лучшего тайм-трекера на этой планете.</li>
					</ul>
				</Tab>
				<Tab key="talks" title="Паблик токи">
					<p className="mt-4"><Link href="https://www.youtube.com/watch?v=A6u0JiTCYpc">Интервью</Link> для IT-подкаста Саши Торбека, 2025.</p>
					<p className="mt-4">Кейс-клубы с экспертами на Контуровской конференции аналитиков в <Link href="https://www.youtube.com/live/vJi1IsFgQqU?si=Jg2TI6bCQ0PqM98Z&t=7450">2023-м</Link> и <Link href="https://youtu.be/6ex2IZJ6CCw?t=5669">2024-м</Link> годах.</p>
					<p className="mt-4">Доклад «<Link href="https://www.youtube.com/watch?v=YJRmndQbBG8">Почему аналитикам стоит делать пет-проекты</Link>» для ютуб-канала Наумена, 2023. Его же <Link href="https://youtube.com/watch?v=zeOJ6WIpv78">рассказывал</Link> на екатеринбургском ДАМПе в том же году.</p>
					<p className="mt-4">«<Link href="https://youtube.com/watch?v=PHwiIUsUvgQ">Барный аналитик</Link>» на Контуровской конференции аналитиков, 2021.</p>
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
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date()), 1000)
		return () => clearInterval(interval)
	}, [])

	const timeString = time.toLocaleTimeString("ru-RU", {
		hour12: false,
		timeZone,
	})

	return (
		<>{timeString}</>
	);
}

const weatherEmoji: Record<number, string> = {
	0: "☀️",
	1: "🌤️",
	2: "🌥️",
	3: "☁️",
	45: "🌫️",
	48: "🌫️",
	51: "🌧️",
	53: "🌧️",
	55: "🌧️",
	56: "🌨️",
	57: "🌨️",
	61: "🌦️",
	63: "🌧️",
	65: "🌧️",
	66: "🌧️",
	67: "🌧️",
	71: "🌨️",
	73: "🌨️",
	75: "🌨️",
	77: "🌨️",
	80: "🌦️",
	81: "🌧️",
	82: "🌧️",
	85: "🌨️",
	86: "🌨️",
	95: "🌩️",
	96: "⛈️",
	99: "⛈️",
}

function Weather() {
	const [weather, setWeather] = useState<{ temperature: number; condition: string } | null>(null);

	useEffect(() => {
		async function fetchWeather() {
			const params = {
				latitude: data.latitude,
				longitude: data.longitude,
				current: ["weather_code", "temperature_2m"],
			};
			const url = "https://api.open-meteo.com/v1/forecast";
			const responses = await fetchWeatherApi(url, params);
			const fbCurrent = responses[0].current();
			if (fbCurrent) {
				const condition = weatherEmoji[fbCurrent.variables(0)?.value() ?? 0] || "❓";
				const temperature = Math.round(fbCurrent.variables(1)?.value() ?? 0);
				setWeather({ condition, temperature });
			}
		}

		fetchWeather();
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
	return <>~ {formatted} {noun}</>;
}
