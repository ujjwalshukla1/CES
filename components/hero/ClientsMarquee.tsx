"use client";

import { urlFor } from "@/lib/sanity/image";
import type { ClientLogo } from "@/lib/sanity/queries";

function imgSrc(
  image?: { asset: { _ref: string } },
  imageUrl?: string,
  h?: number
): string | null {
  if (image?.asset) return urlFor(image).height(h || 64).url();
  return imageUrl || null;
}

const fallbackNames = ["MUSIC", "Kimberly", "GNOSIS", "BINANCE", "Spanair"];

export default function ClientsMarquee({
  trustedText,
  logos,
}: {
  trustedText: string;
  logos?: ClientLogo[];
}) {
  const items =
    logos && logos.length > 0
      ? logos
      : fallbackNames.map((name, i) => ({ _key: String(i), name }));

  return (
    <div className="relative z-10 hero-fade-4">
      <div className="py-6 flex items-center gap-6 max-w-7xl mx-auto px-8">
        <span className="shrink-0 text-green-400/80 text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
          {trustedText}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-green-400/30 to-white/20" />
      </div>

      <div className="relative overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

        <div
          className="inline-flex animate-marquee"
          style={{ width: "max-content" }}
        >
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex shrink-0 items-center gap-16 px-8"
            >
              {items.map(
                (logo: ClientLogo | { _key: string; name: string }) => {
                  const l = logo as ClientLogo;
                  const src =
                    l.image || l.imageUrl
                      ? imgSrc(l.image, l.imageUrl, 64)
                      : null;
                  return (
                    <div
                      key={`${set}-${logo._key}`}
                      className="shrink-0 group"
                    >
                      {src ? (
                        <img
                          src={src}
                          alt={l.name || "Client"}
                          className="h-8 lg:h-10 object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <span className="text-white/40 group-hover:text-white text-lg font-bold tracking-[0.2em] uppercase transition-all duration-500 group-hover:scale-105 inline-block">
                          {"name" in logo ? logo.name : ""}
                        </span>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
