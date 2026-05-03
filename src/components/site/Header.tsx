import Container from "./Container";
import Button from "./Button";
import { site } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const nav = [
    { href: "/residential", label: "Residential" },
    { href: "/commercial", label: "Commercial" },
    { href: "/pm-surya-ghar-subsidy-kerala", label: "Subsidy" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <>
            <header
                className={[
                    "fixed top-0 left-0 right-0 z-50",
                    "border-b border-black/10",
                    "bg-white/90 backdrop-blur-xl",
                    "shadow-[0_8px_24px_rgba(15,76,69,0.08)]",
                ].join(" ")}
                style={{
                    WebkitBackdropFilter: "blur(18px)",
                }}
            >
                <Container className="relative flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="relative -my-1 h-16 w-40 md:w-44">
                            <Image
                                src="/brand/sunway-logo-dark.png"
                                alt="Sunway Solar Systems"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Nav */}
                    <nav className="hidden items-center gap-6 lg:flex">
                        {nav.map((n) => (
                            <Link
                                key={n.href}
                                href={n.href}
                                className="text-sm font-medium text-[#17201B]/75 transition hover:text-[#0F4C45]"
                            >
                                {n.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right */}
                    <div className="flex items-center gap-2">
                        <a
                            className="hidden lg:inline-flex rounded-2xl ios-glass px-3 py-2 text-sm text-black/80 hover:text-black transition"
                            href={`tel:${site.phoneE164}`}
                        >
                            Call
                        </a>

                        <div className="hidden min-[360px]:block">
                            <Button href="/contact" variant="primary">
                                Get Quote
                            </Button>
                        </div>

                        <details className="group relative lg:hidden">
                            <summary
                                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-black/10 bg-white text-[#17201B] shadow-sm transition hover:bg-black/[0.03] [&::-webkit-details-marker]:hidden"
                                aria-label="Open menu"
                            >
                                <Menu className="h-5 w-5" />
                            </summary>

                            <div className="absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.16)]">
                                {nav.map((n) => (
                                    <Link
                                        key={n.href}
                                        href={n.href}
                                        className="block rounded-xl px-4 py-3 text-sm font-medium text-[#17201B]/80 transition hover:bg-[#F8FAF7] hover:text-[#0F4C45]"
                                    >
                                        {n.label}
                                    </Link>
                                ))}
                            </div>
                        </details>
                    </div>
                </Container>
            </header>

            {/* Mobile sticky CTA bar */}
            <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
                <div className="ios-glass rounded-2xl border border-black/10 p-2 shadow-lg">
                    <div className="grid grid-cols-2 gap-2">

                        {/* Call */}
                        <a
                            href={`tel:${site.phoneE164}`}
                            className="flex items-center justify-center gap-2 rounded-xl bg-white/70 px-4 py-3 text-sm font-medium text-black/80 hover:bg-white transition"
                        >
                            <Phone size={18} />
                            Call
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                                "Hi, I need a rooftop solar estimate."
                            )}`}
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)]"
                        >
                            <FaWhatsapp size={18} />
                            WhatsApp
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
}
