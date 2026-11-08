"use client";

import {
    Link as HeroUILink,
    LinkProps as HeroUILinkProps
} from "@heroui/react";

interface LinkProps extends Omit<HeroUILinkProps, "variant"> {
    variant?: "default" | "yekaterinburg" | "ref" | undefined;
}

export function Link(props: LinkProps) {
    const { variant, ...rest } = props;

    const callerClassName = typeof rest.className === "string" ? rest.className : "";
    // text-* утилиты, которые НЕ задают цвет (размер, выравнивание, перенос)
    const NON_COLOR_TEXT_CLASSES = new Set([
        "text-xs", "text-sm", "text-base", "text-lg", "text-xl",
        "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl",
        "text-7xl", "text-8xl", "text-9xl",
        "text-left", "text-center", "text-right", "text-justify",
        "text-start", "text-end",
        "text-wrap", "text-nowrap", "text-balance", "text-pretty",
        "text-ellipsis", "text-clip", "text-truncate",
    ]);
    const hasCustomColor = (callerClassName.match(/text-[^\s]+/g) ?? [])
        .some((token) => !NON_COLOR_TEXT_CLASSES.has(token));

    let className = callerClassName + " cursor-pointer";

    if (variant === "yekaterinburg") {
        className += " text-[#D2E4D6]";
    } else if (!hasCustomColor) {
        className += " text-accent";
    }
    if (variant === "ref") {
        className += " text-[0.75rem] no-underline";
    } else {
        className += " underline";
    }
    className += " decoration-current hover:opacity-80 dark:hover:opacity-90";

    return (
        <HeroUILink {...rest} className={className}>
            {props.children}
        </HeroUILink>
    );
}
