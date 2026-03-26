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

const css = `
@keyframes heroKenBurns {
  0% { transform: scale(1); }
  100% { transform: scale(1.08); }
}
@keyframes heroFadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes heroPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
@keyframes heroFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
}
.hero-ken-burns { animation: heroKenBurns 8s ease-out forwards; }
.hero-fade-1 { animation: heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
.hero-fade-2 { animation: heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
.hero-fade-3 { animation: heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s both; }
.hero-fade-4 { animation: heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 1.1s both; }
.hero-particle { animation: heroPulse 3s ease-in-out infinite; }
.hero-float-1 { animation: heroFloat 6s ease-in-out infinite; }
.hero-float-2 { animation: heroFloat 8s ease-in-out infinite 1s; }
.hero-float-3 { animation: heroFloat 7s ease-in-out infinite 2s; }
`;

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
  const parallax = scrollY * 0.3;

  return (
    <>
      <style>{css}</style>
      <section className="relative w-full bg-gray-950 overflow-hidden -mt-24">
        {/* Background image with Ken Burns + parallax */}
        {bgSrc && (
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{ transform: `translateY(${parallax}px)` }}
          >
            <img
              key={current}
              src={bgSrc}
              alt=""
              className="w-full h-full object-cover hero-ken-burns"
            />
          </div>
        )}

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/30" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-2 h-2 rounded-full bg-green-400/40 hero-particle hero-float-1" style={{ top: "20%", left: "10%" }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-white/30 hero-particle hero-float-2" style={{ top: "40%", left: "80%" }} />
          <div className="absolute w-3 h-3 rounded-full bg-green-400/20 hero-particle hero-float-3" style={{ top: "70%", left: "25%" }} />
          <div className="absolute w-1 h-1 rounded-full bg-white/40 hero-particle hero-float-1" style={{ top: "30%", left: "60%" }} />
          <div className="absolute w-2 h-2 rounded-full bg-green-400/30 hero-particle hero-float-2" style={{ top: "60%", left: "45%" }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-white/20 hero-particle hero-float-3" style={{ top: "15%", left: "90%" }} />
          <div className="absolute w-2.5 h-2.5 rounded-full bg-green-400/25 hero-particle hero-float-1" style={{ top: "80%", left: "70%" }} />
          <div className="absolute w-1 h-1 rounded-full bg-white/35 hero-particle hero-float-2" style={{ top: "50%", left: "15%" }} />
        </div>

        {/* Decorative corner accents with entrance */}
        <div className={`absolute top-24 right-0 w-20 h-20 bg-green-600 clip-corner-tr transition-all duration-700 animate-[heroFadeIn_0.7s_ease_0.3s_both]`} />
        <div className={`absolute bottom-32 left-0 w-16 h-16 bg-green-600 clip-corner-bl transition-all duration-700 delay-300 animate-[heroFadeIn_0.7s_ease_0.5s_both]`} />
        <div className={`absolute top-1/2 right-8 w-10 h-10 bg-green-500/50 rotate-45 translate-y-12 transition-all duration-700 delay-500 animate-[heroFadeIn_0.7s_ease_0.7s_both]`} />

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-12 min-h-[85vh] flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
            {/* Heading with staggered entrance */}
            <div className={`flex-1 max-w-2xl hero-fade-1`}>
              <h1
                className={`text-5xl lg:text-7xl font-black text-white uppercase leading-[1.05] tracking-tight transition-all duration-500 ${
                  isTransitioning
                    ? "opacity-0 translate-y-6"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {slide.heading}
              </h1>
            </div>

            {/* Description + CTA with staggered entrance */}
            <div className={`lg:max-w-xs lg:pt-4 hero-fade-2`}>
              <div className={`transition-all duration-500 delay-100 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {slide.description}
                </p>
                {slide.ctaText && (
                  <a
                    href={slide.ctaHref || "#"}
                    className="inline-block mt-4 text-white text-sm font-semibold border-b-2 border-green-500 pb-1 hover:border-white transition-colors duration-300"
                  >
                    {slide.ctaText}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Carousel with staggered entrance */}
          <div className={`mt-12 hero-fade-3`}>
            <div className="relative h-56 lg:h-72 rounded-lg overflow-hidden">
              {slides.map((s, i) => {
                const src = imgSrc(s.image, s.imageUrl, 1200, 500);
                if (!src) return null;
                return (
                  <img
                    key={s._key}
                    src={src}
                    alt={s.heading || ""}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  />
                );
              })}

              {/* Fixed status bar */}
              <div className="absolute top-0 right-0 w-14 h-full bg-green-600/85 backdrop-blur-sm flex flex-col items-center justify-between py-5 z-10">
                <div className="text-white text-sm font-bold">
                  <span className="block text-center">{current + 1}</span>
                  <span className="block text-center text-white/50 text-xs">{slides.length}</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {slides.map((_, di) => (
                    <button
                      key={di}
                      onClick={() => goTo(di)}
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        di === current
                          ? "bg-white border-white scale-110"
                          : "bg-transparent border-white/50 hover:border-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/40 to-transparent pointer-events-none" />
            </div>

            {!slides.some((s) => imgSrc(s.image, s.imageUrl)) && (
              <div className="flex gap-3 mt-8">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-green-500 scale-125"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Clients marquee */}
        <div className="relative z-10 hero-fade-4">
          <div className="py-6 flex items-center gap-6 max-w-7xl mx-auto px-8">
            <span className="shrink-0 text-green-400/80 text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
              {trustedText}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-green-400/30 to-white/20" />
          </div>

          <div className="relative overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

            <div className="inline-flex animate-marquee" style={{ width: "max-content" }}>
              {[0, 1].map((set) => (
                <div key={set} className="flex shrink-0 items-center gap-16 px-8">
                  {(logos && logos.length > 0
                    ? logos
                    : [
                        { _key: "1", name: "MUSIC" },
                        { _key: "2", name: "Kimberly" },
                        { _key: "3", name: "GNOSIS" },
                        { _key: "4", name: "BINANCE" },
                        { _key: "5", name: "Spanair" },
                      ]
                  ).map((logo: ClientLogo | { _key: string; name: string }) => {
                    const l = logo as ClientLogo;
                    const logoSrc = l.image || l.imageUrl ? imgSrc(l.image, l.imageUrl, undefined, 64) : null;
                    return (
                      <div key={`${set}-${logo._key}`} className="shrink-0 group">
                        {logoSrc ? (
                          <img
                            src={logoSrc}
                            alt={(l.name || "Client")}
                            className="h-8 lg:h-10 object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <span className="text-white/40 group-hover:text-white text-lg font-bold tracking-[0.2em] uppercase transition-all duration-500 group-hover:scale-105 inline-block">
                            {"name" in logo ? logo.name : ""}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
