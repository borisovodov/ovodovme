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
		<div className="max-w-3xl">
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
						name="Айтишные ивенты Екатеринбурга"
						url="https://t.me/itevents_ekb"
						imageSrc="/itevents_ekb.jpeg"
					>
						Агрегатор оффлайновых мероприятий для айтишников: митапов, конференций, лекций, хакатонов.
					</ProjectCard>
					<ProjectCard
						name="Субъективный путеводитель по культовым местам Екатеринбурга"
						url="/ye"
						imageSrc="/ekb.png"
					>
						<i>Love letter</i> родному городу.
					</ProjectCard>
					<ProjectCard
						name="SemanticColorPicker"
						url="https://swiftpackageindex.com/borisovodov/SemanticColorPicker"
					>
						Компонент SwiftUI, который позволяет выбирать семантические цветовые токены — пользовательские идентификаторы, сопоставленные с адаптивными, зависящими от темы значениями Color, — вместо выбора обычных RGB-цветов.
					</ProjectCard>
					<ProjectCard
						name="TreePicker"
						url="https://swiftpackageindex.com/borisovodov/TreePicker"
					>
						Компонент SwiftUI для выбора вариантов из иерархических данных в виде древовидного списка.
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
						name="Борины закладки в Сафари"
						url="https://t.me/safariBookmarks"
						imageSrc="/safariBookmarks.jpeg"
					>
						Перфомансы и анонсы проектов.
					</ProjectCard>
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
						url="https://www.youtube.com/watch?v=6ex2IZJ6CCw?t=5669"
						imageSrc="kontur2024.jpg"
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
						<p>Повтор доклада с ДАМПа, только без вопросов аудитории. И глупых шуточек поменьше.</p>
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
						<p>Если брать на себя сложные рабочие задачи, можно вырасти от джуна до мидла меньше, чем за год. После такого стремительного роста у некоторых аналитиков появляется ощущение потолка в развитии. Вроде все задачи выполняешь на отлично, а куда идти дальше — непонятно. Мой доклад предлагает один из путей для профессионального роста аналитика, а также варианты развития компетенций.</p>
						<p>Также в своем докладе я расскажу:</p>
						<ul>
							<li>Зачем аналитикам делать собственные продукты?</li>
							<li>Чем поможет опыт разработки при проработке решений?</li>
							<li>Зачем нам знать, какие фишки есть в разных языках программирования?</li>
						</ul>
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
					<ProjectCard
						name="Papers Around"
						url="https://papersaround.com/"
						imageSrc="/papersaround.png"
						years="2014–2025"
					>
						Собирал коллекцию газет со всего света.
					</ProjectCard>
					<ProjectCard
						name="Методичка по астрономии для успешной сдачи ЕГЭ по физике"
						url="/astroege.pdf"
						years="2019–2021"
					>
						Подготовил методичку для своих учеников пока преподавал астрономию в екатеринбургской <Link href="https://xn--35-6kclvec3aj7p.xn--80acgfbsl1azdqr.xn--p1ai/">35-й гимназии</Link>. Сейчас, скорее всего, неактуальна.
					</ProjectCard>
					<ProjectCard
						name="Писанина"
						url="https://pisanina.su"
						imageSrc="/pisanina.png"
						years="2011–2014"
					>
						Вместе с Ильёй сочиняли наивные стихи о юношеских влюблённостях и блюзовом настроении.
					</ProjectCard>
					<ProjectCard
						name="Методичка для обучения студентов основам работы в ГИС"
						url="https://www.dropbox.com/s/owx6ddrix3gepcj/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D0%B5%20Quantum%20GIS.zip?dl=0"
						years="2013"
					>
						Курсач, который зашёл слишком далеко.
					</ProjectCard>
					<ProjectCard
						name="revmus"
						url="https://vk.com/revmus"
						imageSrc="/revmus.jpg"
						years="2012–2013"
					>
						???
					</ProjectCard>
					<ProjectCard
						name="КYБ и Ко"
						url="https://cybico.bandcamp.com/music"
						imageSrc="/cubeandco.jpg"
						years="2009–2013"
					>
						Играли с Костей блюз и рок-н-ролл в старших классах школы.
					</ProjectCard>
					<ProjectCard
						name="28-я студия"
						url="/28studio.png"
						imageSrc="/28studio_thumbnail.jpg"
						years="2005–2009"
					>
						Снимали с Костей документальные фильмы про школу. Камера Джэй-Ви-Си, монтаж в Муви-мейкере, рисунки в Пэинте, пиратский саундтрек. Студию назвали в честь 28-й комнаты общежития интерната, где мы жили.
					</ProjectCard>
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
	const formatted = years.toLocaleString("ru-RU", { minimumFractionDigits: 1, maximumFractionDigits: 4 });
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
