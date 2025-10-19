import {
    Card,
    CardBody,
    Image,
} from "@heroui/react"

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
        <Card shadow="sm" className="mt-4">
            <CardBody>
                <div className="flex items-start">
                    {imageSrc && (
                        <Link href={url} className="mr-4 flex-shrink-0">
                            <Image
                                src={imageSrc}
                                alt={`${name} превью`}
                                width={128}
                                height={64}
                                className="object-contain"
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
            </CardBody>
        </Card>
    );
}
