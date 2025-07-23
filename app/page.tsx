import Avatar from "@/components/avatar"
import { Signature } from "@/components/signature"

export default function HomePage() {
	return (
		<div className="bg-white dark:bg-gray-800">
			<div className="p-8">
				<div className="flex flex-col lg:flex-row">
					<div className="flex-[2]">
						<div className="max-w-2xl">
							<Avatar />
							<p className="text-xl">Всем привет от Бориса Оводова 👋🏻</p>
							<p className="mt-8"><del>Снимал фильмы на <a className="text-blue-600 hover:text-blue-700 underline" href="/28studio.png">28-й студии</a>.</del></p>
							<p className="mt-4"><del>Сочинял стихи юности на «<a className="text-blue-600 hover:text-blue-700 underline" href="http://pisanina.su">Писанине</a>».</del></p>
							<p className="mt-4"><del>Играл в <a className="text-blue-600 hover:text-blue-700 underline" href="https://cybico.bandcamp.com/music">КYБ и Ко</a>.</del></p>
							<p className="mt-4"><del>Разработал <a className="text-blue-600 hover:text-blue-700 underline" href="https://www.dropbox.com/s/owx6ddrix3gepcj/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D0%B5%20Quantum%20GIS.zip?dl=0">методичку</a> для обучения студентов основам работы в ГИС.</del></p>
							<p className="mt-4"><del>Писал статьи в <a className="text-blue-600 hover:text-blue-700 underline" href="https://vk.com/revmus">Ревмузе</a>.</del></p>
							<p className="mt-4"><del>Преподавал астрономию в екатеринбургской <a className="text-blue-600 hover:text-blue-700 underline" href="https://xn--35-6kclvec3aj7p.xn--80acgfbsl1azdqr.xn--p1ai/">35-й гимназии</a>. В это время подготовил <a className="text-blue-600 hover:text-blue-700 underline" href="/astroege.pdf">методичку по астрономии</a> для успешной сдачи ЕГЭ по физике.</del></p>
							<p className="mt-8">Разрабатываю «<a className="text-blue-600 hover:text-blue-700 underline" href="https://hermann.ovodov.me/">Германн</a>» — тайм-трекер без трения.</p>
							<p className="mt-4">Собираю газеты со всего света и веду об этом англоязычный <a className="text-blue-600 hover:text-blue-700 underline" href="https://papersaround.com/">вебсайт</a>.</p>
							<p className="mt-4">Поддерживаю <i>нормальный</i> <a className="text-blue-600 hover:text-blue-700 underline" href="/trud">производственный календарь</a> в формате айкол.</p>
							<p className="mt-4">Пишу субъективный <a className="text-blue-600 hover:text-blue-700 underline" href="/ye">путеводитель</a> по культовым местам Екатеринбурга.</p>
							<p className="mt-4">Ищу корни в проекте <a className="text-blue-600 hover:text-blue-700 underline" href="https://ziedor.ovodov.me/">Зиедор(?)</a>.</p>
							<p className="mt-4">Рассказываю истории про науку, общество и прочие щщи в подкастах студии «<a className="text-blue-600 hover:text-blue-700 underline" href="https://podcasts.apple.com/ru/channel/%D0%B1%D0%BE%D1%80%D1%8F-%D0%B8-%D1%80%D0%B5%D0%B1%D1%8F%D1%82%D0%B0/id6445257341?l=en">Боря и ребята</a>».</p>
							<p className="mt-8">Иногда публично говорю ртом:</p>
							<ul className="list-disc list-inside">
								<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://www.youtube.com/watch?v=A6u0JiTCYpc">Интервью</a> для IT-подкаста Саши Торбека, 2025.</li>
								<li className="mt-2">Кейс-клубы с экспертами на Контуровской конференции аналитиков в <a className="text-blue-600 hover:text-blue-700 underline" href="https://www.youtube.com/live/vJi1IsFgQqU?si=Jg2TI6bCQ0PqM98Z&t=7450">2023-м</a> и <a className="text-blue-600 hover:text-blue-700 underline" href="https://youtu.be/6ex2IZJ6CCw?t=5669">2024-м</a> годах.</li>
								<li className="mt-2">Доклад «<a className="text-blue-600 hover:text-blue-700 underline" href="https://www.youtube.com/watch?v=YJRmndQbBG8">Почему аналитикам стоит делать пет-проекты</a>» для ютуб-канала Наумена, 2023. Его же <a className="text-blue-600 hover:text-blue-700 underline" href="https://youtube.com/watch?v=zeOJ6WIpv78">рассказывал</a> на екатеринбургском ДАМПе в том же году.</li>
								<li className="mt-2">«<a className="text-blue-600 hover:text-blue-700 underline" href="https://youtube.com/watch?v=PHwiIUsUvgQ">Барный аналитик</a>» на Контуровской конференции аналитиков, 2021.</li>
							</ul>
							<p className="mt-6">Веду несколько уютных Телеграм-каналов:</p>
							<ul className="list-disc list-inside">
								<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://t.me/safariBookmarks">Борины закладки в Сафари</a> — про разное и анонсы проектов.</li>
								<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://t.me/itevents_ekb">Айтишные ивенты Екатеринбурга</a> — агрегатор оффлайновых мероприятий для айтишников: митапов, конференций, лекций.</li>
								<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://t.me/tastyCoffeeFilters">Фильтры Tasty Coffee</a> — впечатления от фильтров Тэйсти кофе и других обжарщиков.</li>
								<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://t.me/toiletnotes">Туалетные записки</a> — многогранность народного творчества из уборных всего мира в мультифорах формата A4.</li>
								<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://t.me/hermannapp">Hermann</a> — новости лучшего тайм-трекера на этой планете.</li>
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
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://vas3k.club/user/borisovodov/">Вастрик.Клуб</a></li>
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://vk.com/borisovodov">ВК</a></li>
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://github.com/borisovodov">Гитхаб</a></li>
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://www.goodreads.com/borisovodov">Гудридс</a></li>
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://www.instagram.com/ovodovboris/">Инстаграм</a></li>
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://mykp.ru/borisovodov">Кинопоиск</a></li>
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://www.linkedin.com/in/borisovodov/">Линкедин</a></li>
							{/* <li className="mt-4"><a className="text-blue-600 hover:text-blue-700 underline" rel="me" href="https://mastodon.social/@borisovodov">Мастодон</a></li> */}
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://nomadmania.com/profile/21540/nm/un/by/2024">Номад мания</a></li>
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://t.me/safariBookmarks">Телеграм</a></li>
							{/* <li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://www.facebook.com/borisovodov">Фэйсбук</a></li> */}
							<li className="mt-2"><a className="text-blue-600 hover:text-blue-700 underline" href="https://www.youtube.com/@borisovodovlive">Ютуб</a></li>
						</ul>
					</div>
				</div>
				<Signature />
			</div>
		</div>
	);
}
