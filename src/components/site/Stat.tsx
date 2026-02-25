export default function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="ios-glass rounded-2xl px-5 py-4 text-center border border-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition hover:shadow-[0_22px_60px_rgba(0,0,0,0.10)] hover:-translate-y-[1px]">
      <div className="text-xl md:text-xl font-semibold tracking-tight text-black">
        {value}
      </div>
      <div className="mt-1 text-sm text-black/60">{label}</div>
    </div>
  );
}