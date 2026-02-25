export default function Testimonial({ t }: { t: { name: string; place: string; text: string } }) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-white p-6 shadow-sm">
      <div className="text-md font-semibold">{t.name}</div>
      <div className="mt-1 text-sm text-[rgb(var(--muted))]">{t.place}</div>
      <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">“{t.text}”</p>
      <div className="fill-orange-500 text-orange-500 mt-4 text-xs text-[rgb(var(--muted))]">★★★★★</div>
    </div>
  );
}