import Container from "@/components/site/Container";
import Section from "@/components/site/Section";
import Button from "@/components/site/Button";
import Stat from "@/components/site/Stat";
import LeadForm from "@/components/site/LeadForm";
import FAQ from "@/components/site/FAQ";
import Testimonial from "@/components/site/Testimonial";
import ProjectCard from "@/components/site/ProjectCard";
import TrustStrip from "@/components/site/TrustStrip";
import { faqs } from "@/content/faqs";
import { testimonials } from "@/content/testimonials";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { BadgeCheck, ClipboardList, Home, Building2, Wrench, ArrowRight } from "lucide-react";


export default function HomePage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SolarEnergyCompany",
                        name: site.name,
                        url: `https://${site.domain}`,
                        telephone: site.phoneE164,
                        email: site.email,
                        image: `https://${site.domain}/og.jpg`,
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: site.addressLine,
                            addressLocality: "Kottarakkara",
                            addressRegion: site.region,
                            postalCode: "691531",
                            addressCountry: "IN",
                        },
                        areaServed: {
                            "@type": "AdministrativeArea",
                            name: site.region,
                        },
                        sameAs: [
                            site.socials.instagram,
                            site.socials.facebook,
                            site.socials.linkedin,
                        ].filter(Boolean),
                        openingHoursSpecification: [
                            {
                                "@type": "OpeningHoursSpecification",
                                dayOfWeek: [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                ],
                                opens: "09:00",
                                closes: "18:00",
                            },
                        ],
                        makesOffer: [
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "Residential rooftop solar installation",
                                },
                            },
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "Commercial solar installation",
                                },
                            },
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "Solar maintenance & AMC",
                                },
                            },
                        ],
                    }),
                }}
            />
            {/* HERO */}
            <Section className="relative min-h-[90vh] flex items-center">
                <Container>
                    <div className="grid gap-10 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-md px-4 py-1.5 text-sm text-black/70 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">

                                <span className="font-semibold tracking-wide text-[#0f214d]">
                                    KSEB
                                </span>

                                <span className="text-black/60">
                                    Approved
                                </span>

                                <span className="h-1 w-1 rounded-full bg-black/30" />

                                <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                                    MNRE Authorized Vendor
                                </span>

                            </p>
                            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                                Kerala’s Trusted Rooftop Solar Experts
                            </h1>

                            <p className="mt-4 text-lg leading-relaxed text-[rgb(var(--muted))]">
                                Site visit, system sizing, KSEB approval, MNRE subsidy & installation, everything handled end-to-end. Get a practical estimate within 24 hours.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Button href="/contact" variant="primary">
                                    Get an estimate
                                </Button>
                                <Button
                                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                                        "Hi Sunway Solar Systems, I need a solar estimate."
                                    )}`}
                                    variant="secondary"
                                >
                                    WhatsApp us
                                </Button>
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
                                <Stat value="800+" label="Projects" />
                                <Stat value="2.3MW+" label="Installed" />
                                <Stat value="100%" label="Happy Clients" />
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-white shadow-sm">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <div
                                    className="aspect-[4/3] bg-cover bg-center"
                                    style={{ backgroundImage: "url(/images/hero.jpg)" }}
                                    role="img"
                                    aria-label="Solar panels on rooftop"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                            </div>
                            <div className="p-5">
                                <p className="text-sm text-[rgb(var(--muted))]">
                                    <span className="font-medium text-[rgb(var(--text))]">No hidden costs, ever!</span> Your estimate includes site visits, system sizing, installation, KSEB charges and post-service support.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* TRUST / FEATURES */}
            <Section>
                <Container>
                    {/* ONE large box only (image lives here) */}
                    <div
                        className="liquid-wrapper relative overflow-hidden rounded-3xl p-8 md:p-12"
                        style={{ backgroundImage: "url('/images/solar-bg.jpg')" }}
                    >
                        {/* background image + overlay */}
                        <div className="absolute inset-0 bg-cover bg-center" />
                        <div className="absolute inset-0 bg-black/45" />

                        {/* content */}
                        <div className="relative z-10 grid gap-8 md:grid-cols-3">
                            <div className="liquid-card p-8 text-white">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Built to last
                                </h3>

                                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/90">
                                    <li className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                        <span>Tier-1 panels with 25+ year warranty</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                        <span>Wiring & installation by experts</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                        <span>Clean & professional finishing</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="liquid-card p-6 text-white">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Approval & Financing
                                </h3>

                                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/90">
                                    <li className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                        <span>Net-metering & paperwork handling</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                        <span>Bank loan & EMI assistance</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                        <span>MNRE subsidy guidance</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="liquid-card p-6 text-white">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Long-Term Reliability
                                </h3>

                                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/90">
                                    <li className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                        <span>24/7 reachable support</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                        <span>Performance monitoring guidance</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                                        <span>Timely execution of maintenance </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* SERVICES */}
            <Section className="py-28">
                <Container>
                    <div className="flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                Find the right solar solution
                            </h2>
                            <p className="mt-2 text-black/60 text-sm">
                                Residential, commercial, and ongoing performance support.
                            </p>
                        </div>

                        <a href="/contact" className="text-sm text-black/50 hover:text-black transition">
                            Talk to us
                        </a>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">

                        {/* Residential */}
                        <a
                            href="/residential"
                            className="group rounded-3xl border border-orange-200 bg-white p-8 shadow-[0_25px_60px_rgba(249,115,22,0.10)] transition hover:shadow-[0_25px_60px_rgba(249,115,22,0.16)] hover:-translate-y-[2px]"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                                <Home size={20} />
                            </div>

                            <h3 className="text-lg font-semibold">Residential Solar</h3>

                            <ul className="mt-4 space-y-2 text-sm text-black/65 leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                    <span>Typical bill savings: <span className="text-emerald-700 font-semibold tracking-tight">80–100%</span></span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                    <span>3–10 kW rooftop systems</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                    <span>Estimate within 24 hours</span>
                                </li>
                            </ul>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:text-orange-700 transition">
                                Learn more <ArrowRight size={16} />
                            </div>
                        </a>

                        {/* Commercial */}
                        <a
                            href="/commercial"
                            className="group rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                                <Building2 size={20} />
                            </div>

                            <h3 className="text-lg font-semibold">Commercial Solar</h3>

                            <ul className="mt-4 space-y-2 text-sm text-black/65 leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                    <span>Lower operating costs</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                    <span>Scalable rooftop setups</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                    <span>ROI-focused sizing & design</span>
                                </li>
                            </ul>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:text-orange-700 transition">
                                Learn more <ArrowRight size={16} />
                            </div>
                        </a>

                        {/* Maintenance */}
                        <a
                            href="/contact"
                            className="group rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                                <Wrench size={20} />
                            </div>

                            <h3 className="text-lg font-semibold">Maintenance &amp; AMC</h3>

                            <ul className="mt-4 space-y-2 text-sm text-black/65 leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                    <span>Cleaning + periodic checks</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                    <span>Performance monitoring guidance</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                                    <span>Faster service response</span>
                                </li>
                            </ul>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:text-orange-700 transition">
                                Learn more <ArrowRight size={16} />
                            </div>
                        </a>

                    </div>
                </Container>
            </Section>

            {/* PROJECTS */}
            <Section>
                <Container>
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight">Recent installs</h2>
                            <p className="mt-2 text-[rgb(var(--muted))]">
                                Our installations across Kerala
                            </p>
                        </div>
                        <Button href="/projects" variant="ghost">
                            View all
                        </Button>
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-3">
                        {projects.slice(0, 3).map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </div>
                </Container>
            </Section>
            <div className="border-t border-black/5" />
            {/* TESTIMONIALS */}
            <Section className="py-14 md:py-18">
                <Container>
                    <div className="max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[rgb(var(--ink))]">
                            What customers say
                        </h2>

                        <p className="mt-2 text-sm md:text-base text-[rgb(var(--muted))]">
                            Real feedback from recent residential and commercial installs.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {testimonials.map((t) => (
                            <Testimonial key={t.name} t={t} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* LEAD FORM */}
            <Section>
                <Container>
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                        {/* Background image INSIDE the box */}
                        <div
                            className="absolute inset-0 opacity-[0.15] bg-[length:520px_520px] bg-repeat"
                            style={{ backgroundImage: "url('/images/flowers.jpg')" }}
                        />

                        {/* Glass diffusion overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-white/25 to-white/10 backdrop-blur-2xl" />

                        {/* Subtle inner highlight (iOS feel) */}
                        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />

                        {/* Content */}
                        <div className="relative z-10 grid gap-8 p-6 md:grid-cols-2 md:items-center md:p-10">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900"> {/* Increased size/weight */}
                                    Get your solar estimate
                                </h2>

                                <p className="mt-3 text-lg text-slate-700 leading-relaxed"> {/* Better spacing & solid color */}
                                    Ready to slash your electricity bills? Enter your details for a <strong>free, no-obligation</strong> solar blueprint.
                                </p>

                                <ul className="mt-6 space-y-3 text-md text-slate-700">
                                    <li className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-[#FF9A2F] shadow-sm" />
                                        Customized system sizing for your roof
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-[#FF9A2F] shadow-sm" />
                                        KSEB & Subsidy eligibility check
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-[#FF9A2F] shadow-sm" />
                                        24-hour turnaround guaranteed
                                    </li>
                                </ul>
                            </div>

                            {/* Form Container: Added a slightly stronger border and shadow */}
                            <div className="rounded-3xl border border-white/40 bg-white/40 p-4 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:p-8">
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section>
                <Container>
                    <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
                    <div className="mt-6">
                        <FAQ items={faqs} />
                    </div>
                </Container>
            </Section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </main>
    );
}