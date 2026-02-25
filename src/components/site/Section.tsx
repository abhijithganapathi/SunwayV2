import { cn } from "@/lib/cn";

export default function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cn("py-16", className)}>{children}</section>;
}