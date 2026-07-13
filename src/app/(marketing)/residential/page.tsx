import type { Metadata } from "next";
import Container from "@/components/site/Container";
import Section from "@/components/site/Section";
import Button from "@/components/site/Button";
import { Home, LayoutDashboard, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Rooftop Solar Installation in Kerala",
  description: "Plan a practical home rooftop solar system in Kerala with site assessment, system sizing, installation, KSEB guidance, and after-sales support.",
  alternates: { canonical: "/residential" },
};

export default function ResidentialPage() {
    const steps = [
        {
            t: "Site visit & assessment",
            d: "We evaluate roof space, shading, orientation, and your electricity usage.",
            icon: Home,
        },
        {
            t: "System design",
            d: "Practical sizing, clean layout, and safe electrical planning for long-term output.",
            icon: LayoutDashboard,
        },
        {
            t: "Installation & support",
            d: "Neat finishing, safety testing, and continued after-sales guidance.",
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
                            Residential
                        </p>

                        <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-[rgb(var(--ink))]">
                            Rooftop Solar for Homes
                        </h1>

                        <p className="mt-4 text-base md:text-lg leading-relaxed text-[rgb(var(--muted))]">
                            A clean, well-engineered rooftop system can significantly reduce your
                            electricity bills while increasing property value.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <Button href="/contact" variant="primary">
                                Get your estimate
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