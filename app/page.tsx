import { Link, PageHeader, Signature } from "@/components"

export default function HomePage() {
	return (
		<>
			<div className="flex flex-col lg:flex-row">
				<div className="flex-[2]">
					<div className="max-w-2xl">
						<PageHeader title="Всем привет от Бориса Оводова 👋🏻" />
						<p className="mt-4"><del>Снимал фильмы на <Link href="/28studio.png">28-й студии</Link>.</del></p>
						<p className="mt-4"><del>Сочинял стихи юности на «<Link href="http://pisanina.su">Писанине</Link>».</del></p>
						<p className="mt-4"><del>Играл в <Link href="https://cybico.bandcamp.com/music">КYБ и Ко</Link>.</del></p>
						<p className="mt-4"><del>Разработал <Link href="https://www.dropbox.com/s/owx6ddrix3gepcj/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D0%B5%20Quantum%20GIS.zip?dl=0">методичку</Link> для обучения студентов основам работы в ГИС.</del></p>
						<p className="mt-4"><del>Писал статьи в <Link href="https://vk.com/revmus">Ревмузе</Link>.</del></p>
						<p className="mt-4"><del>Преподавал астрономию в екатеринбургской <Link href="https://xn--35-6kclvec3aj7p.xn--80acgfbsl1azdqr.xn--p1ai/">35-й гимназии</Link>. В это время подготовил <Link href="/astroege.pdf">методичку по астрономии</Link> для успешной сдачи ЕГЭ по физике.</del></p>
						<p className="mt-8">Разрабатываю «<Link href="https://hermann.ovodov.me/">Германн</Link>» — тайм-трекер без трения.</p>
						<p className="mt-4">Собираю газеты со всего света и веду об этом англоязычный <Link href="https://papersaround.com/">вебсайт</Link>.</p>
						<p className="mt-4">Поддерживаю <i>нормальный</i> <Link href="/trud">производственный календарь</Link> в формате айкол.</p>
						<p className="mt-4">Пишу субъективный <Link href="/ye">путеводитель</Link> по культовым местам Екатеринбурга.</p>
						<p className="mt-4">Сделал <Link href="/event">генератор</Link> iCal-файлов с календарными событиями из URL.</p>
						<p className="mt-4">Опубликовал <Link href="/diary">письмо</Link> двоюродного деда.</p>
						<p className="mt-4">Рассказываю истории про науку, общество и прочие щщи в подкастах студии «<Link href="https://podcasts.apple.com/ru/channel/%D0%B1%D0%BE%D1%80%D1%8F-%D0%B8-%D1%80%D0%B5%D0%B1%D1%8F%D1%82%D0%B0/id6445257341?l=en">Боря и ребята</Link>».</p>
						<p className="mt-8">Иногда публично говорю ртом:</p>
						<ul className="list-disc list-inside">
							<li className="mt-2"><Link href="https://www.youtube.com/watch?v=A6u0JiTCYpc">Интервью</Link> для IT-подкаста Саши Торбека, 2025.</li>
							<li className="mt-2">Кейс-клубы с экспертами на Контуровской конференции аналитиков в <Link href="https://www.youtube.com/live/vJi1IsFgQqU?si=Jg2TI6bCQ0PqM98Z&t=7450">2023-м</Link> и <Link href="https://youtu.be/6ex2IZJ6CCw?t=5669">2024-м</Link> годах.</li>
							<li className="mt-2">Доклад «<Link href="https://www.youtube.com/watch?v=YJRmndQbBG8">Почему аналитикам стоит делать пет-проекты</Link>» для ютуб-канала Наумена, 2023. Его же <Link href="https://youtube.com/watch?v=zeOJ6WIpv78">рассказывал</Link> на екатеринбургском ДАМПе в том же году.</li>
							<li className="mt-2">«<Link href="https://youtube.com/watch?v=PHwiIUsUvgQ">Барный аналитик</Link>» на Контуровской конференции аналитиков, 2021.</li>
						</ul>
						<p className="mt-8">Веду несколько уютных Телеграм-каналов:</p>
						<ul className="list-disc list-inside">
							<li className="mt-2"><Link href="https://t.me/safariBookmarks">Борины закладки в Сафари</Link> — перфомансы и анонсы проектов.</li>
							<li className="mt-2"><Link href="https://t.me/itevents_ekb">Айтишные ивенты Екатеринбурга</Link> — агрегатор оффлайновых мероприятий для айтишников: митапов, конференций, лекций.</li>
							<li className="mt-2"><Link href="https://t.me/tastyCoffeeFilters">Фильтры Tasty Coffee</Link> — впечатления от фильтров Тэйсти кофе и других обжарщиков.</li>
							<li className="mt-2"><Link href="https://t.me/toiletnotes">Туалетные записки</Link> — многогранность народного творчества из уборных всего мира в мультифорах формата A4.</li>
							<li className="mt-2"><Link href="https://t.me/hermannapp">Hermann</Link> — новости лучшего тайм-трекера на этой планете.</li>
						</ul>
						<p className="mt-8 text-gray-300">Проведу перфоманс с важными извинениями.</p>
						<p className="mt-4 text-gray-300">Сниму документальный фильм про то, как трое ребят ищут свои корни.</p>
						<p className="mt-4 text-gray-300">Напишу книгу про Онисима Клера и его семью.</p>
						<p className="mt-4 text-gray-300">Проживу жизнь, наполненную до краёв.</p>
					</div>
				</div>
				<div className="flex-[1] mt-8">
					<p className="mt-4">В друзья</p>
					<ul className="list-disc list-inside">
						<li className="mt-2"><Link href="https://vas3k.club/user/borisovodov/">Вастрик.Клуб</Link></li>
						<li className="mt-2"><Link href="https://vk.com/borisovodov">ВК</Link></li>
						<li className="mt-2"><Link href="https://github.com/borisovodov">Гитхаб</Link></li>
						<li className="mt-2"><Link href="https://www.goodreads.com/borisovodov">Гудридс</Link></li>
						<li className="mt-2"><Link href="https://www.instagram.com/ovodovboris/">Инстаграм</Link></li>
						<li className="mt-2"><Link href="https://mykp.ru/borisovodov">Кинопоиск</Link></li>
						<li className="mt-2"><Link href="https://www.linkedin.com/in/borisovodov/">Линкедин</Link></li>
						{/* <li className="mt-4"><Link href="https://mastodon.social/@borisovodov">Мастодон</Link></li> */}
						<li className="mt-2"><Link href="https://nomadmania.com/profile/21540/nm/un/by/2024">Номад мания</Link></li>
						<li className="mt-2"><Link href="https://t.me/safariBookmarks">Телеграм</Link></li>
						{/* <li className="mt-2"><Link href="https://www.facebook.com/borisovodov">Фэйсбук</Link></li> */}
						<li className="mt-2"><Link href="https://www.youtube.com/@borisovodovlive">Ютуб</Link></li>
					</ul>
				</div>
			</div>
			<Signature />
		</>
	);
}
