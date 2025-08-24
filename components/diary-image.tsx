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
            <div className="rounded-md border-1 border-gray-200 mt-4">
                <Image
                    width={800}
                    height={800}
                    src={src}
                    alt={alt || String(caption)}
                    className="p-1"
                />
            </div>
            <div className="text-sm text-default-600 mt-2">
                {caption}
            </div>
        </div>
    );
}
