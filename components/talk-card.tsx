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
                        <Link href={url} className="mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                            <Image
                                src={imageSrc}
                                alt={`${name} превью`}
                                width={160}
                                height={90}
                                className="object-contain rounded-[14px] w-40 h-[90px]"
                            />
                        </Link>
                    )}
                    <div className="flex-1 min-w-0">
                        <Link href={url} className="font-semibold">{name}</Link>
                        <div className="break-words mt-2">
                            <p className="text-xs">{year} • {duration}</p>
                            <div className="mt-1">{children}</div>
                        </div>
                    </div>
                </div>
            </Card.Content>
        </Card>
    );
}
