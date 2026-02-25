import Container from "./Container";
import Button from "./Button";
import { site } from "@/content/site";
import Image from "next/image";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const nav = [
    { href: "/residential", label: "Residential" },
    { href: "/commercial", label: "Commercial" },
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
                    "bg-white/70 backdrop-blur-2xl",
                    "shadow-[0_14px_40px_rgba(0,0,0,0.10)]",
                ].join(" ")}
                style={{
                    WebkitBackdropFilter: "blur(24px)",
                }}
            >
                {/* subtle inner highlight like iOS */}
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />

                <Container className="relative flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <div className="relative -my-1 h-16 w-44">
                            <Image
                                src="/brand/sunway-logo-dark.png"
                                alt="Sunway Solar Systems"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </a>

                    {/* Nav */}
                    <nav className="hidden items-center gap-6 md:flex">
                        {nav.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                className="text-sm text-black/80 hover:text-black transition"
                            >
                                {n.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right */}
                    <div className="flex items-center gap-2">
                        <a
                            className="hidden md:inline-flex rounded-2xl ios-glass px-3 py-2 text-sm text-black/80 hover:text-black transition"
                            href={`tel:${site.phoneE164}`}
                        >
                            Call
                        </a>

                        <Button href="/contact" variant="primary">
                            Get Quote
                        </Button>
                    </div>
                </Container>
            </header>

            {/* ✅ Mobile sticky CTA bar (outside header) */}
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