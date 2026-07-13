import type { Metadata } from "next";
import Container from "@/components/site/Container";
import Section from "@/components/site/Section";
import ProjectCard from "@/components/site/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Kerala Rooftop Solar Installation Projects",
  description: "View recent residential and commercial rooftop solar installations by Sunway Solar Systems across Kerala.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Page Header */}
      <Section className="py-10 md:py-14">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-wide uppercase text-black/40">
              Projects
            </p>

            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-[rgb(var(--ink))]">
              Installations
            </h1>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-[rgb(var(--muted))]">
              A few recent installations. 
            </p>
          </div>
        </Container>
      </Section>

      <div className="border-t border-black/5" />

      {/* Projects Grid */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}