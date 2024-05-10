import { PiggyBank } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <PiggyBank className="size-11 stroke stroke-amber-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 text-3xl bg-clip-text font-bold leading-tight tracking-tighter text-transparent">
        Budget Tracker
      </p>
    </Link>
  );
}

export function LogoMobile() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 text-3xl bg-clip-text font-bold leading-tight tracking-tighter text-transparent">
        Budget Tracker
      </p>
    </Link>
  );
}
