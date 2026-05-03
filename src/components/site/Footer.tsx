import Container from "./Container";
import { site } from "@/content/site";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-[rgb(var(--border))] bg-white">
            <Container className="py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="text-sm font-semibold">{site.name}</div>
                        <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                            KSEB-compliant installations with MNRE subsidy guidance and reliable after-sales support.
                        </p>
                    </div>

                    <div>
                        <div className="text-sm font-semibold">Contact</div>
                        <div className="mt-2 flex flex-col space-y-1 text-sm text-[rgb(var(--muted))]">
                            <a
                                href={site.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-black transition underline-offset-4 underline"
                            >
                                No. 670, Maruthayath Building, Lower Karickom,
                                Kottarakkara - 691531
                            </a>
                            <a className="block underline hover:text-black transition" href={`tel:${site.phoneE164}`}>
                                {site.phoneDisplay}
                            </a>
                            <a className="block underline hover:text-black transition" href={`mailto:${site.email}`}>
                                {site.email}
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-semibold">Quick links</div>
                        <div className="mt-2 space-y-1 text-sm">
                            <Link className="block text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]" href="/residential">
                                Residential
                            </Link>
                            <Link className="block text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]" href="/commercial">
                                Commercial
                            </Link>
                            <Link className="block text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]" href="/projects">
                                Projects
                            </Link>
                            <Link className="block text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]" href="/contact">
                                Get Quote
                            </Link>
                            <Link className="block text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]" href="/solar-panel-installation-kottarakkara">
                                Solar in Kottarakkara
                            </Link>
                            <Link className="block text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]" href="/rooftop-solar-kollam">
                                Rooftop Solar Kollam
                            </Link>
                            <Link className="block text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]" href="/pm-surya-ghar-subsidy-kerala">
                                Solar Subsidy Kerala
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-xs text-[rgb(var(--muted))]">
                    &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
