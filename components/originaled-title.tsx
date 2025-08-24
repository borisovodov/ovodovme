type OriginaledTitleProps = {
    modern: string;
    original: string;
    isOriginal: boolean;
};

export function OriginaledTitle({ modern, original, isOriginal }: OriginaledTitleProps) {
    if (isOriginal) {
        return <span>{original}</span>;
    } else {
        return <span>{modern}</span>;
    };
}
