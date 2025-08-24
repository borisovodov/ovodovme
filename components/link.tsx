import {
    Link as HeroUILink,
    LinkProps as HeroUILinkProps
} from "@heroui/react";

interface LinkProps extends HeroUILinkProps {
    variant?: "default" | "yekaterinburg";
}

export function Link(props: LinkProps) {
    // props.className = (props.className ?? "") + " text-blue-600 hover:text-blue-700 underline";
    // props.className = (props.className ?? "") + " cursor-pointer";
    props.underline = "always";

    if (props.variant === "yekaterinburg") {
        props.className = (props.className ?? "") + " text-[#D2E4D6] hover:text-white";
    }

    return (
        <HeroUILink {...props}>{props.children}</HeroUILink>
    );
}


{/* <a className="text-blue-600 hover:text-blue-700 underline" href="/28studio.png">28-й студии</a>

<Link href="/">автора</Link>

<Link
            onPress={() => {
                onNameChange(name);
                onYandexChange(yandex);
                onDoublegisChange(doublegis);
                onWebsiteChange(website);
                onOpen();
            }}
            underline="always"
            className="text-[#D2E4D6] hover:text-white cursor-pointer"
        >
            {children}
        </Link>

<a className="text-blue-600 hover:text-blue-700 underline cursor-pointer" onClick={downloadICS}>ссылке</a>

<Link href="https://en.wikipedia.org/wiki/Percent-encoding">URL-кодировке</Link>

<Link href="https://sobory.ru/photo/217034" className="text-sm">Источник</Link>

<Link href="#cite_note-agniya" className="text-[0.75rem]">[3]</Link>

<Link href="/">
                <Image
                    width="48"
                    height="48"
                    src="/avatar.png"
                    alt="Аватарка автора"
                />
            </Link>

<a className="text-[#006732] hover:text-[#004e13] underline" href={website}>Сайт</a>

<a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="mailto:boris@ovodov.me">boris@ovodov.me</a> */}