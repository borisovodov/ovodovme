import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
    return (
        <div className="py-8">
            <Link href="/">
                <Image
                    width="48"
                    height="48"
                    src="/avatar.png"
                    alt="Аватарка автора"
                />
            </Link>
        </div>
    );
}
