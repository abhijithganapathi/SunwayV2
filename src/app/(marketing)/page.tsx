import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/site/Container";
import Section from "@/components/site/Section";
import Button from "@/components/site/Button";
import LeadForm from "@/components/site/LeadForm";
import FAQ from "@/components/site/FAQ";
import Testimonial from "@/components/site/Testimonial";
import ProjectCard from "@/components/site/ProjectCard";
import { faqs } from "@/content/faqs";
import { testimonials } from "@/content/testimonials";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { ArrowRight, Building2, Home, MessageCircle, Wrench } from "lucide-react";
import styles from "./homeHero.module.css";

const siteUrl = `https://${site.domain}`;

export const metadata: Metadata = {
  title: {
    absolute: "Rooftop Solar Installation in Kerala | Sunway Solar Systems",
  },
  description:
    "Sunway Solar Systems designs and installs rooftop solar solutions for homes and businesses in Kerala, with consultation, sizing, KSEB guidance, and commissioning support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rooftop Solar Installation in Kerala | Sunway Solar Systems",
    description:
      "Reliable rooftop solar solutions for Kerala homes and businesses, from consultation to commissioning.",
    url: "/",
    siteName: "Sunway Solar Systems",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sunway Solar Systems rooftop solar installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooftop Solar Installation in Kerala | Sunway Solar Systems",
    description:
      "Reliable rooftop solar solutions for Kerala homes and businesses, from consultation to commissioning.",
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const heroStats = [
  { value: "800+", label: "Projects" },
  { value: "2.3MW+", label: "Installed" },
  { value: "24 hrs", label: "Estimate" },
];

export default function HomePage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "SolarEnergyCompany",
    name: site.name,
    url: siteUrl,
    telephone: site.phoneE164,
    email: site.email,
    image: `${siteUrl}/images/og.jpg`,
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
    ].filter((url) => url && url !== "#"),
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
          name: "Solar maintenance and support",
        },
      },
    ],
  };

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
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <div className={styles.sunMotion} aria-hidden="true">
          <span className={styles.sunRays} />
          <span className={styles.sunCore} />
        </div>

        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.originalPill}>
              <span className={styles.kseb}>KSEB</span>
              <span className={styles.approved}>Approved</span>
              <span className={styles.dot} />
              <span className={styles.mnre}>MNRE Authorized Vendor</span>
            </p>

            <h1 id="home-hero-title">
              Kerala&apos;s Trusted Rooftop Solar Experts
            </h1>

            <p>
              Site visit, system sizing, KSEB approval, MNRE subsidy and
              installation, everything handled end-to-end. Get a practical
              estimate within 24 hours.
            </p>

            <div className={styles.heroActions}>
              <Link
                href="#estimate"
                className={styles.primaryCta}
                aria-label="Get a solar estimate"
              >
                Get an estimate
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  "Hi Sunway Solar Systems, I need a solar estimate."
                )}`}
                className={styles.secondaryCta}
              >
                <MessageCircle size={17} aria-hidden="true" />
                WhatsApp us
              </Link>
            </div>

            <div className={styles.stats} aria-label="Company experience markers">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={styles.stat}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.quickCta} aria-labelledby="quick-estimate-title">
        <Container>
          <div className={styles.quickCtaInner}>
            <div>
              <span>Planning rooftop solar?</span>
              <h2 id="quick-estimate-title">
                Get a practical system recommendation before you decide.
              </h2>
            </div>
            <div className={styles.quickCtaActions}>
              <Link href="#estimate" className={styles.quickPrimary}>
                Start estimate
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href={`tel:${site.phoneE164}`} className={styles.quickSecondary}>
                Call {site.phoneDisplay}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div
            className={`liquid-wrapper relative overflow-hidden rounded-3xl p-8 md:p-12 ${styles.energyPanel}`}
            style={{ backgroundImage: "url('/images/solar-bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 grid gap-8 md:grid-cols-3">
              <div className="liquid-card p-8 text-white">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Built to last
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/90">
                  <li className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>Quality panels with warranty guidance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>Professional wiring and installation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>Clean and professional finishing</span>
                  </li>
                </ul>
              </div>

              <div className="liquid-card p-6 text-white">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Approval and financing
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/90">
                  <li className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>Net-metering and paperwork handling</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>Bank loan and EMI assistance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>MNRE subsidy guidance</span>
                  </li>
                </ul>
              </div>

              <div className="liquid-card p-6 text-white">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Long-term reliability
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/90">
                  <li className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>Reachable support after installation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>Performance monitoring guidance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>Timely execution of maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 md:py-24">
        <Container>
          <div id="services" className="scroll-mt-24 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Find the right solar solution
              </h2>
              <p className="mt-2 text-black/60 text-sm">
                Residential, commercial, and ongoing performance support.
              </p>
            </div>

            <Link href="#estimate" className="text-sm font-medium text-orange-600 hover:text-orange-700 transition">
              Get estimate
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/residential"
              className={`group rounded-3xl border border-orange-200 bg-white p-8 shadow-[0_25px_60px_rgba(249,115,22,0.10)] transition hover:shadow-[0_25px_60px_rgba(249,115,22,0.16)] hover:-translate-y-[2px] ${styles.funCard}`}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Home size={20} />
              </div>
              <h3 className="text-lg font-semibold">Residential Solar</h3>
              <ul className="mt-4 space-y-2 text-sm text-black/65 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                  <span>System sizing based on roof space and usage</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                  <span>Residential rooftops planned around your bill</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                  <span>Clear proposal after reviewing your details</span>
                </li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:text-orange-700 transition">
                Learn more <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              href="/commercial"
              className={`group rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] ${styles.funCard}`}
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
                  <span>ROI-focused sizing and design</span>
                </li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:text-orange-700 transition">
                Learn more <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              href="/contact"
              className={`group rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] ${styles.funCard}`}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Wrench size={20} />
              </div>
              <h3 className="text-lg font-semibold">Maintenance &amp; AMC</h3>
              <ul className="mt-4 space-y-2 text-sm text-black/65 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                  <span>Cleaning plus periodic checks</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                  <span>Performance monitoring guidance</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70" />
                  <span>Service response coordination</span>
                </li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:text-orange-700 transition">
                Learn more <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
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

      <section id="estimate" className="scroll-mt-24 py-14 md:py-20">
        <Container>
          <div className={`relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] ${styles.estimateGlow}`}>
            <div
              className="absolute inset-0 opacity-[0.15] bg-[length:520px_520px] bg-repeat"
              style={{ backgroundImage: "url('/images/flowers.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-white/25 to-white/10 backdrop-blur-2xl" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />

            <div className="relative z-10 grid gap-8 p-6 md:grid-cols-2 md:items-center md:p-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Get your solar estimate
                </h2>
                <p className="mt-3 text-lg text-slate-700 leading-relaxed">
                  Share your bill range and location for a practical rooftop solar estimate.
                </p>
                <ul className="mt-6 space-y-3 text-md text-slate-700">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#FF9A2F] shadow-sm" />
                    Customized system sizing for your roof
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#FF9A2F] shadow-sm" />
                    KSEB and subsidy guidance where applicable
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#FF9A2F] shadow-sm" />
                    Clear next steps after review
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/40 bg-white/40 p-4 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:p-8">
                <LeadForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-6">
            <FAQ items={faqs} />
          </div>
        </Container>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
