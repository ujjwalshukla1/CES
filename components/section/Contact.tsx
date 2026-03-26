"use client";

import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  ChevronDown,
  Pill,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import type { ContactSection } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

// ─── Animation hook ───────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
  service: string;
  location: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  specialHours: {
    beforeEight: boolean;
    wheelchair: boolean;
    openSaturday: boolean;
    autism: boolean;
    holter: boolean;
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SelectField({
  label,
  value,
  onChange,
  options,
  delay = 0,
  inView,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  delay?: number;
  inView: boolean;
}) {
  return (
    <div
      className="flex flex-col gap-1.5"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <label className="text-sm font-semibold text-white/90">{label}</label>
      <div className="relative group">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 pr-10 text-sm
            focus:outline-none focus:border-green-400/60 focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(45,184,122,0.15)]
            hover:border-white/40 hover:bg-white/13 transition-all duration-200 cursor-pointer"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-slate-900 text-white">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180"
        />
      </div>
    </div>
  );
}

function InputField({
  label,
  required,
  placeholder,
  type = "text",
  value,
  onChange,
  icon,
  delay = 0,
  inView,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  icon?: React.ReactNode;
  delay?: number;
  inView: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="flex flex-col gap-1.5"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <label className="text-sm font-semibold text-white/90">
        {label}
        {required && <span className="text-green-300 ml-1">(required)</span>}
      </label>
      <div className="relative">
        {icon && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200"
            style={{
              color: focused
                ? "rgba(45,184,122,0.85)"
                : "rgba(255,255,255,0.45)",
            }}
          >
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg py-3 text-sm
            focus:outline-none focus:border-green-400/60 focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(45,184,122,0.15)]
            hover:border-white/40 hover:bg-white/13 transition-all duration-200 ${icon ? "pl-9 pr-4" : "px-4"}`}
        />
      </div>
    </div>
  );
}

function CheckboxItem({
  label,
  checked,
  onChange,
  delay = 0,
  inView,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  delay?: number;
  inView: boolean;
}) {
  return (
    <label
      className="flex items-center gap-2 cursor-pointer group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-14px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div
        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all duration-200 ${
          checked
            ? "bg-green-500 border-green-500 scale-110"
            : "border-white/40 bg-white/10 group-hover:border-green-400/60 group-hover:bg-white/15"
        }`}
        onClick={() => onChange(!checked)}
      >
        {checked && (
          <svg
            className="w-2.5 h-2.5 text-gray-900"
            fill="none"
            viewBox="0 0 10 10"
            style={{
              animation:
                "checkPop 0.35s cubic-bezier(0.175,0.885,0.32,1.275) both",
            }}
          >
            <path
              d="M1.5 5l2.5 2.5 4.5-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-xs text-white/75 group-hover:text-white transition-colors duration-200">
        {label}
      </span>
    </label>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const defaultServices = ["Genetic Tests", "Blood Tests", "Urine Tests", "COVID-19 PCR", "Allergy Tests", "Hormone Tests"];
const defaultLocations = ["California", "New York", "Texas", "Florida", "Illinois", "Washington"];
const defaultTimes = ["Select Time", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
const defaultSpecialLabels = [
  { _key: "1", label: "Open before 8:00 am" },
  { _key: "2", label: "Wheelchair Accessible" },
  { _key: "3", label: "Open Saturdays" },
  { _key: "4", label: "Serving Customers with Autism" },
  { _key: "5", label: "24 Hour Holter Monitoring" },
];
const defaultFeatures = [
  { _key: "1", title: "Patient Centered Care", description: "We work day and night to solve the problems that can help them move forward for those who is seeking answers!" },
];

function getImgSrc(image?: { asset: { _ref: string } }, imageUrl?: string): string | null {
  if (image?.asset) return urlFor(image).width(800).height(600).url();
  return imageUrl || null;
}

type ContactProps = {
  data?: ContactSection | null;
};

export default function LabAppointment({ data }: ContactProps) {
  const d = data;
  const { ref, inView } = useInView(0.08);
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const services = d?.serviceOptions?.length ? d.serviceOptions : defaultServices;
  const locations = d?.locationOptions?.length ? d.locationOptions : defaultLocations;
  const times = d?.timeOptions?.length ? d.timeOptions : defaultTimes;
  const specialLabels = d?.specialHoursLabels?.length ? d.specialHoursLabels : defaultSpecialLabels;
  const badge = d?.badge || "Your Health And Safety Is Important To Us";
  const heading = d?.heading || "Find Your Nearest Lab And Schedule An Appointment";
  const buttonText = d?.buttonText || "Make An Appointment";
  const infoText = d?.infoText || "To provide a comfortable and safe environment for our patients and employees, please avoid wearing scented perfumes or creams when visiting our Patient Service Centres.";
  const features = d?.features?.length ? d.features : defaultFeatures;
  const panelImg = getImgSrc(d?.image, d?.imageUrl);

  const [checkedSpecials, setCheckedSpecials] = useState<Record<string, boolean>>({});

  const [form, setForm] = useState<FormState>({
    service: services[0],
    location: locations[0],
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    specialHours: {
      beforeEight: false,
      wheelchair: false,
      openSaturday: false,
      autism: false,
      holter: false,
    },
  });

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitState("success");
    setTimeout(() => setSubmitState("idle"), 3500);
  };

  return (
    <>
      <style>{`
        @keyframes cardReveal {
          from { opacity: 0; transform: scale(0.96) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes imageZoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }
        @keyframes checkPop {
          0%  { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.25); }
          100%{ transform: scale(1);   opacity: 1; }
        }
        @keyframes pulseRing {
          0%  { box-shadow: 0 0 0 0   rgba(45,184,122,0.5); }
          70% { box-shadow: 0 0 0 10px rgba(45,184,122,0); }
          100%{ box-shadow: 0 0 0 0   rgba(45,184,122,0); }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-7px); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .card-anim    { animation: cardReveal    0.75s cubic-bezier(0.16,1,0.3,1) both; }
        .left-anim    { animation: slideFromLeft  0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .right-anim   { animation: slideFromRight 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .badge-anim   { animation: fadeUp 0.6s ease 0.25s both; }
        .title-anim   { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
        .info-anim    { animation: fadeUp 0.7s ease 0.5s both; }
        .img-anim     { animation: imageZoom 1.8s cubic-bezier(0.16,1,0.3,1) both; }
        .float-icon   { animation: floatIcon 3s ease-in-out infinite; }
        .btn-pulse    { animation: pulseRing 2.2s ease-out infinite; }
        .spin         { animation: spin 0.8s linear infinite; }

        .shimmer-word {
          background: linear-gradient(90deg, #ffffff 0%, #4ade80 40%, #ffffff 60%, #86efac 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerText 2.8s linear infinite;
        }
      `}</style>

      <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-white">
        <div
          ref={ref}
          className={`w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl ${inView ? "card-anim" : "opacity-0"}`}
        >
          <div className="flex flex-col lg:flex-row">
            {/* ── LEFT: Form ──────────────────────────────── */}
            <div
              className={`flex-1 p-6 sm:p-10 ${inView ? "left-anim" : "opacity-0"}`}
              style={{
                background:
                  "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              }}
            >
              <p
                className={`text-green-400 text-sm font-semibold tracking-wide mb-2 ${inView ? "badge-anim" : "opacity-0"}`}
              >
                {badge}
              </p>

              <h2
                className={`text-2xl sm:text-3xl font-bold leading-snug mb-8 ${inView ? "title-anim" : "opacity-0"}`}
              >
                <span className="text-white">{heading.split(" ").slice(0, Math.ceil(heading.split(" ").length / 2)).join(" ")}</span>
                <br />
                <span className={inView ? "shimmer-word" : "text-white"}>
                  {heading.split(" ").slice(Math.ceil(heading.split(" ").length / 2)).join(" ")}
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField
                    label="Select Services"
                    value={form.service}
                    onChange={(v) => setField("service", v)}
                    options={services}
                    delay={420}
                    inView={inView}
                  />
                  <SelectField
                    label="Location"
                    value={form.location}
                    onChange={(v) => setField("location", v)}
                    options={locations}
                    delay={510}
                    inView={inView}
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Name"
                    required
                    placeholder="Name"
                    value={form.name}
                    onChange={(v) => setField("name", v)}
                    delay={590}
                    inView={inView}
                  />
                  <InputField
                    label="Email"
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setField("email", v)}
                    delay={650}
                    inView={inView}
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <InputField
                    label="Phone"
                    required
                    placeholder="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setField("phone", v)}
                    delay={710}
                    inView={inView}
                  />
                  <InputField
                    label="Date"
                    required
                    placeholder="Select Date"
                    type="date"
                    value={form.date}
                    onChange={(v) => setField("date", v)}
                    icon={<Calendar size={14} />}
                    delay={770}
                    inView={inView}
                  />

                  {/* Time */}
                  <div
                    className="flex flex-col gap-1.5"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(22px)",
                      transition: `opacity 0.65s ease 830ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 830ms`,
                    }}
                  >
                    <label className="text-sm font-semibold text-white/90">
                      Time <span className="text-green-300">(required)</span>
                    </label>
                    <div className="relative group">
                      <Clock
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 transition-colors duration-200 group-focus-within:text-green-400/80"
                      />
                      <select
                        value={form.time}
                        onChange={(e) => setField("time", e.target.value)}
                        className="w-full appearance-none bg-white/10 border border-white/20 text-white rounded-lg pl-9 pr-8 py-3 text-sm
                          focus:outline-none focus:border-green-400/60 focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(45,184,122,0.15)]
                          hover:border-white/40 hover:bg-white/13 transition-all duration-200 cursor-pointer"
                      >
                        {times.map((t) => (
                          <option key={t} value={t} className="bg-slate-900">
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Hours */}
                <div
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(16px)",
                    transition:
                      "opacity 0.65s ease 880ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 880ms",
                  }}
                >
                  <p className="text-sm font-semibold text-white/90 mb-3">
                    Services you want to use (optional)
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                    {specialLabels.map((item, i) => (
                      <CheckboxItem
                        key={item._key}
                        label={item.label}
                        checked={!!checkedSpecials[item._key]}
                        onChange={(v) => setCheckedSpecials((prev) => ({ ...prev, [item._key]: v }))}
                        delay={930 + i * 40}
                        inView={inView}
                      />
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <div
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(16px)",
                    transition:
                      "opacity 0.65s ease 1150ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 1150ms",
                  }}
                >
                  <button
                    type="submit"
                    disabled={submitState !== "idle"}
                    className={`relative w-full sm:w-auto px-10 py-3.5 rounded-lg font-bold text-sm text-white
                      overflow-hidden transition-all duration-300 disabled:cursor-not-allowed
                      ${
                        submitState === "idle"
                          ? "hover:brightness-115 hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 btn-pulse"
                          : submitState === "success"
                            ? "bg-emerald-500 scale-[1.02]"
                            : "opacity-80"
                      }`}
                    style={
                      submitState !== "success"
                        ? {
                            background:
                              "linear-gradient(135deg, #2db87a 0%, #16a34a 100%)",
                          }
                        : {}
                    }
                  >
                    {/* Hover shimmer sweep */}
                    <span
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmerText 1.5s linear infinite",
                      }}
                    />

                    <span className="relative flex items-center justify-center gap-2">
                      {submitState === "idle" && buttonText}
                      {submitState === "loading" && (
                        <>
                          <Loader2 size={16} className="spin" />
                          Booking your slot…
                        </>
                      )}
                      {submitState === "success" && (
                        <>
                          <CheckCircle2
                            size={16}
                            style={{
                              animation:
                                "checkPop 0.4s cubic-bezier(0.175,0.885,0.32,1.275) both",
                            }}
                          />
                          Appointment Booked!
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* ── RIGHT: Image + Info ──────────────────────── */}
            <div
              className={`lg:w-105 xl:w-120 flex flex-col ${inView ? "right-anim" : "opacity-0"}`}
              style={{
                background:
                  "linear-gradient(160deg, #1b3a7a 0%, #1e3a5f 60%, #0f172a 100%)",
              }}
            >
              {/* Image with zoom-out reveal */}
              <div className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden">
                {panelImg ? (
                  <img
                    src={panelImg}
                    alt=""
                    className={`w-full h-full object-cover ${inView ? "img-anim" : ""}`}
                  />
                ) : (
                  <div className={`w-full h-full bg-blue-900/50 ${inView ? "img-anim" : ""}`} />
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 55%, rgba(15,23,42,0.6) 100%)",
                  }}
                />
              </div>

              {/* Info */}
              <div
                className={`flex-1 p-6 sm:p-8 space-y-6 ${inView ? "info-anim" : "opacity-0"}`}
              >
                <p className="text-white/75 text-sm leading-relaxed">
                  {infoText}
                </p>

                {features.map((feat) => (
                  <div key={feat._key} className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/6 cursor-default group">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 float-icon
                        transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(45,184,122,0.35)]"
                      style={{ background: "rgba(255,255,255,0.12)" }}
                    >
                      <Pill size={22} className="text-green-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1 transition-colors duration-200 group-hover:text-green-300">
                        {feat.title}
                      </h4>
                      <p className="text-white/65 text-sm leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
