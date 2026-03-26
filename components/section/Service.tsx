"use client";

import { useEffect, useRef, useState } from "react";
import type { ServicesSection, ServiceItem } from "@/lib/sanity/queries";
import { fallback, fallbackServices } from "../service/serviceDefaults";
import ServiceBackground from "../service/ServiceBackground";
import ServiceCard from "../service/ServiceCard";

type ServiceProps = { data?: ServicesSection | null };

export default function Service({ data }: ServiceProps) {
  const d = data ?? fallback;
  const services = d.services?.length ? d.services : fallbackServices;
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <ServiceBackground />

      <div
        className="relative z-10 text-center mb-16 md:mb-20 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
      >
        <span className="text-xs font-semibold text-green-600 bg-green-100 px-4 py-1.5 rounded-full">
          {d.label || fallback.label}
        </span>
        <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          {d.heading || fallback.heading}
        </h2>
      </div>

      <div className="relative z-10 flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
        {services.map((service: ServiceItem, i: number) => (
          <ServiceCard key={service._key} service={service} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
