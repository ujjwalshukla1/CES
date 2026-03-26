"use client";

import { useState, useEffect, useCallback } from "react";
import { urlFor } from "@/lib/sanity/image";
import type { HeroSection, HeroSlide } from "@/lib/sanity/queries";
import { heroCss } from "../hero/heroStyles";
import HeroParticles from "../hero/HeroParticles";
import HeroContent from "../hero/HeroContent";
import HeroCarousel from "../hero/HeroCarousel";
import ClientsMarquee from "../hero/ClientsMarquee";

function imgSrc(image?: { asset: { _ref: string } }, imageUrl?: string, w?: number, h?: number): string | null {
  if (image?.asset) { let b = urlFor(image); if (w) b = b.width(w); if (h) b = b.height(h); return b.url(); }
  return imageUrl || null;
}

const fallbackSlides: HeroSlide[] = [
  { _key: "1", heading: "PROVIDING POWER SO YOU CAN GO HIGHER", description: "Rental of machines for earthworks, construction and industry.", ctaText: "Discover Our Vehicle", ctaHref: "/services" },
  { _key: "2", heading: "ENGINEERING EXCELLENCE FOR EVERY PROJECT", description: "Advanced equipment and expert solutions for large-scale operations.", ctaText: "View Projects", ctaHref: "/projects" },
  { _key: "3", heading: "TRUSTED BY INDUSTRY LEADERS WORLDWIDE", description: "Decades of experience delivering reliable results on time.", ctaText: "Learn More", ctaHref: "/about" },
];

type HeroProps = { data?: HeroSection | null };

export default function Hero({ data }: HeroProps) {
  const slides = data?.slides?.length ? data.slides : fallbackSlides;
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = useCallback((index: number) => {
    if (index === current || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => { setCurrent(index); setTimeout(() => setIsTransitioning(false), 600); }, 400);
  }, [current, isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [current, slides.length, goTo]);

  const slide = slides[current];
  const bgSrc = imgSrc(slide.image, slide.imageUrl, 1920, 1080);

  return (
    <>
      <style>{heroCss}</style>
      <section className="relative w-full bg-gray-950 overflow-hidden -mt-24">
        {bgSrc && (
          <div className={`absolute inset-0 transition-opacity duration-700 ${isTransitioning ? "opacity-0" : "opacity-100"}`} style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <img key={current} src={bgSrc} alt="" className="w-full h-full object-cover hero-ken-burns" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/30" />
        <HeroParticles />
        <div className="absolute top-24 right-0 w-20 h-20 bg-green-600 clip-corner-tr animate-[heroFadeIn_0.7s_ease_0.3s_both]" />
        <div className="absolute bottom-32 left-0 w-16 h-16 bg-green-600 clip-corner-bl animate-[heroFadeIn_0.7s_ease_0.5s_both]" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-12 min-h-[85vh] flex flex-col justify-between">
          <HeroContent slide={slide} isTransitioning={isTransitioning} />
          <HeroCarousel slides={slides} current={current} goTo={goTo} />
        </div>

        <ClientsMarquee trustedText={data?.trustedByText || "Trusted by industry-leading organizations including"} logos={data?.clientLogos} />
      </section>
    </>
  );
}
