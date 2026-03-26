"use client";

import { useEffect, useRef, useState } from "react";
import type { AboutSection } from "@/lib/sanity/queries";
import { aboutCss } from "../about/aboutStyles";
import HexImagePanel from "../about/HexImagePanel";
import AboutContent from "../about/AboutContent";

const fallback = {
  label: "LABORATORY",
  heading: "We Provide Reliable & High-Quality Service",
  description: "Welcome to the chemistry research center, a hub of discovery.",
  features: [
    { _key: "1", text: "Customizable platform" },
    { _key: "2", text: "Easy configuration" },
  ],
  ctaText: "Get in Touch",
  yearsExperience: 20,
  image: undefined as AboutSection["image"],
};

type AboutProps = { data?: AboutSection | null };

export default function About({ data }: AboutProps) {
  const d = data ?? fallback;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.05);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iv = inView ? "in-view" : "";

  return (
    <>
      <style>{aboutCss}</style>
      <section ref={ref} className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <HexImagePanel
            image={d.image}
            heading={d.heading}
            yearsExperience={d.yearsExperience ?? fallback.yearsExperience}
            iv={iv}
            offsetY={offsetY}
          />
          <AboutContent
            iv={iv}
            label={d.label || fallback.label}
            heading={d.heading || fallback.heading}
            description={d.description || fallback.description}
            features={d.features?.length ? d.features : fallback.features}
            ctaText={d.ctaText || fallback.ctaText}
          />
        </div>
      </section>
    </>
  );
}
