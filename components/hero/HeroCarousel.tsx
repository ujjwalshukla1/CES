"use client";

import { urlFor } from "@/lib/sanity/image";
import type { HeroSlide } from "@/lib/sanity/queries";

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

export default function HeroCarousel({
  slides,
  current,
  goTo,
}: {
  slides: HeroSlide[];
  current: number;
  goTo: (i: number) => void;
}) {
  const hasImages = slides.some((s) => imgSrc(s.image, s.imageUrl));

  return (
    <div className="mt-12 hero-fade-3">
      {hasImages ? (
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
              <span className="block text-center text-white/50 text-xs">
                {slides.length}
              </span>
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
      ) : (
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
  );
}
