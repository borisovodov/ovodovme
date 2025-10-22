import {
    Card,
    CardBody,
    Image,
} from "@heroui/react"

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
        <Card shadow="sm" className="mt-4">
            <CardBody>
                <div className="flex items-start">
                    {imageSrc && (
                        <Link href={url} className="mr-4 flex-shrink-0">
                            <Image
                                src={imageSrc}
                                alt={`${name} лого`}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </Link>
                    )}
                    <div className="flex-1 min-w-0">
                        <Link href={url} className="font-semibold">{name}</Link>
                        <div className="break-words">
                            {years && (
                                <p className="text-xs mt-2">{years}</p>
                            )}
                            <div className="mt-2">{children}</div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
