import { Link } from "@/components";

type LocationProps = {
    children: React.ReactNode;
    name: string;
    onNameChange: (name: string) => void;
    yandex: string;
    onYandexChange: (yandex: string) => void;
    doublegis: string;
    onDoublegisChange: (doublegis: string) => void;
    website: string;
    onWebsiteChange: (website: string) => void;
    onOpen: () => void;
};

export function Location({
    children,
    name,
    onNameChange,
    yandex,
    onYandexChange,
    doublegis,
    onDoublegisChange,
    website,
    onWebsiteChange,
    onOpen
}: LocationProps) {
    return (
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
    );
}
