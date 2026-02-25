"use client";
import { useState } from "react";

export default function LeadForm() {
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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <input name="name" required placeholder="Full Name" 
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#FF9A2F] outline-none" />
        <input name="phone" required type="tel" placeholder="Phone Number" 
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#FF9A2F] outline-none" />
      </div>

      <input name="location" required placeholder="Location (e.g., Kottarakkara)" 
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#FF9A2F] outline-none" />

      <select name="billRange" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none">
        <option value="₹0–₹1500">Monthly bill: ₹0–₹1500</option>
        <option value="₹1500–₹3000">Monthly bill: ₹1500–₹3000</option>
        <option value="₹3000–₹6000">Monthly bill: ₹3000–₹6000</option>
        <option value="₹6000+">Monthly bill: ₹6000+</option>
      </select>

      <select name="customerType" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none">
        <option value="Residential">Residential Solar</option>
        <option value="Commercial">Commercial Solar</option>
      </select>

      <button disabled={status === "loading"} type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-[#FF9A2F] to-[#F97316] px-4 py-4 text-sm font-bold text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-70">
        {status === "loading" ? "Processing..." : "Get My Free Solar Blueprint"}
      </button>

      {status === "success" && (
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-center">
          <p className="text-sm font-bold text-emerald-800">✅ Request Sent!</p>
          <p className="text-xs text-emerald-700">We'll contact you within 24 hours.</p>
        </div>
      )}
      {status === "error" && <p className="text-sm text-center text-red-600 font-medium">Please check your connection and try again.</p>}
    </form>
  );
}