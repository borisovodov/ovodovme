import { ProjectCard } from "@/components";

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
        <ProjectCard
            name={name}
            url={url}
            imageSrc={imageSrc}
        >
            <p className="text-xs">{year} • {duration}</p>
            <div className="mt-1">{children}</div>
        </ProjectCard>
    );
}
