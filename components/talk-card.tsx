import { Card } from "@heroui/react"
import Image from "next/image";

import { Link } from "@/components";

type TalkCardProps = {
    name: string;
    url: string;
    year: string;
    duration: string;
    imageSrc: string;
    children: React.ReactNode;
};

export function TalkCard({
    name,
    url,
    year,
    duration,
    imageSrc,
    children,
}: TalkCardProps) {
    return (
        <Card className="mt-4">
            <Card.Content>
                <div className="flex flex-col sm:flex-row sm:items-start">
                    {imageSrc && (
                        <Link href={url} className="mb-3 shrink-0 sm:mr-4 sm:mb-0">
                            <Image
                                src={imageSrc}
                                alt={`${name} превью`}
                                width={160}
                                height={90}
                                className="h-22.5 w-40 rounded-[14px] object-contain"
                            />
                        </Link>
                    )}
                    <div className="min-w-0 flex-1">
                        <Link href={url} className="font-semibold">{name}</Link>
                        <div className="mt-2 wrap-break-word">
                            <p className="text-xs">{year} • {duration}</p>
                            <div className="mt-1">{children}</div>
                        </div>
                    </div>
                </div>
            </Card.Content>
        </Card>
    );
}
