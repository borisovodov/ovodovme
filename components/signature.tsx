import { Link } from "@/components";

export function Signature() {
    return (
        <div className="mt-8">
            <p>-- </p>
            <p><Link href="mailto:boris@ovodov.me">boris@ovodov.me</Link></p>
        </div>
    );
}

// export function YeSignature() {
//     return (
//         <div className="mt-8">
//             <p>-- </p>
//             <p><a className="text-[#D2E4D6] hover:text-white cursor-pointer underline" href="mailto:boris@ovodov.me">boris@ovodov.me</a></p>
//         </div>
//     );
// }
