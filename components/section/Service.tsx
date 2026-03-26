"use client";

import React, { useEffect, useRef, useState } from "react";
import { Beaker, Network, Factory } from "lucide-react";
import Link from "next/link";
import type { ServicesSection, ServiceItem } from "@/lib/sanity/queries";

const iconMap: Record<string, React.ReactNode> = {
  beaker: <Beaker className="w-6 h-6" />,
  network: <Network className="w-6 h-6" />,
  factory: <Factory className="w-6 h-6" />,
};

const fallbackServices: ServiceItem[] = [
  {
    _key: "1",
    title: "Condensate Treatment",
    description:
      "Condensate treatment is a crucial aspect of industrial process, particularly in systems.",
    icon: "beaker",
  },
  {
    _key: "2",
    title: "Potable Water and Waste",
    description:
      "Potable water treatment processes remove impurities, contaminants, and pathogens.",
    icon: "network",
  },
  {
    _key: "3",
    title: "Cooling Water Treatment",
    description:
      "After treatment, potable water is distribute through well maintained systems of pipes.",
    icon: "factory",
  },
];

const fallback = {
  label: "OUR SERVICES",
  heading: "We Provide Reliable Services",
  services: fallbackServices,
};

// Floating background icons for lab/testing theme
const bgIcons = [
  // Molecule
  <svg key="mol" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="20" cy="20" r="6" /><circle cx="40" cy="15" r="4" /><circle cx="35" cy="40" r="5" />
    <line x1="25" y1="22" x2="37" y2="17" /><line x1="22" y1="25" x2="32" y2="37" />
  </svg>,
  // Flask
  <svg key="flask" viewBox="0 0 50 70" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M18 5 L18 25 L5 55 Q3 62 10 62 L40 62 Q47 62 45 55 L32 25 L32 5" />
    <line x1="14" y1="5" x2="36" y2="5" /><path d="M12 48 Q25 42 38 48" strokeWidth="0.8" />
  </svg>,
  // DNA
  <svg key="dna" viewBox="0 0 30 70" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M5 5 Q20 15 5 25 Q-10 35 5 45 Q20 55 5 65" />
    <path d="M25 5 Q10 15 25 25 Q40 35 25 45 Q10 55 25 65" />
    <line x1="8" y1="15" x2="22" y2="15" strokeWidth="0.7" />
    <line x1="8" y1="35" x2="22" y2="35" strokeWidth="0.7" />
    <line x1="8" y1="55" x2="22" y2="55" strokeWidth="0.7" />
  </svg>,
  // Atom
  <svg key="atom" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="0.8">
    <circle cx="30" cy="30" r="3" fill="currentColor" />
    <ellipse cx="30" cy="30" rx="22" ry="9" />
    <ellipse cx="30" cy="30" rx="22" ry="9" transform="rotate(60 30 30)" />
    <ellipse cx="30" cy="30" rx="22" ry="9" transform="rotate(120 30 30)" />
  </svg>,
  // Test tube
  <svg key="tube" viewBox="0 0 20 55" fill="none" stroke="currentColor" strokeWidth="1.2">
    <line x1="5" y1="5" x2="5" y2="40" /><line x1="15" y1="5" x2="15" y2="40" />
    <path d="M5 40 Q5 50 10 50 Q15 50 15 40" /><line x1="2" y1="5" x2="18" y2="5" />
  </svg>,
  // Hexagon
  <svg key="hex" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="0.8">
    <polygon points="20,4 35,12 35,28 20,36 5,28 5,12" />
    <polygon points="20,10 29,15 29,25 20,30 11,25 11,15" />
  </svg>,
  // Magnifying glass
  <svg key="mag" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="20" cy="20" r="14" /><line x1="30" y1="30" x2="44" y2="44" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Clipboard
  <svg key="clip" viewBox="0 0 40 55" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="3" y="8" width="34" height="44" rx="2" /><rect x="12" y="3" width="16" height="10" rx="2" />
    <polyline points="10,24 14,28 22,20" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="26" y1="24" x2="32" y2="24" /><line x1="10" y1="36" x2="32" y2="36" strokeWidth="0.7" />
  </svg>,
];

const floatPositions = [
  { top: "5%", left: "3%", size: "w-12 h-12", anim: "animate-float-1" },
  { top: "70%", left: "8%", size: "w-10 h-14", anim: "animate-float-2" },
  { top: "15%", left: "88%", size: "w-8 h-16", anim: "animate-float-3" },
  { top: "60%", left: "92%", size: "w-12 h-12", anim: "animate-float-4" },
  { top: "85%", left: "40%", size: "w-6 h-12", anim: "animate-float-5" },
  { top: "10%", left: "50%", size: "w-10 h-10", anim: "animate-float-6" },
  { top: "45%", left: "2%", size: "w-10 h-10", anim: "animate-float-7" },
  { top: "40%", left: "95%", size: "w-10 h-14", anim: "animate-float-8" },
];

type ServiceProps = {
  data?: ServicesSection | null;
};

function Service({ data }: ServiceProps) {
  const d = data ?? fallback;
  const services = d.services?.length ? d.services : fallbackServices;

  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Floating lab icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatPositions.map((pos, i) => (
          <div
            key={i}
            className={`absolute text-green-600/[0.06] ${pos.size} ${pos.anim}`}
            style={{ top: pos.top, left: pos.left }}
          >
            {bgIcons[i % bgIcons.length]}
          </div>
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header */}
      <div
        className="relative z-10 text-center mb-16 md:mb-20 transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <span className="text-xs font-semibold text-green-600 bg-green-100 px-4 py-1.5 rounded-full">
          {d.label || fallback.label}
        </span>

        <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          {d.heading || fallback.heading}
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
        {services.map((service: ServiceItem, index: number) => (
          <div
            key={service._key}
            className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 p-6 pt-10 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-xl hover:bg-green-600 hover:border-green-500"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(40px)",
              transition: `opacity 0.6s ease ${200 + index * 150}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${200 + index * 150}ms, background-color 0.3s, border-color 0.3s, box-shadow 0.3s`,
            }}
          >
            {/* Icon */}
            <div className="absolute -top-6 left-6 w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-green-600">
              {iconMap[service.icon] || <Beaker className="w-6 h-6" />}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
              {service.title}
            </h3>

            <p className="text-sm text-gray-500 mt-3 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
              {service.description}
            </p>

            <Link
              href={service.href || "#"}
              className="mt-4 text-sm font-medium flex items-center gap-1 text-gray-900 group-hover:text-white transition-colors duration-300"
            >
              Discover More
              <span className="text-lg ml-1 transition-transform duration-300 group-hover:translate-x-1">›</span>
            </Link>

            {/* Corner glow on hover */}
            <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-green-400/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-green-400/10" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
