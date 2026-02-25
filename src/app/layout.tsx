import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import type { Metadata } from "next";

const siteUrl = "https://sunwaysolarsystems.in"; // 🔁 change to your real domain when live

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sunway Solar Systems | Rooftop Solar in Kerala",
    template: "%s | Sunway Solar Systems",
  },

  description:
    "Rooftop solar installations in Kerala with quality-first finishing, practical system sizing, and reliable after-sales support. KSEB approved guidance.",

  keywords: [
    "solar installation Kerala",
    "rooftop solar Kerala",
    "KSEB approved solar",
    "residential solar Kerala",
    "commercial solar Kerala",
    "Sunway Solar Systems",
  ],

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sunway Solar Systems | Rooftop Solar in Kerala",
    description:
      "Quality-first rooftop solar installations with clean finishing and long-term performance focus.",
    siteName: "Sunway Solar Systems",
    images: [
      {
        url: "/og.jpg", // 🔁 add this file inside /public
        width: 1200,
        height: 630,
        alt: "Sunway Solar Systems",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sunway Solar Systems | Rooftop Solar in Kerala",
    description:
      "Quality-first rooftop solar installations with clean finishing and long-term performance focus.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}