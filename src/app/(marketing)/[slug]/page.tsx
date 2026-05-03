import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/site/Container";
import Section from "@/components/site/Section";
import Button from "@/components/site/Button";
import LeadForm from "@/components/site/LeadForm";
import { getLocalPage, localPages } from "@/content/localPages";
import { site } from "@/content/site";
import { CheckCircle2, MapPin, MessageCircle } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return localPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocalPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `https://${site.domain}/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://${site.domain}/${page.slug}`,
      images: [`https://${site.domain}/images/og.jpg`],
    },
  };
}

export default async function LocalLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLocalPage(slug);

  if (!page) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: {
      "@type": "SolarEnergyCompany",
      name: site.name,
      telephone: site.phoneE164,
      url: `https://${site.domain}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addressLine,
        addressLocality: "Kottarakkara",
        addressRegion: site.region,
        postalCode: "691531",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.region,
    },
  };

  return (
    <main className="pt-20 md:pt-24">
      <Section className="py-10 md:py-14">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700">
                <MapPin className="h-4 w-4" />
                {page.eyebrow}
              </p>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[rgb(var(--ink))] md:text-5xl">
                {page.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[rgb(var(--muted))] md:text-lg">
                {page.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary">
                  Get estimate
                </Button>
                <Button
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Hi Sunway Solar Systems, I need help with ${page.title}.`
                  )}`}
                  variant="secondary"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </span>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm md:p-7">
              <h2 className="text-lg font-semibold text-[rgb(var(--ink))]">
                Quick estimate request
              </h2>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                Share your bill range and location. We will suggest the next step.
              </p>
              <div className="mt-5">
                <LeadForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <div className="border-t border-black/5" />

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-4">
            {page.proofPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-orange-600" />
                <p className="mt-3 text-sm font-medium leading-relaxed text-black/75">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
                <h2 className="text-lg font-semibold tracking-tight text-[rgb(var(--ink))]">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  );
}
