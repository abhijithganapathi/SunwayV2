import Container from "@/components/site/Container";
import Section from "@/components/site/Section";
import LeadForm from "@/components/site/LeadForm";
import Button from "@/components/site/Button";
import { site } from "@/content/site";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="pt-20 md:pt-24">
            {/* Page Header */}
            <Section className="py-10 md:py-14">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium tracking-wide uppercase text-black/40">
                            Contact
                        </p>

                        <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-[rgb(var(--ink))]">
                            Get a solar estimate
                        </h1>

                        <p className="mt-4 text-base md:text-lg leading-relaxed text-[rgb(var(--muted))]">
                            Share your location and bill range. We’ll reply with a practical recommendation and next steps.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <Button href={`tel:${site.phoneE164}`} variant="secondary">
                                <span className="inline-flex items-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    Call
                                </span>
                            </Button>

                            <Button
                                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                                    "Hi Sunway Solar Systems, I need a rooftop solar estimate."
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
                </Container>
            </Section>

            <div className="border-t border-black/5" />

            {/* Form + Office */}
            <Section className="py-12 md:py-16">
                <Container>
                    <div className="grid gap-6 md:grid-cols-2 md:items-start">
                        {/* Form card */}
                        <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
                            <h2 className="text-lg font-semibold text-[rgb(var(--ink))]">
                                Send your details
                            </h2>
                            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                                We’ll contact you shortly with a recommendation.
                            </p>

                            <div className="mt-5">
                                <LeadForm />
                            </div>

                            <p className="mt-4 text-xs text-black/45">
                                By submitting, you agree to be contacted by phone or WhatsApp for this request.
                            </p>
                        </div>

                        {/* Office card */}
                        <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
                            <h2 className="text-lg font-semibold text-[rgb(var(--ink))]">
                                Office
                            </h2>

                            {/* Address link to Google Maps */}
                            <a
                                href={site.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 flex items-start gap-2 text-sm text-[rgb(var(--muted))] hover:text-black transition"
                            >
                                <MapPin className="mt-0.5 h-4 w-4 text-black/50" />
                                <span className="underline underline-offset-4">
                                    {site.addressLine}
                                </span>
                            </a>

                            <div className="mt-5 space-y-3 text-sm">
                                <a
                                    className="flex items-center gap-2 text-black/70 hover:text-black transition"
                                    href={`tel:${site.phoneE164}`}
                                >
                                    <Phone className="h-4 w-4 text-black/50" />
                                    <span className="underline underline-offset-4">{site.phoneDisplay}</span>
                                </a>

                                <a
                                    className="flex items-center gap-2 text-black/70 hover:text-black transition"
                                    href={`mailto:${site.email}`}
                                >
                                    <Mail className="h-4 w-4 text-black/50" />
                                    <span className="underline underline-offset-4">{site.email}</span>
                                </a>
                            </div>

                            {/* Optional mini trust line */}
                            <div className="mt-6 rounded-2xl border border-black/5 bg-black/[0.02] p-4">
                                <p className="text-sm text-black/70">
                                    Prefer a call? Share your bill range — we’ll suggest a practical system size.
                                </p>
                            </div>

                            {/* Map embed (optional, only if you want it now) */}
                            {/* <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
                <iframe
                  src={site.mapsEmbedUrl}
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div> */}
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}