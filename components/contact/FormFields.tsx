"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function SelectField({
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

export function InputField({
  label,
  required,
  placeholder,
  type = "text",
  value,
  onChange,
  icon,
  delay = 0,
  inView,
  error,
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
  error?: string;
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
          className={`w-full bg-white/10 border text-white placeholder-white/40 rounded-lg py-3 text-sm
            focus:outline-none focus:border-green-400/60 focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(45,184,122,0.15)]
            hover:border-white/40 hover:bg-white/13 transition-all duration-200 ${icon ? "pl-9 pr-4" : "px-4"} ${error ? "border-red-500" : "border-white/20"}`}
        />
      </div>
      {error && <span className="text-red-400 text-xs mt-0.5">{error}</span>}
    </div>
  );
}

export function CheckboxItem({
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
