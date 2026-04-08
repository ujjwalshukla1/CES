"use client";

import { useState } from "react";
import { Calendar, Clock, ChevronDown } from "lucide-react";
import type { ContactSection } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { useInView } from "../ui/useInView";
import { contactCss } from "../contact/contactStyles";
import { defaults } from "../contact/contactDefaults";
import { SelectField, InputField, CheckboxItem } from "../contact/FormFields";
import SubmitButton from "../contact/SubmitButton";
import InfoPanel from "../contact/InfoPanel";

function getImgSrc(image?: { asset: { _ref: string } }, imageUrl?: string): string | null {
  if (image?.asset) return urlFor(image).width(800).height(600).url();
  return imageUrl || null;
}

type ContactProps = { data?: ContactSection | null };

export default function LabAppointment({ data: d }: ContactProps) {
  const { ref, inView } = useInView(0.08);
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [checkedSpecials, setCheckedSpecials] = useState<Record<string, boolean>>({});

  const services = d?.serviceOptions?.length ? d.serviceOptions : defaults.services;
  const locations = d?.locationOptions?.length ? d.locationOptions : defaults.locations;
  const times = d?.timeOptions?.length ? d.timeOptions : defaults.times;
  const specialLabels = d?.specialHoursLabels?.length ? d.specialHoursLabels : defaults.specialLabels;
  const badge = d?.badge || defaults.badge;
  const heading = d?.heading || defaults.heading;
  const buttonText = d?.buttonText || defaults.buttonText;
  const features = d?.features?.length ? d.features : defaults.features;
  const headingWords = heading.split(" ");
  const mid = Math.ceil(headingWords.length / 2);

  const [form, setForm] = useState({ service: services[0], location: locations[0], name: "", email: "", phone: "", date: "", time: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => { const n = { ...p }; delete n[k]; return n; });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if(!form.email.trim()) errs.email = "Email is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitState("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: form.service,
          location: form.location,
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          time: form.time,
          tests: Object.entries(checkedSpecials)
            .filter(([, v]) => v)
            .map(([k]) => specialLabels.find((s) => s._key === k)?.label)
            .filter(Boolean)
            .join(", "),
        }),
      });
      const result = await res.json();
      if (!res.ok) {
        if (result.errors) {
          const serverErrs: Record<string, string> = {};
          result.errors.forEach((e: { field: string; message: string }) => { serverErrs[e.field] = e.message; });
          setErrors(serverErrs);
          setSubmitState("error");
        } else {
          setSubmitState("error");
        }
      } else {
        setSubmitState("success");
        setForm({ service: services[0], location: locations[0], name: "", email: "", phone: "", date: "", time: "" });
        setCheckedSpecials({});
      }
    } catch {
      setSubmitState("error");
    }
    setTimeout(() => setSubmitState("idle"), 3500);
  };

  return (
    <>
      <style>{contactCss}</style>
      <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-white">
        <div ref={ref} className={`w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl ${inView ? "card-anim" : "opacity-0"}`}>
          <div className="flex flex-col lg:flex-row">
            <div className={`flex-1 p-6 sm:p-10 ${inView ? "left-anim" : "opacity-0"}`} style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}>
              <p className={`text-green-400 text-sm font-semibold tracking-wide mb-2 ${inView ? "badge-anim" : "opacity-0"}`}>{badge}</p>
              <h2 className={`text-2xl sm:text-3xl font-bold leading-snug mb-8 ${inView ? "title-anim" : "opacity-0"}`}>
                <span className="text-white">{headingWords.slice(0, mid).join(" ")}</span><br />
                <span className={inView ? "shimmer-word" : "text-white"}>{headingWords.slice(mid).join(" ")}</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField label="Select Services" value={form.service} onChange={(v) => set("service", v)} options={services} delay={420} inView={inView} />
                  <SelectField label="Location" value={form.location} onChange={(v) => set("location", v)} options={locations} delay={510} inView={inView} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Name" required placeholder="Name" value={form.name} onChange={(v) => set("name", v)} delay={590} inView={inView} error={errors.name} />
                  <InputField label="Email" required placeholder="Email" type="email" value={form.email} onChange={(v) => set("email", v)} delay={650} inView={inView} error={errors.email} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <InputField label="Phone" required placeholder="Phone" type="tel" value={form.phone} onChange={(v) => set("phone", v)} delay={710} inView={inView} error={errors.phone} />
                  <InputField label="Date"  placeholder="Select Date" type="date" value={form.date} onChange={(v) => set("date", v)} icon={<Calendar size={14} />} delay={770} inView={inView} error={errors.date} />
                  <div className="flex flex-col gap-1.5" style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(22px)", transition: "opacity 0.65s ease 830ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 830ms" }}>
                    <label className="text-sm font-semibold text-white/90">Time</label>
                    <div className="relative group">
                      <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-green-400/80" />
                      <select value={form.time} onChange={(e) => set("time", e.target.value)} className={`w-full appearance-none bg-white/10 border text-white rounded-lg pl-9 pr-8 py-3 text-sm focus:outline-none focus:border-green-400/60 hover:border-white/40 transition-all duration-200 cursor-pointer ${errors.time ? "border-red-500" : "border-white/20"}`}>
                        {times.map((t) => <option key={t} value={t} className="bg-slate-900">{t}</option>)}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none group-focus-within:rotate-180 transition-transform duration-300" />
                    </div>
                    {errors.time && <span className="text-red-400 text-xs mt-0.5">{errors.time}</span>}
                  </div>
                </div>
                <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.65s ease 880ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 880ms" }}>
                  <p className="text-sm font-semibold text-white/90 mb-3">Services you want to use (optional)</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                    {specialLabels.map((item, i) => (
                      <CheckboxItem key={item._key} label={item.label} checked={!!checkedSpecials[item._key]} onChange={(v) => setCheckedSpecials((p) => ({ ...p, [item._key]: v }))} delay={930 + i * 40} inView={inView} />
                    ))}
                  </div>
                </div>
                <SubmitButton submitState={submitState} buttonText={buttonText} inView={inView} />
              </form>
            </div>
            <InfoPanel inView={inView} panelImg={getImgSrc(d?.image, d?.imageUrl)} infoText={d?.infoText || defaults.infoText} features={features} />
          </div>
        </div>
      </div>
    </>
  );
}
