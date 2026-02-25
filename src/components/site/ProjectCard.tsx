export default function ProjectCard({
  project,
}: {
  project: {
    title: string;
    location: string;
    size: string;
    image: string;
    highlight: string;
  };
}) {
  return (
    <div
      className={[
        "group overflow-hidden rounded-3xl border border-black/10 bg-white",
        "shadow-sm transition",
        "hover:-translate-y-[3px] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
          role="img"
          aria-label={project.title}
        />

        {/* Subtle dark gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold tracking-tight text-[rgb(var(--ink))]">
          {project.title}
        </h3>

        <p className="mt-1 text-sm text-black/50">
          {project.location} • {project.size}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
          {project.highlight}
        </p>
      </div>
    </div>
  );
}