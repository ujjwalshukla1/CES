"use client";

import type { HeroSlide } from "@/lib/sanity/queries";

export default function HeroContent({
  slide,
  isTransitioning,
}: {
  slide: HeroSlide;
  isTransitioning: boolean;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
      <div className="flex-1 max-w-2xl hero-fade-1">
        <h1 className={`text-3xl lg:text-7xl font-black text-white uppercase leading-[1.05] tracking-tight transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}>
          {slide.heading}
        </h1>
      </div>
      <div className="lg:max-w-xs lg:pt-4 hero-fade-2">
        <div className={`transition-all duration-500 delay-100 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <p className="text-gray-300 text-sm leading-relaxed">{slide.description}</p>
          {slide.ctaText && (
            <a href={slide.ctaHref || "#"} className="inline-block mt-4 text-white text-sm font-semibold border-b-2 border-green-500 pb-1 hover:border-white transition-colors duration-300">
              {slide.ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
