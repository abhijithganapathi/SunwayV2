"use client";

import { useState } from "react";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[rgb(var(--border))] rounded-2xl border border-[rgb(var(--border))] bg-white shadow-sm">
      {items.map((it, idx) => (
        <div key={it.q} className="p-5">
          <button
            className="flex w-full items-center justify-between gap-6 text-left"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <span className="text-sm font-semibold">{it.q}</span>
            <span className="text-[rgb(var(--muted))]">{open === idx ? "–" : "+"}</span>
          </button>

          {open === idx && (
            <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">{it.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}