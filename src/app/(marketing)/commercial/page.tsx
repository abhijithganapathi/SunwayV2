import type { Metadata } from "next";
import Container from "@/components/site/Container";
import Section from "@/components/site/Section";
import Button from "@/components/site/Button";
import { BarChart3, ClipboardList, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial & Industrial Rooftop Solar in Kerala",
  description: "Commercial and industrial rooftop solar systems in Kerala, designed around your load profile, roof constraints, safe installation, and long-term support.",
  alternates: { canonical: "/commercial" },
};

export default function CommercialPage() {
    const steps = [
        {
            t: "Load & site analysis",
            d: "We review your usage patterns, roof structure, and constraints to size the right system.",
            icon: BarChart3,
        },
        {
            t: "Design & costing",
            d: "Transparent proposal with practical sizing and clear financial projections.",
            icon: ClipboardList,
        },
        {
            t: "Execution & maintenance",
            d: "Safe installation, testing, commissioning, and reliable after-sales support.",
            icon: Wrench,
        },
    ];

    return (
        <main className="pt-20 md:pt-24">
            {/* Page Header */}
            <Section className="py-10 md:py-14">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium tracking-wide uppercase text-black/40">
                            Commercial
                        </p>

                        <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-[rgb(var(--ink))]">
                            Commercial &amp; Industrial Solar
                        </h1>

                        <p className="mt-4 text-base md:text-lg leading-relaxed text-[rgb(var(--muted))]">
                            Reduce operating costs with a reliable system designed for your load profile.
                            We focus on quality, safety, and long-term performance.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <Button href="/contact" variant="primary">
                                Request proposal
                            </Button>
                            <Button href="/projects" variant="secondary">
                                View installs
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
            <div className="border-t border-black/5" />
            {/* Process Cards */}
            <Section className="py-12 md:py-16">
                <Container>
                    <div className="grid gap-6 md:grid-cols-3">
                        {steps.map((x) => {
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