"use client";

import { useState, useEffect, useCallback } from "react";
import { urlFor } from "@/lib/sanity/image";
import type { HeroSection, HeroSlide, ClientLogo } from "@/lib/sanity/queries";

function imgSrc(
  image?: { asset: { _ref: string } },
  imageUrl?: string,
  w?: number,
  h?: number
): string | null {
  if (image?.asset) {
    let b = urlFor(image);
    if (w) b = b.width(w);
    if (h) b = b.height(h);
    return b.url();
  }
  return imageUrl || null;
}

const fallbackSlides: HeroSlide[] = [
  {
    _key: "1",
    heading: "PROVIDING POWER SO YOU CAN GO HIGHER",
    description: "Rental of machines for earthworks, construction and industry.",
    ctaText: "Discover Our Vehicle",
    ctaHref: "/services",
  },
  {
    _key: "2",
    heading: "ENGINEERING EXCELLENCE FOR EVERY PROJECT",
    description: "Advanced equipment and expert solutions for large-scale operations.",
    ctaText: "View Projects",
    ctaHref: "/projects",
  },
  {
    _key: "3",
    heading: "TRUSTED BY INDUSTRY LEADERS WORLDWIDE",
    description: "Decades of experience delivering reliable results on time.",
    ctaText: "Learn More",
    ctaHref: "/about",
  },
];

type HeroProps = {
  data?: HeroSection | null;
};

export default function Hero({ data }: HeroProps) {
  const slides = data?.slides?.length ? data.slides : fallbackSlides;
  const trustedText =
    data?.trustedByText || "Trusted by industry-leading organizations including";
  const logos = data?.clientLogos;

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 600);
      }, 400);
    },
    [current, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, slides.length, goTo]);

  const slide = slides[current];
  const bgSrc = imgSrc(slide.image, slide.imageUrl, 1920, 1080);
  const hasImages = slides.some((s) => imgSrc(s.image, s.imageUrl));

  return (
    <section className="relative w-full bg-gray-950 overflow-hidden -mt-24">
      {/* Background image */}
      {bgSrc && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <img src={bgSrc} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/30" />

      {/* Decorative corner accents */}
      <div className="absolute top-24 right-0 w-20 h-20 bg-red-600 clip-corner-tr" />
      <div className="absolute bottom-32 left-0 w-16 h-16 bg-red-600 clip-corner-bl" />
      <div className="absolute top-1/2 right-8 w-10 h-10 bg-red-600/60 rotate-45 translate-y-12" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-12 min-h-[85vh] flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <h1
              className={`text-5xl lg:text-7xl font-black text-white uppercase leading-[1.05] tracking-tight transition-all duration-600 ${
                isTransitioning
                  ? "opacity-0 translate-y-6"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {slide.heading}
            </h1>
          </div>

          <div
            className={`lg:max-w-xs lg:pt-4 transition-all duration-600 delay-100 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              {slide.description}
            </p>
            {slide.ctaText && (
              <a
                href={slide.ctaHref || "#"}
                className="inline-block mt-4 text-white text-sm font-semibold border-b-2 border-red-600 pb-1 hover:border-white transition-colors duration-300"
              >
                {slide.ctaText}
              </a>
            )}
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-12">
          {hasImages && (
            <div className="relative flex gap-0 h-56 lg:h-72 rounded-sm overflow-hidden">
              {slides.map((s, i) => {
                const src = imgSrc(s.image, s.imageUrl, 800, 500);
                if (!src) return null;
                return (
                  <button
                    key={s._key}
                    onClick={() => goTo(i)}
                    className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
                      i === current ? "flex-[3]" : "flex-[0.6]"
                    }`}
                  >
                    <img
                      src={src}
                      alt={s.heading || ""}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        i === current
                          ? "brightness-100 scale-100"
                          : "brightness-50 scale-105 hover:brightness-75"
                      }`}
                    />
                    {i === current && (
                      <div className="absolute top-0 right-0 w-12 bg-red-600/90 h-full flex flex-col items-center justify-between py-4">
                        <div className="text-white text-xs font-bold">
                          <span className="block">{current + 1}</span>
                          <span className="block text-white/50">
                            {slides.length}
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          {slides.map((_, di) => (
                            <button
                              key={di}
                              onClick={(e) => {
                                e.stopPropagation();
                                goTo(di);
                              }}
                              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                                di === current
                                  ? "bg-white border-white scale-110"
                                  : "bg-transparent border-white/50 hover:border-white"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {!hasImages && (
            <div className="flex gap-3 mt-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-red-600 scale-125"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Trusted by bar */}
      <div className="relative z-10 border-t border-white/10 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <p className="text-center text-gray-400 text-sm mb-5">
            {trustedText}
          </p>
          {logos && logos.length > 0 ? (
            <div className="flex items-center justify-center gap-10 flex-wrap opacity-60">
              {logos.map((logo: ClientLogo) => {
                const logoSrc = imgSrc(logo.image, logo.imageUrl, undefined, 32);
                return logoSrc ? (
                  <img
                    key={logo._key}
                    src={logoSrc}
                    alt={logo.name || "Client"}
                    className="h-6 lg:h-8 object-contain grayscale brightness-200"
                  />
                ) : (
                  <span
                    key={logo._key}
                    className="text-white text-sm font-semibold tracking-wider uppercase"
                  >
                    {logo.name}
                  </span>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-10 flex-wrap opacity-50">
              {["MUSIC", "Kimberly", "GNOSIS", "BINANCE", "Spanair"].map(
                (name) => (
                  <span
                    key={name}
                    className="text-white text-sm font-bold tracking-wider"
                  >
                    {name}
                  </span>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
