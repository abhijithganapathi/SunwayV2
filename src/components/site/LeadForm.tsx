"use client";
import { useId, useState } from "react";

export default function LeadForm() {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("loading");

    try {
      const form = new FormData(formEl);
      const payload = Object.fromEntries(form.entries());

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4"
      aria-describedby={status !== "idle" ? `${formId}-status` : undefined}
    >
      <div className="grid gap-3 md:grid-cols-2">
        <label className="sr-only" htmlFor={`${formId}-name`}>
          Full name
        </label>
        <input id={`${formId}-name`} name="name" required autoComplete="name" placeholder="Full Name"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#FF9A2F] outline-none" />
        <label className="sr-only" htmlFor={`${formId}-phone`}>
          Phone number
        </label>
        <input id={`${formId}-phone`} name="phone" required type="tel" autoComplete="tel" placeholder="Phone Number"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#FF9A2F] outline-none" />
      </div>

      <label className="sr-only" htmlFor={`${formId}-location`}>
        Location
      </label>
      <input id={`${formId}-location`} name="location" required autoComplete="address-level2" placeholder="Location (e.g., Kottarakkara)"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#FF9A2F] outline-none" />

      <label className="sr-only" htmlFor={`${formId}-bill`}>
        Monthly electricity bill range
      </label>
      <select id={`${formId}-bill`} name="billRange" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none">
        <option value="Rs 0-Rs 1500">Monthly bill: Rs 0-Rs 1500</option>
        <option value="Rs 1500-Rs 3000">Monthly bill: Rs 1500-Rs 3000</option>
        <option value="Rs 3000-Rs 6000">Monthly bill: Rs 3000-Rs 6000</option>
        <option value="Rs 6000+">Monthly bill: Rs 6000+</option>
      </select>

      <label className="sr-only" htmlFor={`${formId}-type`}>
        Customer type
      </label>
      <select id={`${formId}-type`} name="customerType" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none">
        <option value="Residential">Residential Solar</option>
        <option value="Commercial">Commercial Solar</option>
      </select>

      <button disabled={status === "loading"} type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-[#FF9A2F] to-[#F97316] px-4 py-4 text-sm font-bold text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-70">
        {status === "loading" ? "Processing..." : "Get Free Solar Estimate"}
      </button>

      {status === "success" && (
        <div id={`${formId}-status`} role="status" aria-live="polite" className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-center">
          <p className="text-sm font-bold text-emerald-800">Request sent!</p>
          <p className="text-xs text-emerald-700">We will contact you within 24 hours.</p>
        </div>
      )}
      {status === "error" && (
        <p id={`${formId}-status`} role="alert" className="text-sm text-center text-red-600 font-medium">
          Please check your connection and try again.
        </p>
      )}
    </form>
  );
}
