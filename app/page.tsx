"use client";

import {
	Card,
	CardBody,
	Tab,
	Tabs,
	Switch,
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
import { calculateRemainingTime, RemainingTime } from "@/lib/years";

export default function HomePage() {
	const [isWork, setIsWork] = useState(false);

	return (
		<div className="max-w-3xl">
			<PageHeader title="Всем привет от Бориса Оводова 👋🏻" />
			<Card shadow="sm">
				<CardBody className="text-gray-400 text-sm">
					<p>{data.current.city}<LocalTime /><LocalWeather /></p>
					<p className="mt-1"><RemainingYears /></p>
				</CardBody>
			</Card>
			<Tabs fullWidth aria-label="Сферы" size="lg" className="mt-8">
				<Tab key="projects" title="Польза">
					<ProjectCard
						name="Hermann"
						url="https://hermann.ovodov.me/"
						imageSrc="hermann.png"
					>
						Тайм-трекер, который помогает понять, на что уходит жизнь. Заточен не на учёт почасовой ставки работы фрилансера, а на личное счастье и осознанность. Помогает ответить на вопрос: «занимаюсь ли я тем, что даёт мне силы?» Работает на маке, айфоне и эппл вотч.
					</ProjectCard>
					<ProjectCard
						name="Производственный календарь в формате iCal"
						url="/trud"
						imageSrc="trud.jpg"
					>
						Ежегодно обновляемый производственный календарь для приложений-календарей.
					</ProjectCard>
					<ProjectCard
						name="Айтишные ивенты Екатеринбурга"
						url="https://t.me/itevents_ekb"
						imageSrc="itevents_ekb.jpeg"
					>
						Агрегатор оффлайновых мероприятий для айтишников Еката: митапов, конференций, лекций, хакатонов.
					</ProjectCard>
					<ProjectCard
						name="Субъективный путеводитель по Екатеринбургу"
						url="/ye"
						imageSrc="ekb.jpg"
					>
						<i>Love letter</i> родному городу.
					</ProjectCard>
					<ProjectCard
						name="Генератор iCal-файлов с календарными событиями из URL"
						url="/event"
					>
						Пригодится, если нужно кинуть кому-нибудь ссылку на скачивание файла с событием для календаря (iCal, ics), а поднимать свой CalDAV-сервер для этого дофига делов.
					</ProjectCard>
					<ProjectCard
						name="SemanticColorPicker"
						url="https://swiftpackageindex.com/borisovodov/SemanticColorPicker"
					>
						Контрол SwiftUI, который позволяет выбирать из ряда семантических цветов, вместо конкретных значений RGBa. Семантические цвета могут адаптироваться под тёмную или светлую тему в отличие от прибитых гвоздями значений цвета в дефолтном <Link href="https://developer.apple.com/documentation/swiftui/colorpicker">ColorPicker</Link>.
					</ProjectCard>
					<ProjectCard
						name="TreePicker"
						url="https://swiftpackageindex.com/borisovodov/TreePicker"
					>
						Контрол SwiftUI для выбора элементов из древовидного списка. Как <Link href="https://developer.apple.com/documentation/swiftui/picker">Picker</Link>, но с иерархией.
					</ProjectCard>
				</Tab>
				<Tab key="media" title="Медийка">
					<ProjectCard
						name="Борины закладки в Сафари"
						url="https://t.me/safariBookmarks"
						imageSrc="safariBookmarks.jpeg"
					>
						Основной телеграм-канал с клоунадой и анонсами проектов.
					</ProjectCard>
					<ProjectCard
						name="Срединный путь"
						url="https://middleway.mave.digital"
						imageSrc="middleway.jpg"
					>
						С Сашей ведём разговорный подкаст, где пытаемся понять как жить эту жизнь, когда ты маленький человек, который просто пытается жить лучшую жизнь из возможных, а вокруг творится невообразимый ужас. Это про вечный поиск баланса, отсутствие простых решений и однозначных истин.
					</ProjectCard>
					<ProjectCard
						name="Сайнс, бич"
						url="https://sciencebitch.mave.digital/"
						imageSrc="sciencebitch.jpg"
					>
						Подкаст, в котором мы с Лёшей разбирались в научных щщах. Очень крутой продакшн, приглашённые гости, фичеринг на ряде платформ, много вложенных сил. Любимый подкаст моей мамы.
					</ProjectCard>
					<ProjectCard
						name="Дневник Николая Неганова"
						url="diary"
						imageSrc="diary.jpg"
					>
						Оцифрованное письмо моего двоюродного деда Николая Поликарповича Неганова, отправленное его матери Агнии Ильиничне Веселицкой в 1953-м году. Описание путешествия из Свердловска к родственникам в Краснодарский край через вятские попутки, волжские пароходы, кавказские поезда, каспийские волны и туркменские пустыни в послевоенной стране.
					</ProjectCard>
					<ProjectCard
						name="Туалетные записки"
						url="https://t.me/toiletnotes"
						imageSrc="toiletnotes.jpeg"
					>
						Коллекция народного творчества из уборных всего мира в мультифорах формата A4.
					</ProjectCard>
					<ProjectCard
						name="Мамкины капперы"
						url="https://t.me/momsCuppers"
						imageSrc="tastyCoffeeFilters.jpeg"
					>
						С Лёшей и Лёшей веду телеграм-канал с впечатлениями от кофейного зерна российских обжарщиков.
					</ProjectCard>
					<ProjectCard
						name="365"
						url="https://www.instagram.com/ovodovboris/reel/COInlUFDEGy/"
						imageSrc="365.jpg"
					>
						Видео с секундными кусочками каждого дня в течение 2022–2023-го года. Полотно о жизни маленького человека за год, в который произошло всё: переезд в новый дом, запуск публичных проектов, бесконечный локдаун, хронический гастроэзофагеальный рефлюкс, смерть отца, защита на первую категорию, помолвка и открытие в себе новых страстей и талантов. Жизнь как перфоманс, ёпта.
					</ProjectCard>
				</Tab>
				<Tab key="talks" title="Паблик токи">
					<Switch
						isSelected={isWork}
						onValueChange={setIsWork}
						size="sm"
						color="warning"
					>
						Болтовня по работе
					</Switch>

					{isWork && (
						<TalkCard
							name="Familio Index. Краткий обзор"
							url="https://vkvideo.ru/video-199876969_456239093"
							imageSrc="familio-index.jpeg"
							year="2026"
							duration="8 минут"
						>
							Провёл демо для анонса сервиса Familio Index.
						</TalkCard>
					)}
					<TalkCard
						name="Интервью для IT-подкаста Саши Торбека"
						url="https://www.youtube.com/watch?v=A6u0JiTCYpc"
						imageSrc="torbek.jpeg"
						year="2025"
						duration="1 час 27 минут"
					>
						Поговорили с Сашей про мотивацию, стоящую за созданием «Германна», ценность времени как ресурса, про то, как делать подкасты, и решиться на карьерный даунгрейд.
					</TalkCard>
					{isWork && (
						<TalkCard
							name="Как перенести древо с MyHeritage на Familio?"
							url="https://vkvideo.ru/video-199876969_456239078"
							imageSrc="mh2familio.jpeg"
							year="2025"
							duration="5 минут"
						>
							Записал инструкцию для беженцев.
						</TalkCard>
					)}
					<TalkCard
						name="Кейс-клуб с экспертами на Контуровской конференции аналитиков"
						url="https://youtu.be/6ex2IZJ6CCw?t=5669"
						imageSrc="kontur2024.jpg"
						year="2024"
						duration="44 минуты"
					>
						С Олей, Таней и Ромой обсудили, как отвечать на давление авторитета и разделять зоны ответственности.
					</TalkCard>
					{isWork && (
						<TalkCard
							name="Релиз Naumen SMP 4.18"
							url="https://www.youtube.com/watch?v=l1lVNIyy4Zo"
							imageSrc="smp418.jpeg"
							year="2024"
							duration="38 минут"
						>
							Бритым презентовал новую версию продукта.
						</TalkCard>
					)}
					{isWork && (
						<TalkCard
							name="Релиз Naumen SMP 4.17"
							url="https://www.youtube.com/watch?v=Q4Nw4xpcqDw"
							imageSrc="smp417.jpeg"
							year="2023"
							duration="48 минут"
						>
							Бородатым презентовал новую версию продукта.
						</TalkCard>
					)}
					<TalkCard
						name="Доклад «Почему аналитикам стоит делать пет-проекты» для ютуб-канала Наумена"
						url="https://www.youtube.com/watch?v=YJRmndQbBG8"
						imageSrc="pet-naumen.jpeg"
						year="2023"
						duration="26 минут"
					>
						Повтор доклада с ДАМПа, только без вопросов аудитории. И глупых шуточек поменьше.
					</TalkCard>
					<TalkCard
						name="Кейс-клуб с экспертами на Контуровской конференции аналитиков"
						url="https://youtu.be/vJi1IsFgQqU?t=7454"
						imageSrc="kontur2023.jpg"
						year="2023"
						duration="46 минут"
					>
						Обсудили с Аней, Олей и Дашей как перестать быть мамой-уткой, справляться со сложностью, попросить больше ответственности и находить время на стратегическое развитие.
					</TalkCard>
					<TalkCard
						name="Доклад «Почему аналитикам стоит делать пет-проекты» на ДАМПе"
						url="https://youtube.com/watch?v=zeOJ6WIpv78"
						imageSrc="dump2023.jpeg"
						year="2023"
						duration="37 минут"
					>
						Рассказал о том, как пет-проекты могут помочь в карьерном и личном развитии системного аналитика.
					</TalkCard>
					{isWork && (
						<TalkCard
							name="Релиз Naumen SMP 4.16"
							url="https://www.youtube.com/watch?v=yxvGS1NSfS4"
							imageSrc="smp416.jpeg"
							year="2023"
							duration="52 минуты"
						>
							Щетинистым презентовал новую версию продукта.
						</TalkCard>
					)}
					{isWork && (
						<TalkCard
							name="Релиз Naumen SMP 4.15"
							url="https://www.youtube.com/watch?v=Ek-lmxg1GE8"
							imageSrc="smp415.jpeg"
							year="2022"
							duration="46 минут"
						>
							Обросшим презентовал новую версию продукта.
						</TalkCard>
					)}
					<TalkCard
						name="Лайв про опыт преподавания астрономии"
						url="https://www.instagram.com/tv/CTXZGWCj6zX/"
						imageSrc="astrolive2021.jpeg"
						year="2021"
						duration="1 час"
					>
						Рассказал как 6 лет преподавал астрономию по субботам в екатеринбургской 35-й гимназии. Про вдохновение школьников, бумажную работу и изобретение своего подхода к обучению.
					</TalkCard>
					<TalkCard
						name="Интервью в рамках «Барного аналитика» на Контуровской конференции аналитиков"
						url="https://youtube.com/watch?v=PHwiIUsUvgQ"
						imageSrc="kontur2021.jpeg"
						year="2021"
						duration="29 минут"
					>
						Милейше поболтали с Дашей и Антоном про преподавание, развитие системных аналитиков, как ими стать (привет Любовь Андреевне), где заканчиваются границы роли и профессиональное выгорание.
					</TalkCard>
				</Tab>
				<Tab key="social" title="Соцсети">
					<p className="mt-4"><Link href="https://www.imdb.com/user/ur105749044/">АйЭмДиБи</Link></p>
					<p className="mt-4"><Link href="https://vas3k.club/user/borisovodov/">Вастрик.Клуб</Link></p>
					<p className="mt-4"><Link href="https://vk.com/borisovodov">ВК</Link></p>
					<p className="mt-4"><Link href="https://github.com/borisovodov">Гитхаб</Link></p>
					<p className="mt-4"><Link href="https://www.goodreads.com/borisovodov">Гудридс</Link></p>
					<p className="mt-4"><Link href="https://www.instagram.com/ovodovboris/">Инстаграм</Link></p>
					<p className="mt-4"><Link href="https://www.linkedin.com/in/borisovodov/">Линкедин</Link></p>
					{/* <p className="mt-4"><Link href="https://mastodon.social/@borisovodov">Мастодон</Link></p> */}
					<p className="mt-4"><Link href="https://nomadmania.com/profile/21540/nm/un/by/2024">Номад Мания</Link></p>
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
						<p>Летом 2013-го года моя младшая сестрёнка Саша на почте увидела оборванный кусок газеты, который ранее служил упаковкой для товаров из Китая. Саша не смогла удержаться и принесла этот крохотный кусочек другой культуры домой. Немного позже ей пришло в голову, что газеты с их уникальным языком, типографикой, изображениями и дизайном идеально подойдут коллекционерам, мечтающим о далеких путешествиях. Так друзья начали привозить нам газеты со всего мира, а эта идея превратилась в отдельный вебсайт.</p>
						<p className="mt-4">По итогу 370 газет из 215-и городов (и 51-й страны) на 74-х языках привезли 78 прекрасных человек. Спасибо вам за этот труд!</p>
					</ProjectCard>
					<ProjectCard
						name="Методичка по астрономии для успешной сдачи ЕГЭ по физике"
						url="/astroege.pdf"
						imageSrc="/astro.jpg"
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
						Вместе с Ильёй сочиняли наивные стихи о юношеских влюблённостях, мальчишеской дружбе и блюзовом настроении. Выкладывали на вордпрессовский сайт.
					</ProjectCard>
					{/* <ProjectCard
						name="Методичка для обучения студентов основам работы в ГИС"
						url="https://www.dropbox.com/s/owx6ddrix3gepcj/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D0%B5%20Quantum%20GIS.zip?dl=0"
						years="2013"
					>
						Курсач, который зашёл слишком далеко.
					</ProjectCard> */}
					<ProjectCard
						name="revmus"
						url="https://vk.com/revmus"
						imageSrc="/revmus.jpg"
						years="2012–2013"
					>
						<p>Медиа про музыкальную сцену Екатеринбурга, которое мы делали вместе с Ильёй, Максом и Сашей. Писали обзоры альбомов и концертов, выкладывали фотки, анонсировали события, снимали видео и просто жили внутри локальной сцены. Принципиально существовали только в соцсетях, без сайта — тогда это было в новинку. Усердно делали вид, что мы настоящее издание (иногда это даже получалось).</p>
						<p className="mt-4">Со временем дошли до видеоформатов, ютуб-шоу, попыток документалистики и больших замыслов, которые оказались нам не по силам. Проект сгорел вместе с нашей студенческой энергией и началом взрослой жизни и без того полной обязательств. Мы были молоды, наивны, ничего не знали о том как устроен мир и не знали кем хотим стать когда вырастем. Зато мы точно знали, что хотим созидать. И мы созидали. И чёрт возьми, это было прекрасно!</p>
						<p className="mt-4">Если хочется подробностей, то есть ещё подробное <Link href="https://t.me/safariBookmarks/2013">эссе</Link> про историю проекта.</p>
					</ProjectCard>
					<ProjectCard
						name="КYБ и Ко"
						url="https://cybico.bandcamp.com/music"
						imageSrc="/cubeandco.jpg"
						years="2009–2013"
					>
						Играли с Костей блюз и рок-н-ролл в старших классах школы. Выступали на квартирниках, в андеграундных клубах и на больших сценах. Выпустили 2 лонгплея и один сингл. Приятно провели время. Ещё спасибо Илье и Данилу за лайвы.
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
	const { timeZone } = data.current
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
		fetchWeather(data.current.latitude, data.current.longitude, setWeather);
	}, []);

	if (!weather) {
		return <></>;
	}

	return (
		<>, {weather.condition} {weather.temperature} °C</>
	);
}

function RemainingYears() {
	const [remainingTime, setRemainingTime] = useState<RemainingTime | null>(null);

	useEffect(() => {
		const interval = setInterval(() => setRemainingTime(calculateRemainingTime()), 1000);
		return () => clearInterval(interval);
	}, []);

	if (!remainingTime) {
		return <>~</>;
	}

	return <>~ {remainingTime.wholeYears} {remainingTime.yearsNoun} {remainingTime.remainingSeconds.toLocaleString("ru-RU")} {remainingTime.secondsNoun}</>;
}
