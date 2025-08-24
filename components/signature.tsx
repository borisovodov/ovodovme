import { Link } from "@/components";

export function Signature({variant}: {variant?: "default" | "yekaterinburg"}) {
    return (
        <div className="mt-8">
            <p>-- </p>
            <p><Link variant={variant} href="mailto:boris@ovodov.me">boris@ovodov.me</Link></p>
        </div>
    );
}
