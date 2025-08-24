"use client";

import {
    Link as HeroUILink,
    LinkProps as HeroUILinkProps
} from "@heroui/react";

interface LinkProps extends HeroUILinkProps {
    variant?: "default" | "yekaterinburg" | "ref";
}

export function Link(props: LinkProps) {
    let className = (props.className ?? "") + " cursor-pointer";
    let underline: "always" | "none" = "always";

    if (props.variant === "yekaterinburg") {
        className += " text-[#D2E4D6]";
        underline = "always";
    }
    if (props.variant === "ref") {
        className += " text-[0.75rem]";
        underline = "none";
    }

    const linkProps = {
        ...props,
        className,
        underline
    };

    return (
        <HeroUILink {...linkProps}>
            {props.children}
        </HeroUILink>
    );
}
