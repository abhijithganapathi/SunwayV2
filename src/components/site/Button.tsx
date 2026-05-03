import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-2xl px-4 py-2.5 text-sm font-medium transition active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles: Record<Variant, string> = {
    // iOS-feel primary (still your orange)
    primary:
      "bg-gradient-to-b from-[#FF9A2F] to-[#F97316] text-white shadow-[0_10px_25px_rgba(249,115,22,0.25)] hover:brightness-[1.02] focus:ring-[#F97316] focus:ring-offset-[rgb(var(--bg))]",

    // iOS frosted glass secondary
    secondary:
      "ios-glass text-black/80 hover:text-black hover:bg-white/65 focus:ring-black/20 focus:ring-offset-[rgb(var(--bg))]",

    // very subtle text button
    ghost:
      "text-black/70 hover:text-black hover:bg-black/5 focus:ring-black/20 focus:ring-offset-[rgb(var(--bg))]",
  };

  return (
    <Link className={cn(base, styles[variant])} href={href}>
      {children}
    </Link>
  );
}
