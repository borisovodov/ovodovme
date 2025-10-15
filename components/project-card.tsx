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
    children?: React.ReactNode;
};

export function ProjectCard({
    name,
    url,
    imageSrc,
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
                        <p className="break-words">{children}</p>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
