import Container from "@/components/site/Container";
import Section from "@/components/site/Section";
import Button from "@/components/site/Button";
import { Sparkles, MessageCircle, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      t: "Premium finishing",
      d: "Neat cable routing, clean mounting structures, and proper labeling for long-term reliability.",
      icon: Sparkles,
    },
    {
      t: "Transparent guidance",
      d: "Clear explanations and practical recommendations so you choose the right system.",
      icon: MessageCircle,
    },
    {
      t: "Long-term support",
      d: "We stay reachable for service, monitoring advice, and performance guidance.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <Section className="py-10 md:py-14">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-wide uppercase text-black/40">
              About
            </p>

            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-[rgb(var(--ink))]">
              A quality-first solar team
            </h1>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-[rgb(var(--muted))]">
              Sunway Solar Systems focuses on safe installations, practical recommendations,
              and reliable after-sales support. Our aim is to deliver clean, engineered
              installations you can trust for years.
            </p>

            <div className="mt-7">
              <Button href="/contact" variant="primary">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <div className="border-t border-black/5" />

      {/* Values / Strengths */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((x) => {
              const Icon = x.icon;
              return (
                <div
                  key={x.t}
                  className={[
                    "group rounded-3xl border border-black/10 bg-white p-7",
                    "shadow-sm transition",
                    "hover:-translate-y-[2px] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]",
                  ].join(" ")}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-[rgb(var(--ink))]">
                    {x.t}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                    {x.d}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}