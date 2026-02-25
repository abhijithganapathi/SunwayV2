import { BadgeCheck, ClipboardList, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
  { icon: BadgeCheck, title: "25-year performance warranty", sub: "Tier-1 panels & quality components" },
  { icon: ShieldCheck, title: "Quality-first electrical work", sub: "Safe wiring, earthing & protections" },
  { icon: ClipboardList, title: "Approvals & subsidy support", sub: "Documentation guided end-to-end" },
  { icon: Sparkles, title: "Free site visit & estimate", sub: "Practical recommendation in 24 hours" },
];

export default function TrustStrip({ className }: { className?: string }) {
  return (
    <div className={cn("mt-6", className)}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="ios-glass rounded-2xl px-4 py-3 border border-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black leading-snug">
                    {it.title}
                  </div>
                  <div className="mt-0.5 text-xs text-black/60 leading-snug">
                    {it.sub}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* tiny reassurance line (optional, good for conversion) */}
      <div className="mt-3 text-xs text-black/50">
        No spam. No pressure. Just a clear recommendation based on your roof and bill.
      </div>
    </div>
  );
}