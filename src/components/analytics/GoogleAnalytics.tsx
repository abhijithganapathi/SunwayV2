"use client";

import Script from "next/script";
import { useEffect } from "react";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (!measurementId || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", name, params);
}

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!measurementId) {
      return;
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");
      const href = link?.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href });
      }

      if (href.includes("wa.me/")) {
        trackEvent("whatsapp_click", { link_url: href });
      }
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}
