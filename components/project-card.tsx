import { Card } from "@heroui/react"
import Image from "next/image";

import { Link } from "@/components";

type ProjectCardProps = {
    name: string;
    url: string;
    imageSrc?: string;
    years?: string;
    children: React.ReactNode;
};

export function ProjectCard({
    name,
    url,
    imageSrc,
    years,
    children,
}: ProjectCardProps) {
    return (
        <Card className="mt-4">
            <Card.Content>
                <div className="flex items-start">
                    {imageSrc && (
                        <Link href={url} className="mr-4 flex-shrink-0">
                            <Image
                                src={imageSrc}
                                alt={`${name} лого`}
                                width={64}
                                height={64}
                                className="size-16 rounded-[14px] object-contain"
                            />
                        </Link>
                    )}
                    <div className="min-w-0 flex-1">
                        <Link href={url} className="font-semibold">{name}</Link>
                        <div className="break-words">
                            {years && (
                                <p className="mt-2 text-xs">{years}</p>
                            )}
                            <div className="mt-2">{children}</div>
                        </div>
                    </div>
                </div>
            </Card.Content>
        </Card>
    );
}
