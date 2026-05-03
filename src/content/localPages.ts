export type LocalPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  keywords: string[];
  proofPoints: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export const localPages: LocalPage[] = [
  {
    slug: "solar-panel-installation-kottarakkara",
    eyebrow: "Kottarakkara Solar Installation",
    title: "Solar Panel Installation in Kottarakkara",
    description:
      "End-to-end rooftop solar installation in Kottarakkara with site visit, system sizing, KSEB paperwork guidance, and after-sales support.",
    keywords: [
      "solar panel installation Kottarakkara",
      "rooftop solar Kottarakkara",
      "solar company Kottarakkara",
      "KSEB solar Kottarakkara",
    ],
    proofPoints: [
      "Local office in Kottarakkara",
      "Residential and commercial systems",
      "KSEB and subsidy guidance",
      "Estimate within 24 hours",
    ],
    sections: [
      {
        title: "A local team for rooftop solar",
        body:
          "Sunway Solar Systems helps homeowners and businesses in and around Kottarakkara plan practical rooftop solar systems based on roof space, shading, and electricity usage.",
      },
      {
        title: "What we handle",
        body:
          "We support the full process from site assessment and system design to installation, net-metering guidance, and long-term service support.",
      },
      {
        title: "Best for",
        body:
          "Homes, shops, offices, schools, and small commercial buildings that want to reduce monthly electricity bills with a clean rooftop installation.",
      },
    ],
  },
  {
    slug: "rooftop-solar-kollam",
    eyebrow: "Kollam Rooftop Solar",
    title: "Rooftop Solar Solutions in Kollam",
    description:
      "Residential and commercial rooftop solar in Kollam with transparent sizing, quality installation, and dependable support.",
    keywords: [
      "rooftop solar Kollam",
      "solar installation Kollam",
      "solar panels Kollam",
      "commercial solar Kollam",
    ],
    proofPoints: [
      "Installations across Kollam district",
      "System sizing based on real usage",
      "Clean wiring and roof finishing",
      "Support after commissioning",
    ],
    sections: [
      {
        title: "Designed around your bill",
        body:
          "We review your usage, roof layout, and daytime load to recommend a solar system that fits your savings goal without oversizing.",
      },
      {
        title: "Built for Kerala conditions",
        body:
          "Our installations focus on durable structures, safe wiring, proper isolation, and clean finishing for reliable long-term performance.",
      },
      {
        title: "Home and business systems",
        body:
          "Whether you need a 3 kW home system or a larger commercial setup, the proposal is built around your roof, load, and expected return.",
      },
    ],
  },
  {
    slug: "pm-surya-ghar-subsidy-kerala",
    eyebrow: "Solar Subsidy Guidance",
    title: "PM Surya Ghar Solar Subsidy Guidance in Kerala",
    description:
      "Get practical guidance for residential rooftop solar subsidy, eligibility, documents, KSEB steps, and system sizing in Kerala.",
    keywords: [
      "PM Surya Ghar Kerala",
      "solar subsidy Kerala",
      "rooftop solar subsidy Kerala",
      "KSEB solar subsidy",
    ],
    proofPoints: [
      "Eligibility and document guidance",
      "Residential rooftop sizing support",
      "KSEB process guidance",
      "Clear estimate before installation",
    ],
    sections: [
      {
        title: "Understand eligibility before you install",
        body:
          "Subsidy rules depend on the current government scheme, consumer category, system size, and documentation. We help you understand the process before you commit.",
      },
      {
        title: "Choose the right system size",
        body:
          "A subsidy should not be the only reason for choosing a system. We size the system around your electricity bill, available roof area, and expected usage.",
      },
      {
        title: "From paperwork to commissioning",
        body:
          "We guide homeowners through the practical steps including site assessment, estimate, application guidance, installation, net-metering, and support.",
      },
    ],
  },
];

export function getLocalPage(slug: string) {
  return localPages.find((page) => page.slug === slug);
}
