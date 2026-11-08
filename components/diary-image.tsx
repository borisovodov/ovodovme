import Image from "next/image";

type DiaryImageProps = {
    src: string;
    alt?: string;
    caption: React.ReactNode;
};

export function DiaryImage({
    src,
    alt,
    caption
}: DiaryImageProps) {
    return (
        <div>
            <div className="mt-4 rounded-md border-1 border-gray-200">
                <Image
                    width={800}
                    height={800}
                    src={src}
                    alt={alt || (typeof caption === "string" ? caption : "")}
                    className="p-1"
                />
            </div>
            <div className="mt-2 text-sm text-muted">
                {caption}
            </div>
        </div>
    );
}
