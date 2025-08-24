"use client";

import { Link, Switch, useDisclosure } from "@heroui/react";
import { useState } from "react";

import {
	Avatar,
	Location,
	LocationModal,
	Signature,
	OriginaledTitle
} from "@/components";

export default function YePage() {
	const [isOriginal, setIsOriginal] = useState(false);
	const [name, setName] = useState("");
	const [yandex, setYandex] = useState("");
	const [doublegis, setDoublegis] = useState("");
	const [website, setWebsite] = useState("");
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<div className="p-8">
			<div className="flex flex-col lg:flex-row">
				<div className="flex-[2] pb-4">
					<div className="max-w-2xl">
						<Avatar />
						<p className="text-xl">Субъективный путеводитель по культовым местам Екатеринбурга</p>
						<p><i>Последнее обновление: 17 июня 2025-го</i></p>
					</div>
				</div>
				<div className="flex-[1] mt-8">
					<Switch
						isSelected={isOriginal}
						onValueChange={setIsOriginal}
						size="sm"
						color="default"
					>
						<p className="text-white">Аутентичность</p>
					</Switch>
				</div>
			</div>
			<div className="max-w-2xl">
				<p className="text-lg mt-8">От <Link href="/">автора</Link></p>
				<p className="mt-4">Живу в Екатеринбурге всю свою жизнь и люблю его. Хочется поделиться своим взглядом на город для ребят, которые оказались тут проездом.</p>
				<p className="mt-4">Путеводитель очень субъективный и не ставит своей целью охватить все классные точки на карте. Он только про точку зрения автора. Путеводитель не для жителей. У каждого из нас свой Екатеринбург и вы лучше меня знаете <i>те самые</i> ваши места.</p>
				<p className="mt-4">А теперь просто выбирайте понравившиеся вам места, вбивайте адрес в карты на телефоне и идите туда пешком. Город у нас маленький, тем более центр.</p>
				{/*
				<h2>Как устроен город? Где жить? Какая карта?</h2>
				<p>Свою сделать</p>
				<p>Тут карта районов и где тусич, а где нет. https://hoodmaps.com/yekaterinburg-neighborhood-map</p>
				*/}
				<p className="text-lg mt-8">Где позавтракать? Где выпить кофе?</p>
				<p className="font-bold mt-4">
					<Location
						name="Эспрессо Сизон"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/espresso_season/1709123331/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001025841478"
						onDoublegisChange={setDoublegis}
						website="https://espressoseason.ru/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Эспрессо Сизон
					</Location> на <OriginaledTitle modern="Горького" original="Тарасовской набережной" isOriginal={isOriginal} />, 29
				</p>
				<p className="mt-4">Гранджевая кофейня для задротов. Разные фильтры на выбор с бесплатным пополнением — купил чашку и дегустируешь все сорта. Приятная, необычная еда. Будете там, передавайте привет Лёне и Диме.</p>
				<p className="mt-4">А ещё владелец кофейни однажды захотел создать самые крутые кофейные чашки в мире. На сысертском фарфоровом заводе (Сысерть — пригород Екатеринбурга) ему реально сделали такие. Прикупите себе в подарок, продаются в разных цветах.</p>
				<p className="font-bold mt-4">
					<Location
						name="Симпл Кофи"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/simple_coffee/60340261928/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/simple/firm/70000001019645756"
						onDoublegisChange={setDoublegis}
						website="https://simplecoffee.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Симпл Кофи
					</Location> на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />, 46
				</p>
				<p className="mt-4">Местная гордость: самая большая городская сетёвка кофеен местная, а не федеральная. Завтраки дешёвые и вкусные. Для завтраков запомните как мантру: 3-й, рисовая, малиновое, да, сметана, фильтр. Несмотря на то, что сетёвка, вполне себе спешалти-кофейня с лофтовым оформлением. Можно заходить в любую (благо они уже не только в центре), но каноничная — на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />. Рядом альма-матер автора этих строк, поэтому внутри дух студенчества.</p>
				<p className="font-bold mt-4">
					<Location
						name="Энгельс"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/engels/1700874439/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001021605986"
						onDoublegisChange={setDoublegis}
						website="https://engelscoffee.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Энгельс
					</Location> на <OriginaledTitle modern="Малышева" original="Покровском проспекте" isOriginal={isOriginal} />, 21/4
				</p>
				<p className="mt-4">Первое место, открывшееся с прицелом на завтраки. Правильно произносить не «Энджелс», а «Энгельс», потому что первое кафе бренда находилось на улице <OriginaledTitle modern="Энгельса" original="Малаховской (позже Энгельса)" isOriginal={isOriginal} />. Но его там уже нет, а вот на <OriginaledTitle modern="Малышева" original="Покровском проспекте" isOriginal={isOriginal} /> посидеть — отлично, когда никуда с утра не торопишься. Основа меню — вафли — правда кайфовые.</p>
				<p className="font-bold mt-4">
					<Location
						name="Брэдвэй"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/breadway/114337144368/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001040400946"
						onDoublegisChange={setDoublegis}
						website="https://breadway.rest/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Брэдвэй
					</Location> на <OriginaledTitle modern="Ельцина" original="Фетисовской" isOriginal={isOriginal} />, 6
				</p>
				<p className="mt-4">Сомневался куда относить «Брэдвэй» и «Горожане» — в ужины или завтраки. Отнёс сюда, потому что работают с утра. Еда потрясающая и не только на завтраки, интерьер в стиле «дорого-богато, но без приторности». Нормальный такой ресторан, инстаграмабельно.</p>
				<p className="font-bold mt-4">
					<Location
						name="Горожане"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/gorozhane/8195413293/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001038526762"
						onDoublegisChange={setDoublegis}
						website="https://gorozhane.me"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Горожане
					</Location> на <OriginaledTitle modern="Добролюбова" original="Госпитальной" isOriginal={isOriginal} />, 6
				</p>
				<p className="mt-4">Тоже ресторан с хорошей кухней, но работает с 8:30, что делает его идеальным местом для завтраков. Если на улице лето, то на десерт заказывайте «Митькину радость» — чувствами улетите в деревню к бабушке, как от <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://ru.wikipedia.org/wiki/Мадлен_(печенье)#«Мадленка»_Пруста">«Мадленки» Пруста</a>.</p>
				<p className="mt-4">Внимание: так как место прекрасное, по утрам туда набивается толпа народа и бывает, что столики на завтраки забронированы на пару дней вперёд. Запаривайтесь заранее.</p>
				<p className="font-bold mt-4">
					<Location
						name="Муру"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/muru/205036364220/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001032696084"
						onDoublegisChange={setDoublegis}
						website="https://murubakery.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Муру
					</Location> на <OriginaledTitle modern="Розы Люксембург" original="Златоустовской" isOriginal={isOriginal} />, 27
				</p>
				<p className="mt-4">Прекрасные десерты, знаменитые на весь город. Многие закупают у них на перепродажу. Но мест очень мало, редко так везёт, что удастся в выходные посидеть. Можете попытать счастья и приехать пораньше.</p>
				{/* 
			<p className="font-bold mt-4"><a className="ye" href="https://www.instagram.com/papacarlocoffee/">Папа Карло</a> на <OriginaledTitle modern="Малышева" original="Покровском проспекте" isOriginal={isOriginal} />, 47а</p>
			<p>Любимая спешалти-кофейня многих местных. В наличии офигенная сезонная кухня, которая скорее ресторанам соответствует, а не кофейне.</p>
			<p className="font-bold mt-4"><a className="ye" href="https://breakfastunit.one">Брэкфэст Юнит</a> на <span className="modern">Банковском</span><span className="auth">Торговой</span>, 8</p>
			<p>Ещё одно крохотное место для завтраков. Внутри всё классно, находится в самом центре, но сложно найти посадочные места.</p>
			<p className="font-bold mt-4"><a className="ye" href="https://1991.rest/">1991</a> в Ельцин Центре на <span className="modern">Ельцина</span><span className="auth">Фетисовской</span>, 3</p>
			<p>Самая недооценённая екатеринбуржцами кафешка. Про неё всегда забывают, но когда в других центровых местах полная посадка — там тебя ждут с распростёртыми объятиями. Заведение делает та же команда, что и «Барборис», поэтому кухня на высоком уровне.</p>
			*/}
				<p className="text-lg mt-8">Где <i>файн дайнинг</i>? В каких ресторанах поужинать?</p>
				<p className="font-bold mt-4">
					<Location
						name="Гастроли"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/gastroli/31306775051/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001022545173"
						onDoublegisChange={setDoublegis}
						website="https://gastroli.pub"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Гастроли
					</Location> на <OriginaledTitle modern="8 марта" original="Уктусской" isOriginal={isOriginal} />, 4
				</p>
				<p className="mt-4">Это основа. Это, так сказать, база. Приехали в Екатеринбург и не знаете где поужинать? Идите в «Гастроли»! Это одно из самых титулованных заведений в городе.</p>
				<p className="font-bold mt-4">
					<Location
						name="Момо"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/momo/1193772782/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001025783455"
						onDoublegisChange={setDoublegis}
						website="https://momokitchen.ru/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Момо
					</Location> на <OriginaledTitle modern="Карла Либкнехта" original="Вознесенском проспекте" isOriginal={isOriginal} />, 38а
				</p>
				<p className="mt-4">Вечный конкурент «Гастролей» за право самого награждённого екатеринбургского ресторана. Прекрасная пан-азиатская кухня. Но самое главное... местные вагаси моти. Обязательно возьмите их на десерт. И с собой ещё захватите порцию.</p>
				<p className="font-bold mt-4">
					<Location
						name="Барборис"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/barboris/215059089842/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001026605531"
						onDoublegisChange={setDoublegis}
						website="https://barboris.info"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Барборис
					</Location> в Ельцин Центре на <OriginaledTitle modern="Ельцина" original="Фетисовской" isOriginal={isOriginal} />, 3
				</p>
				<p className="mt-4">Представьте, что вы Владимир Познер в командировке в Екатеринбурге. Куда вы пойдёте на ужин? Конечно же в «Барборис»! Это тот самый ресторан, где ты развалившись в кресле и держа меню без картинок представляешь себя героем бондианы. Лучшая русская кухня в городе.</p>
				<p className="font-bold mt-4">
					<Location
						name="Зверобой"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/zveroboy/208366690383/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001044921655"
						onDoublegisChange={setDoublegis}
						website="https://zveroboyrest.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Зверобой
					</Location> на <OriginaledTitle modern="Посадской" original="Посадской" isOriginal={isOriginal} />, 28а
				</p>
				<p className="mt-4" id="auk">Русская кухня это конечно хорошо, но в «Зверобое» можно испробовать именно <i>уральской</i> кухни. Ну там медвежатинки, оленины, грибов, зелени и рыбы с неизвестными названиями, всяких  коми-пермяцких, мансийских и хантыйских национальных блюд. Шеф ресторана — один из создателей объединения «<a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="http://auc.rest">Аутентичная Уральская Кухня</a>», легендарные ребята, которые продвигают любовь к местной кухне. А ещё там лучшие вареники с картофелем, что автор пробовал в жизни (<i>Даша, Ваня, простите</i>).</p>
				<p className="mt-4">Дисклеймер: ресторан находится в родном для автора спальном Юго-Западном районе. Атмофсеру спальника из интерьера ресторана не выветрили, будьте готовы.</p>
				<p className="font-bold mt-4">
					<Location
						name="Культа"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/culta_bistronomic/45478165114/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001063120386"
						onDoublegisChange={setDoublegis}
						website="https://cultabistronomic.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Культа
					</Location> на <OriginaledTitle modern="Радищева" original="Отрясихинской" isOriginal={isOriginal} />, 24
				</p>
				<p className="mt-4">Средиземноморский ресторан с заявкой на одну звезду Мишлена. Души мало, но выебонисто и претенциозно. Если вы москвич, что не выходит за границы Садового кольца, — вам только сюда.</p>
				<p className="font-bold mt-4">
					<Location
						name="Чаща"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/chashcha/63281193281/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001037462821"
						onDoublegisChange={setDoublegis}
						website="https://chsch-rest.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Чаща
					</Location> на <OriginaledTitle modern="Красноармейской" original="Солдатской" isOriginal={isOriginal} />, 68
				</p>
				<p className="mt-4">Хорошая русская кухня, приятный интерьер. Про него мало знают местные, поэтому всегда есть места. На завтраках подают шампанское. Кутёж!</p>
				<p className="font-bold mt-4">
					<Location
						name="Главный"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/glavny/66039145028/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001058954288"
						onDoublegisChange={setDoublegis}
						website="https://glavniy.com"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Главный
					</Location> на <OriginaledTitle modern="Боевых Дружин" original="Щипановском переулке" isOriginal={isOriginal} />, 20
				</p>
				<p className="mt-4">Единственный приличный гастромолл. Там нет посредственных заведений, сплошной восторг. Недельную командировку можно там провести не вылазя и пробуя всё время что-то новое. Всех резидентов перечислять не буду, выбирайте сердцем.</p>
				{/*
			<p className="font-bold mt-4"><a className="ye" href="https://kitchen23.org">Китчен</a> на <span className="modern">Ткачей</span><span className="auth">Расторгуевской</span>, 23</p>
			<p>Фешенебельная уральская кухня, коктейли, названные в честь местных городов, но не дожали: в меню торчит пицца. Попробуйте, если всё остальное уже обошли.</p>
			<p className="font-bold mt-4"><a className="ye" href="https://креветкибургеры.рф">Креветки и Бургеры</a> на <span className="modern">Хохрякова</span><span className="auth">Тихвинской</span>, 25</p>
			<p>Лучшие бургеры в городе по мнению автора.</p>
			<p className="font-bold mt-4"><a className="ye" href="https://vk.com/pushkina4neobistro">Пушкина 4</a> на <i><span className="modern">Пушкина</span><span className="auth">Пушкинской</span>, 4</i></p>
			<p>Раньше заведение называлось «Хачапури для Пушкина» и там прямо в зале было место шефа для приготовления выпечки. Учитывая, что заведение крохотное, мука от твоего будущего хачапури летела прямо тебе на волосы. А жар нагревал вино в бокале. Сейчас ребята сделали ребрендинг, подают добротную европейскую кухню и всё так же хорошее вино, но в зале уже не готовят. Всё равно люблю это место. Столиков мало, броньте заранее.</p>
			<h3><a className="ye" href="https://hmeli.ru">Хмели-Сунели</a> на Ленина, 69/10</p>
			<p></p>
			<h3>Крабы, гады и вино</p>
			<p></p>
			<h3>Сойка</p>
			<p></p>
			<h3>Троекуров ???</p>
			<p></p>
			*/}
				<p className="text-lg mt-8">Где выпить? Какие барчики культовые?</p>
				<p className="font-bold mt-4">
					<Location
						name="Коллектив"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/kollektiv/231643408947/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001031289603"
						onDoublegisChange={setDoublegis}
						website="http://klktv91.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Коллектив
					</Location> на <OriginaledTitle modern="8 марта" original="Уктусской" isOriginal={isOriginal} />, 8г
				</p>
				<p className="mt-4">Легендарный спикизи бар, вход в который хрен найдёшь. Просто кружитесь вокруг «Мытного двора» и спрашивайте случайных прохожих: «где тут „Коллектив“?» Лучшие коктейли в городе, самые крутые ребята за стойкой. Если вы любитель барной культуры — обязательно для посещения. Арина и Илья мудро советуют начинать вечер с дитер смэша; могу только присоединиться.</p>
				<p className="font-bold mt-4">
					<Location
						name="Мелодия"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/melodiya/179147332865/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001035295807"
						onDoublegisChange={setDoublegis}
						website="https://www.instagram.com/melody_ekb/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Мелодия
					</Location> на <OriginaledTitle modern="Первомайской" original="Клубной" isOriginal={isOriginal} />, 36
				</p>
				<p className="mt-4">В баре так мало места, что быстро вырабатывается навык проноса наливочек через локти, спины и ключицы других людей. Внутри долбят известные в городе диджеи, а 90% посетителей тусят на улице, потому что внутри уже нет свободного миллиметра. Легенда, не иначе. Берите сразу сет наливок, не прогадаете.</p>
				<p className="font-bold mt-4">
					<Location
						name="Самоцвет"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/samotsvet/224164503259/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001045103804"
						onDoublegisChange={setDoublegis}
						website="https://taplink.cc/samocvet.bar"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Самоцвет
					</Location> на <OriginaledTitle modern="Малышева" original="Покровском проспекте" isOriginal={isOriginal} />, 29а
				</p>
				<p className="mt-4">Очень атмосферное и популярное заведение. Всё время всякие движухи проходят. ЧГК пизже, чем по Первому.</p>
				<p className="font-bold mt-4">
					<Location
						name="Секта"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/sekta_organic_wine_bar/3422373513/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001040757065"
						onDoublegisChange={setDoublegis}
						website="https://sekta.rest"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Секта
					</Location> в Синара Центре на <OriginaledTitle modern="Верх-Исетском бульваре" original="Верх-Исетском бульваре" isOriginal={isOriginal} />, 15/4
				</p>
				<p className="mt-4">Шикосный винный бар, где всё написано на богатом. Очень изысканная кухня, очень профессиональный персонал.</p>
				<p className="font-bold mt-4">
					<Location
						name="Био Шмио"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/bio_shmio/182475519174/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001032042722"
						onDoublegisChange={setDoublegis}
						website="https://sekta.rest"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Био Шмио
					</Location> на <OriginaledTitle modern="Малышева" original="Покровском проспекте" isOriginal={isOriginal} />, 61
				</p>
				<p className="mt-4">Винный бар здорового человека. Иногда официанты снобы, иногда лапушки, это как повезёт. А с вином повезёт в любом случае.</p>
				<p className="font-bold mt-4">
					<Location
						name="Нельсон Совин"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/nelson_sovin/1795519767/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001025747670"
						onDoublegisChange={setDoublegis}
						website="http://nelsonsauvin.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Нельсон Совин
					</Location> на <OriginaledTitle modern="Малышева" original="Покровском проспекте" isOriginal={isOriginal} />, 21/4
				</p>
				<p className="mt-4">Самый задротский пивной бар. Для ценителей — сюда.</p>
				<p className="font-bold mt-4">
					<Location
						name="Джоуз Спот"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/jawsspot/131959501425/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001007533260"
						onDoublegisChange={setDoublegis}
						website="https://jawsbeer.ru/spot"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Джоуз Спот
					</Location> на <OriginaledTitle modern="Тургенева" original="Верхне-Вознесенской" isOriginal={isOriginal} />, 3
				</p>
				<p className="mt-4">В пригороде Екатеринбурга — атомном городе Заречном — много лет назад несколько ребят решили варить пиво. <i>Вай нот</i> как говорится. Сняли здание бывшей прачечной, оборудовали производство и за несколько лет создали один из самых известных в стране крафтовых пивных брендов. Первый бар под их крылом открыли, разумеется, в Екатеринбурге. Внутри приятная студенческая атмосфера, ибо напротив университет.</p>
				{/*
			<p className="font-bold mt-4"><a className="ye" href="http://new-bar.ru">Нью бар</a> на <span className="modern">8 марта</span><span className="auth">Уктусской</span>, 8д</p>
			<p>Самый старожильский бар из перечисленных. Много различных мероприятий: и лекции, и диджей-сеты, и киношка, и живые выступления. Но на некоторые ивенты приходит по паре человек, не угадаешь заранее будет ли тусовка.</p>
			*/}
				<p className="text-lg mt-8">Где отведать хрючева?</p>
				<p className="font-bold mt-4">
					<Location
						name="Жизньмарт"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/chain/lifemart/160929237465/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/branches/70000001036237611"
						onDoublegisChange={setDoublegis}
						website="https://lifemart.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Жизньмарт
					</Location>
				</p>
				<p className="mt-4">Легендарный городской продуктовый, из-за которого тут никак не может закрепиться «Вкусвилл». Обязательно посетите, оливье с говядиной там божественный. И онигири тоже. И блинчики с творогом. Ну вы поняли, да?</p>
				<p className="font-bold mt-4">
					<Location
						name="Уральская шаньга"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/uralskaya_shanga/159624878755/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001093724725"
						onDoublegisChange={setDoublegis}
						website="https://shanga.pro"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Уральская шаньга
					</Location> на <OriginaledTitle modern="Воеводина" original="Воеводина" isOriginal={isOriginal} />, 2
				</p>
				<p className="mt-4">Сергей Мирошников, ещё один из идеологов «Аутентичной Уральской Кухни», решил открыть не файн дайнинг, а настоящий уральский стритфуд. За основу взял шаньгу — блюдо очень понятное для местных и экзотичное для приезжих. И докрутил открытый пирожок до мишленовского уровня. С собой не берите, кушайте стоя прямо там пока горячая.</p>
				<p className="font-bold mt-4">
					<Location
						name="Пицца Мия"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/pizza_mia/1141398804/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676428475"
						onDoublegisChange={setDoublegis}
						website="https://pizzamia.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Пицца Мия
					</Location> на <OriginaledTitle modern="Карла Либкнехта" original="Вознесенском проспекте" isOriginal={isOriginal} />, 18
				</p>
				<p className="mt-4">Пицца Мия (в девичестве «Фридей») открылась, когда в городе ещё не было ни одного Макдоналдса. И что же теперь — Макдоналдса <i>уже</i> нет, а Пицца Мия всё равно на месте. Если хотите вкусить настоящее уральское студенчество, закажите пиццу «Фридей», соус «Уральский» и Балтику тройку.</p>
				<p className="font-bold mt-4">
					<Location
						name="Нигора"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/nigora/65190196619/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001097373772"
						onDoublegisChange={setDoublegis}
						website="https://nigora.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Нигора
					</Location> на <OriginaledTitle modern="Куйбышева" original="Сибирском проспекте" isOriginal={isOriginal} />, 47
				</p>
				<p className="mt-4">Узбечка, про которую наслышаны даже москвичи. Порции размером с голову, жир плавает в жире, меню не менялось с момента открытия (и слава богу). Узбечка же, ну.</p>
				<p className="font-bold mt-4">Кировские булочки с корицей в <Location
						name="Кировский"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/chain/kirovskiy/6001963/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/branches/1267174266116987"
						onDoublegisChange={setDoublegis}
						website="https://kirmarket.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Кировском
					</Location>
				</p>
				<p className="mt-4">Их запах — это запах детства. Их вкус — это вкус первой влюблённости в детском саду. Их вид — это красота уральских гор с верхней Таганайской тропы. Заходите в «Кировский» и забирайте одноимённые свежие тёплые булочки с собой в дорогу.</p>
				<p className="text-lg mt-8">Где прогуляться? Где на пробежку выйти?</p>
				<p className="font-bold mt-4">Набережная <Location
						name="Городской пруд"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/geo/gorodskoy_prud/171389452/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267324612195313"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Городской_пруд_(Екатеринбург)"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Городского пруда
					</Location>
				</p>
				<p className="mt-4">Квинтэссенция Екатеринбурга, обязательно погуляйте там. Летом стоит прокатиться на катере по пруду (<i>лучше на закате, лучше без планов после, лучше быть пьяным, молодым и влюблённым</i>).</p>
				<p className="mt-4">У бегунов там есть любимый маршрут под названием «Подкова»: от <OriginaledTitle modern="Макаровского" original="Кривцовского" isOriginal={isOriginal} /> моста (<OriginaledTitle modern="улица Челюскинцев" original="улица Северная" isOriginal={isOriginal} />) со стороны спорткомплекса «Динамо», через ротонды на Плотинке и потом обратно к <OriginaledTitle modern="Макаровскому" original="Кривцовскому" isOriginal={isOriginal} /> мосту, но уже у Ельцин Центра. Собственно по этому маршруту бегают ребята по <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://www.e1.ru/text/gorod/2023/06/16/72404033/">субботам с Ройзманом</a>.</p>
				<p className="font-bold mt-4">
					<Location
						name="Харитоновский сад"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/geo/kharitonovskiy_sad/123949969/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267324630180393"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Харитоновский_сад"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Харитоновский сад
					</Location>
				</p>
				<p className="mt-4">Хиреющий год от года парк с прекрасной ротондой. Главные открыточные виды города.</p>
				<p className="font-bold mt-4">
					<Location
						name="Сквер у Драмы"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/geo/oktyabrskaya_ploshchad/1520635909/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/70030076178426611"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Октябрьская_площадь_(Екатеринбург)"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Сквер у Драмы
					</Location>
				</p>
				<p className="mt-4">Он же «Октябрьская площадь». Он же «на Драме». Он же «#сквернаш». Тот самый сквер, который отстояли горожане в противоборстве с крупнейшими промышленниками и областными властями. От этого зелень в парке ещё ценнее нашим сердечкам.</p>
				<p className="font-bold mt-4">
					<Location
						name="Дендропарк"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/mbu_dendrologicheskiy_park_vystavka/25910174253/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676194175"
						onDoublegisChange={setDoublegis}
						website="https://nashural.ru/dostoprimechatelnosti-urala/sverdlovskaya-oblast/dendropark-na-ulitse-pervomajskoj-v-ekaterinburge/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Дендропарк
					</Location> на <OriginaledTitle modern="Первомайской" original="Клубной" isOriginal={isOriginal} /> и <Location
						name="Втузгородок"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/geo/zhiloy_rayon_vtuzgorodok/53182856/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267298820161544"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Втузгородок_(Екатеринбург)"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Втузгородок
					</Location>
				</p>
				<p className="mt-4">Милый парк в стороне от центра с прудиками, утками и кучей дивных растений. Вокруг Втузгородок — уютный, старый и спокойный район при крупнейшем университете. Гулять там одно удовольствие.</p>
				<p className="font-bold mt-4">
					<Location
						name="Улица Горького"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/geo/ulitsa_gorkogo/8013833/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267376129574760"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Улица_Максима_Горького_(Екатеринбург)"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						<OriginaledTitle modern="Улица Горького" original="Тарасовская набережная" isOriginal={isOriginal} />
					</Location>
				</p>
				<p className="mt-4">Ребята из «Русской медной компании» сначала построили здесь свою штаб-квартиру по проекту Нормана Фостера, а потом причесали и всю улицу вокруг. Теперь это любимое место для прогулок многих горожан. Стоит пройтись по ней от <s>Бивиса и Баттхеда</s> Татищева и де Генина до <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://ru.wikipedia.org/wiki/Сплавной_мост">сплавного моста</a>.</p>
				<p className="font-bold mt-4">
					<Location
						name="Верх-Исетский бульвар"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/geo/verkh_isetskiy_bulvar/8013780/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267376129575856"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Верх-Исетский_бульвар"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Верх-Исетский бульвар
					</Location>
				</p>
				<p className="mt-4">Приятный прогулочный бульвар с прилежащим парком, который сотни лет назад соединял два отдельных населённых пункта / завода. Сейчас это даже не бросается в глаза.</p>
				<p className="font-bold mt-4">
					<Location
						name="Улица Бажова"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/geo/ulitsa_bazhova/8013732/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267376129574751"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Улица_Бажова_(Екатеринбург)"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						<OriginaledTitle modern="Улица Бажова" original="Обсерваторская улица" isOriginal={isOriginal} />
					</Location> и <Location
						name="Метеогорка"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/geo/meteogorka/1978995651/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267324589965465"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Метеогорка"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						метеогорка
					</Location>
				</p>
				<p className="mt-4">Самая недооценённая горожанами прогулочная улица — <OriginaledTitle modern="Бажова" original="Обсерваторская" isOriginal={isOriginal} />. Тенистые деревья, провинциальная тишина и никакой суеты. Улица начинается из центра города, а заканчивается упираясь в метеогорку — одну из самых высоких точек. С метеогорки открывается отличный вид на центр. За лучшими восходами сюда.</p>
				<p className="font-bold mt-4">
					<Location
						name="Парк Маяковского"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/geo/tsentralny_park_kultury_i_otdykha_imeni_mayakovskogo/123929338/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676188826"
						onDoublegisChange={setDoublegis}
						website="https://ецпкио.рф"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						<OriginaledTitle modern="Парк Маяковского" original="Мещанская роща" isOriginal={isOriginal} />
					</Location>
				</p>
				<p className="mt-4">Типичный парк культуры и отдыха. Несколько лет назад его причесала и привела в порядок команда <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://keylman.ru">Кейльман</a>, с тех пор сильно не плохел. Рядом <i>очень собянинская</i> набережная у Клевер Парка, там тоже стоит погулять.</p>
				<p className="font-bold mt-4">
					<Location
						name="Озеро Шарташ"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/shartashskiy_lesopark/155882288890/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267324622227847"
						onDoublegisChange={setDoublegis}
						website="http://shartash-park.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Озеро Шарташ
					</Location>
				</p>
				<p className="mt-4">Крупнейшее озеро в округе городской черты (<i>стон зависти в сторону челябинцев</i>). Хорошая инфраструктура, велосипедные дорожки почти опоясывают водоём, много беседок. Тупо кайф. Также недалеко от южной стороны есть Каменные палатки — небольшие скалы, по которым приятно полазать.</p>
				<p className="font-bold mt-4">Набережная <Location
						name="Верх-Исетский пруд"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/geo/verkh_isetskoye_vodokhranilishche/171392160/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267324615997893"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Верх-Исетский_пруд"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Верх-Исетского пруда
					</Location>
				</p>
				<p className="mt-4">Вид на пруд и мартеновские печи одного из крупнейших уральских заводов. Включайте в наушниках «<a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://www.youtube.com/watch?v=HrNmLWtlWtY">Екатеринбюргер</a>» Курары и чувствуйте дух нашего сурового края.</p>
				<p className="font-bold mt-4">
					<Location
						name="Уктусские горы"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/uktusskiy_lesopark/120068570357/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267324589965670"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Уктусские_горы"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Уктусские горы
					</Location>
				</p>
				<p className="mt-4">Зимой здесь единственное место в городе, где можно покататься на сноубордах. Летом — очень приятный лесной массив в глуши. Для длительных прогулок, если свободен весь день.</p>
				<p className="text-lg mt-8">Что посмотреть?</p>
				<p className="font-bold mt-4">
					<Location
						name="Плотинка"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/plotinka/182940812443/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267333179902076"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Плотина_Городского_пруда_на_реке_Исеть"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Плотинка
					</Location>
				</p>
				<p className="mt-4">Самый центр, вокруг которого вырос сначала Екатеринский завод, а потом и весь город. Все дороги ведут сюда, так что даже если не будете планировать тут оказаться — всё равно появитесь. Здесь всегда джемят музыканты, а дедульки играют в шахматы у перехода. Екатеринбург как он есть.</p>
				<p className="font-bold mt-4">
					<Location
						name="Дом Севастьянова"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/dom_n_i_sevastyanova/22482999115/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267273050360591"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Дом_Севастьянова"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Дом Севастьянова
					</Location>
				</p>
				<p className="mt-4">Эклектичный, очень нарядный дом в самом центре. Инстаграмабельно.</p>
				<p className="font-bold mt-4">
					<Location
						name="Белый дом"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/house/oktyabrskaya_ploshchad_1/YkkYcw5kSUIOQFtsfXR1cHRlZg==/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676662709"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Белый_дом_(Екатеринбург)"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Белый дом
					</Location>
				</p>
				<p className="mt-4">Икона позднесоветского модернизма. В народе здание называется «член партии», <i>сами поймёте почему</i>.</p>
				<p className="font-bold mt-4">
					<Location
						name="Гостиница Исеть"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/gostinitsa_iset_1933_g_/199494908263/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267273050361678"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Исеть_(гостиница)"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Гостиница Исеть
					</Location> и <Location
						name="Городок чекистов"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/pamyatnik_arkhitektury_gorodok_chekistov/13687224582/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/geo/1267324589965369"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Городок_чекистов"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						городок чекистов
					</Location> на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />, 69/1
				</p>
				<p className="mt-4">Когда говорят про екатеринбургский конструктивизм, то первым делом вспоминают про эту группу зданий. Десять Ле Корбюзье из десяти. Уже только ради этого архитектурного ансамбля стоит приехать в город.</p>
				<p className="font-bold mt-4">
					<Location
						name="Белая башня"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/belaya_bashnya/28375256561/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001024360704"
						onDoublegisChange={setDoublegis}
						website="https://tower1929.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Белая башня
					</Location> на <OriginaledTitle modern="Бакинских комиссаров" original="Бакинских комиссаров" isOriginal={isOriginal} />, 2а
				</p>
				<p className="mt-4">Самое потрясающее конструктивистское здание города, <i>ин май хамбл опинион</i>. Стоит приехать на Уралмаш не ради духа Уралмаша, а ради него. А лучше запишитесь на <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://tower1929.ru/#rec107922777">экскурсию</a>.</p>
				<p className="font-bold mt-4">
					<Location
						name="Дом связи"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/dom_svyazi/213427775425/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676489964"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Дом_связи_(Екатеринбург)"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Дом связи
					</Location> на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />, 39
				</p>
				<p className="mt-4">Он же главпочтамт. Недавно отреставрированное конструктивистское здание, очень характерное для городской застройки 20–30-х годов.</p>
				<p className="font-bold mt-4">
					<Location
						name="Театр оперы и балета"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/yekaterinburgskiy_gosudarstvenny_akademicheskiy_teatr_opery_i_baleta/1226929807/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676605507"
						onDoublegisChange={setDoublegis}
						website="https://uralopera.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Театр оперы и балета
					</Location> на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />, 46а
				</p>
				<p className="mt-4">Шикосное здание оперного. Можно погулять в небольшом парке за ним (студенты обычно алкашат там после пар).</p>
				<p className="font-bold mt-4">
					<Location
						name="Спорткомплекс Динамо"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/54/yekaterinburg/house/ulitsa_vasiliya_yeryomina_12/YkkYcAdgTUcGQFtsfXR1dXhrZQ==/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676505511"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Динамо_(спорткомплекс,_Екатеринбург)"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Спорткомплекс Динамо
					</Location> на <OriginaledTitle modern="Ерёмина" original="Ключевской" isOriginal={isOriginal} />, 12
				</p>
				<p className="mt-4">Уже упоминался в рамках прогулки по набережной. Обратите внимание на главное здание — то ли детище конструктивизма 30-х, то ли не существовавшего тогда капрома 90-х. Красота неземная.</p>
				<p className="font-bold mt-4">
					<Location
						name="Городская администрация"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/administratsiya_goroda_yekaterinburga/1034883731/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676498542"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Здание_Свердловского_городского_совета_народных_депутатов"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Городская администрация
					</Location> на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />, 24а
				</p>
				<p className="mt-4">Вообще не люблю это здание в его нынешнем сталинско-ампирском обличии. Но помню, что под капотом у него <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="/190617_original.jpg">вот такая</a> конструктивистская красота.</p>
				<p className="font-bold mt-4">
					<Location
						name="Телевизионная башня"
						onNameChange={setName}
						yandex="https://ru.wikipedia.org/wiki/Телевизионная_башня"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676505511"
						onDoublegisChange={setDoublegis}
						website="https://ru.wikipedia.org/wiki/Телевизионная_башня"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Телевизионная башня
					</Location> на <OriginaledTitle modern="Степана Разина" original="Спасской" isOriginal={isOriginal} />, 17
				</p>
				<p className="mt-4"><s>💔</s></p>
				{/* 
			<h3><a href="https://ru.wikipedia.org/wiki/Храм_на_Крови_(Екатеринбург)">Храм на Крови ???</a></p>
			<p></p>
			*/}
				<p className="text-lg mt-8">Куда сходить?</p>
				<p className="font-bold mt-4">
					<Location
						name="Ельцин Центр"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/yeltsin_tsentr/1676805608/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001020826305"
						onDoublegisChange={setDoublegis}
						website="https://yeltsin.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Ельцин Центр
					</Location> на <OriginaledTitle modern="Ельцина" original="Фетисовской" isOriginal={isOriginal} />, 3
				</p>
				<p className="mt-4">Самое известное в стране (в основном скандалами) екатеринбургское учреждение. На деле же для екатеринбуржцев это: одна из лучших городских арт-галерей; место где проходит добрая половина всех приличных ивентов; самый изысканный кинотеатр; самый стильный и современный городской музей (конечно он будет выставлять Ельцина в хорошем свете, это же музей персонально про него, просто делите на два) и прочее, прочее, прочее. В общем, это наше место силы. Федералы — руки прочь от него.</p>
				<p className="font-bold mt-4">
					<Location
						name="Музей природы Урала"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/muzey_prirody_urala/1039847339/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676562387"
						onDoublegisChange={setDoublegis}
						website="https://uole-museum.ru/museums/muzej-prirody-urala/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Музей природы Урала
					</Location> на <OriginaledTitle modern="Горького" original="Тарасовской набережной" isOriginal={isOriginal} />, 4
				</p>
				<p className="mt-4">Казалось бы очередной краеведческий музей, который однако умудряется через устаревшие подходы к музейным нарративам невероятно иммерсивно погрузить в эстетику уральских гор и окружающей природы. Хотите побывать на Конжаковском камне не взбираясь на него — сходите сюда.</p>
				<p className="font-bold mt-4">
					<Location
						name="Музей Невьянской иконы"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/muzey_nevyanskoy_ikony/54224074602/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676675316"
						onDoublegisChange={setDoublegis}
						website="https://ekaterinburg.guide"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Музей Невьянской иконы
					</Location> на <OriginaledTitle modern="Энгельса" original="Малаховской" isOriginal={isOriginal} />, 15
				</p>
				<p className="mt-4">Лучший частный музей города. Большое собрание Ройзмана уникальных икон нашей области. Уникальная атмосфера, будто вот-вот и запахнет ладаном.</p>
				<p className="font-bold mt-4">
					<Location
						name="Музей наивного искусства"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/muzey_naivnogo_iskusstva/141726510045/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001029912695"
						onDoublegisChange={setDoublegis}
						website="https://i-z-o.art/constitutor/muzei-naivnogo-iskusstva/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Музей наивного искусства
					</Location> на <OriginaledTitle modern="Розы Люксембург" original="Златоустовской" isOriginal={isOriginal} />, 18
				</p>
				<p className="mt-4">Ещё одна коллекция Ройзмана, которую он передал городским властям. Уютный приятный музей близкого нам с вами искусства.</p>
				<p className="font-bold mt-4">
					<Location
						name="Синара Центр"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/galereya_sinara_art/42246831959/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676182260"
						onDoublegisChange={setDoublegis}
						website="https://sinara-center.com"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Синара Центр
					</Location> на <OriginaledTitle modern="Верх-Исетском бульваре" original="Верх-Исетском бульваре" isOriginal={isOriginal} />, 15/4
				</p>
				<p className="mt-4">Одна из первых в городе галерей современного искусства, которая ранее размещалась в другом здании, а в 2019-м переехала в этот прекрасно отреставрированный бывший госпиталь Верх-Исетского завода. Хорошая коллекция, постоянные разноплановые выставки.</p>
				<p className="font-bold mt-4">
					<Location
						name="Музей Эрнста Неизвестного"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/khudozhestvenny_muzey_ernsta_neizvestnogo/1196612773/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267166676349471"
						onDoublegisChange={setDoublegis}
						website="https://uole-museum.ru/museums/hudozhestvennyj-muzej-ernsta-neizвестного/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Музей Эрнста Неизвестного
					</Location> на <OriginaledTitle modern="Добролюбова" original="Госпитальной" isOriginal={isOriginal} />, 14
				</p>
				<p className="mt-4">Всем ценителям брутализма посвящается.</p>
				<p className="font-bold mt-4">
					<Location
						name="Музей Андеграунда"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/muzey_andegraunda_galereya_pavla_neganova/199105541597/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001055651728"
						onDoublegisChange={setDoublegis}
						website="https://ugmuseum-ekb.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Музей Андеграунда
					</Location> на <OriginaledTitle modern="Добролюбова" original="Госпитальной" isOriginal={isOriginal} />, 4
				</p>
				<p className="mt-4">Отличный частный музей с богатым собранием московского, питерского и екатеринбургского андеграундного искусства. В наличии даже Пригов, Кабаков и Новиков.</p>
				<p className="font-bold mt-4">
					<Location
						name="Музей истории и археологии Урала"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/sverdlovskiy_oblastnoy_krayevedcheskiy_muzey_filial_muzey_arkheologii_i_istorii_srednego_urala/1018936642/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001021976364"
						onDoublegisChange={setDoublegis}
						website="https://uole-museum.ru/museums/muzej-istorii-i-arheologii-urala/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Музей истории и археологии Урала
					</Location> на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />, 69/10
				</p>
				<p className="mt-4">В целом посредственный краеведческий музей, хоть и крупнейший в городе, если бы не три но.</p>
				<ol>
					<li>Там находится <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://ru.wikipedia.org/wiki/Шигирский_идол">Шигирский идол</a> — самая древняя в мире деревянная скульптура. 12 000лет деревяшке.</li>
					<li>Классный последний этаж с экспозицией, рассказывающей про археологические поиски тел семьи Романовых, расстрелянных в Екатеринбурге.</li>
					<li>Само здание времён конструктивистских построек с невероятной красоты винтовой лестницей. То самое место для вашей новой аватарки.</li>
				</ol>
				<p className="font-bold mt-4">
					<Location
						name="Музей изобразительных искусств"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/yekaterinburgskiy_muzey_izobrazitelnykh_iskusstv/1088062553/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676605511"
						onDoublegisChange={setDoublegis}
						website="https://i-z-o.art/constitutor/muzei-na-plotinke/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Музей изобразительных искусств
					</Location> на <OriginaledTitle modern="Воеводина" original="Воеводина" isOriginal={isOriginal} />, 5
				</p>
				<p className="mt-4">Наш главный художественный музей. На Воеводина только русское искусство.</p>
				<p className="font-bold mt-4">
					<Location
						name="Дом Метенкова"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/fotograficheskiy_muzey_dom_metenkova/65067342068/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676192645"
						onDoublegisChange={setDoublegis}
						website="http://dommetenkova.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Дом Метенкова
					</Location> на <OriginaledTitle modern="Карла Либкнехта" original="Вознесенском проспекте" isOriginal={isOriginal} />, 36
				</p>
				<p className="mt-4">Фотографический музей в котором всегда отличные выставки.</p>
				<p className="font-bold mt-4">
					<Location
						name="Центр современного искусства"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/uralskiy_filial_gosudarstvennogo_muzeya_izobrazitelnykh_iskusstv_im_a_s_pushkina/180431139925/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676714406"
						onDoublegisChange={setDoublegis}
						website="https://ural.pushkinmuseum.art"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Центр современного искусства
					</Location> (ГЦСИ) на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />, 50
				</p>
				<p className="mt-4">Здесь выставляется <i>то самое</i> современное искусство, которое не понимают твои родители. Культовая институция, которая одной из первых начала прокачивать в городе тему уличного искусства и приучать жителей к современному. Честь и хвала ребятам.</p>
				<p className="font-bold mt-4">
					<Location
						name="Уральский геологический музей"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/uralskiy_geologicheskiy_muzey/173341286675/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676192815"
						onDoublegisChange={setDoublegis}
						website="https://ursmu.ru/geologiceskii-muzei-uggu"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Уральский геологический музей
					</Location> на <OriginaledTitle modern="Куйбышева" original="Сибирском проспекте" isOriginal={isOriginal} />, 39
				</p>
				<p className="mt-4">Никита Корытин, директор музея ИЗО, однажды <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://podcasts.apple.com/ru/podcast/%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5/id1550641240?i=1000575333935">высказал мнение</a>, что екатеринбуржцам в поискам самости не надо себя обманывать и притворяться теми, кем мы не являемся. Идентичность Екатеринубрга — это камень, геология и металлургия. И всё, не надо больше ничего выдумывать. Музей при Уральском горном университете — это 4 этажа кристаллизованной идентичности.</p>
				{/*
			<h3>Карта объектов Тимы Ради</p>
			<p></p>
			<p className="font-bold mt-4"><a className="ye" href="https://m-i-e.ru/mie-filial">Музей истории Екатеринбурга</a> на <span className="modern">Карла Либкнехта</span><span className="auth">Вознесенском проспекте</span>, 26</p>
			<p>Не самый впечатляющий музей, но хорошо разложит в голове по полочкам основную информацию о городе.</p>
			<p className="font-bold mt-4"><a className="ye" href="https://i-z-o.art/constitutor/centr-ermitazh-ural/">Эрмитаж-Урал</a> на <span className="modern">Вайнера</span><span className="auth">Успенской</span>, 11</p>
			<p>Продолжение музея изобразительных искусств, на Вайнера выставляют зарубежных авторов. На последнем этаже есть увлекательная экспозиция про хранение в этом здании в годы войны работ из Эрмитажа.</p>
			*/}
				<p className="text-lg mt-8">Где развлечься?</p>
				<p className="font-bold mt-4">Местный стрит-арт</p>
				<p className="mt-4">Про бесчисленное количество работ в городе можно рассказывать бесконечно, просто сходите на одну из экскурсий <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://www.instagram.com/shakhov_hell/">Лёши Шахова</a> или прогуляйтесь по карте фестиваля «<a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://stenograffia.ru">Стенограффия</a>».</p>
				<p className="font-bold mt-4">
					<Location
						name="Коляда-Театр"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/kolyada_teatr/1193905275/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676218583"
						onDoublegisChange={setDoublegis}
						website="https://www.kolyada-theatre.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Коляда-Театр
					</Location> на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />, 97
				</p>
				<p className="mt-4">Знаменитый эксцентричный театр, безумная уральская цыганщина. Это одна из тех вещей, которые либо безумно нравятся, либо совсем нет. Автору знакомы обе категории людей.</p>
				<p className="font-bold mt-4">
					<Location
						name="Центр современной драматургии"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/tsentr_sovremennoy_dramaturgii/191001439191/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676594548"
						onDoublegisChange={setDoublegis}
						website="https://uralcsd.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Центр современной драматургии
					</Location> на <OriginaledTitle modern="Малышева" original="Покровском проспекте" isOriginal={isOriginal} />, 145а, литера Ф
				</p>
				<p className="mt-4">Очень андеграундные ребята. Находятся в пикулях и чтобы понять где на этой промзоне театр, у них на сайте есть большая инструкция. Но этот поиск стоит того, постановки прекрасные.</p>
				<p className="font-bold mt-4">
					<Location
						name="Эвер Джаз"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/everjazz/1093531764/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676747227"
						onDoublegisChange={setDoublegis}
						website="https://www.everjazz.ru/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Эвер Джаз
					</Location> на <OriginaledTitle modern="Тургенева" original="Верхне-Вознесенской" isOriginal={isOriginal} />, 22
				</p>
				<p className="mt-4">Приятный джазовый клуб. Почти каждый день какие-нибудь выступления. Очень спокойная <i>своя</i> атмосфера.</p>
				<p className="font-bold mt-4">
					<Location
						name="Филармония"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/sverdlovskaya_gosudarstvennaya_akademicheskaya_filarmoniya/1011192893/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/1267165676580027"
						onDoublegisChange={setDoublegis}
						website="https://sgaf.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Филармония
					</Location> на <OriginaledTitle modern="Карла Либкнехта" original="Вознесенском проспекте" isOriginal={isOriginal} />, 38а
				</p>
				<p className="mt-4">Филармония у нас классная, «питерские бабушки» в наличии.</p>
			{/* 
			<p className="font-bold mt-4">Сходить на женский баскетбол и поболеть на домашних матчах за «УГМК» в <a className="ye" href="https://divsport.ru">ДИВСе</a> на <span className="modern">Олимпийской набережной</span><span className="auth">Ключевской</span>, 3</p>
			<p>Наша легендарная баскетбольная команда, взявшая кучу европейских клубных наград. Одно удовольствие наблюдать за их игрой.</p>
			<p className="font-bold mt-4">Скалодром <a className="ye" href="https://kraisveta.com">Край Света</a> в «Силе Воли» на Толмачёва, 22</p>
			<p>Вы же в горный регион приехали, а значит стоит посетить наш лучший боулдеринговый скалодром. Лучшие тренеры, приятное коммюнити. Антону привет 👋🏻</p>
			<h3><a href="https://tele-club.ru/fabrika">Фабрика ???</a></p>
			<p>Пошутить про Нирвану и Артхаус, про Свободу, про Кельман???</p>
			*/}
				<p className="text-lg mt-8">Где пошопиться?</p>
				<p className="font-bold mt-4">
					<Location
						name="Ель"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/yel/171589020386/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001029422763"
						onDoublegisChange={setDoublegis}
						website="https://eeel.center"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Ель
					</Location> в Ельцин Центре на <OriginaledTitle modern="Ельцина" original="Фетисовской" isOriginal={isOriginal} />, 3
				</p>
				<p className="mt-4">За сувенирами с Урала сюда. Куча приятных памятных штучек, особенно ценно варенье из кедровых шишек.</p>
				<p className="font-bold mt-4">
					<Location
						name="Золотое яблоко"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/zolotoye_yabloko/1062258892/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001024788230"
						onDoublegisChange={setDoublegis}
						website="https://goldapple.ru"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Золотое яблоко
					</Location> на <OriginaledTitle modern="Малышева" original="Покровском проспекте" isOriginal={isOriginal} />, 71
				</p>
				<p className="mt-4">Самый крутой в стране магазин парфюмерии и косметики вообще-то родом из Екатеринбурга. Загляните в штаб.</p>
				<p className="font-bold mt-4">
					<Location
						name="Инжир"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/geo/prospekt_lenina_25/4794806243/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001007320021"
						onDoublegisChange={setDoublegis}
						website="https://www.instagram.com/ingir_ekb/"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Инжир
					</Location> на <OriginaledTitle modern="Ленина" original="Главном проспекте" isOriginal={isOriginal} />, 25
				</p>
				<p className="mt-4">Лучший в городе цветочный магазин. То самое место, чтобы порадовать дорогих сердцу людей.</p>
				<p className="font-bold mt-4">
					<Location
						name="Пиотровский"
						onNameChange={setName}
						yandex="https://yandex.ru/maps/org/piotrovskiy/25039843189/"
						onYandexChange={setYandex}
						doublegis="https://2gis.ru/ekaterinburg/firm/70000001021294170"
						onDoublegisChange={setDoublegis}
						website="https://piotrovsky.store"
						onWebsiteChange={setWebsite}
						onOpen={onOpen}
					>
						Пиотровский
					</Location> в Ельцин Центре на <OriginaledTitle modern="Ельцина" original="Фетисовской" isOriginal={isOriginal} />, 3
				</p>
				<p className="mt-4">Наш крутейший книжный. Как «Фаланстер» и «Подписные издания», только «Пиотровский».</p>
				<p className="text-lg mt-8">На прощание</p>
				<p className="mt-4">Хотите побольше истории? Налейте чаю с жжёным «Свердловским» кексом и прочитайте «<a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://www.goodreads.com/book/show/22031637">Ёбург</a>» Алексея Иванова.</p>
				<p className="mt-4">А вообще, расслабьтесь относительно ожиданий. Если вам слащаво и уютно, значит что-то идёт не так. Как говорила легендарная <a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="https://t.me/ekbprogulki">Васильева</a>: «Урал — место не для жизни, а для работы».</p>
				<p className="mt-4">За помощь в составлении путеводителя и редактуру спасибо Ане, Саше и Маше.</p>
				<Signature />
				<LocationModal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					name={name}
					yandex={yandex}
					doublegis={doublegis}
					website={website}
				/>
			</div>
		</div>
	);
}
