"use client";

import { useEffect, useRef, useState } from "react";
import FloatingHex from "../ui/FloatingHex";
import type { AboutSection } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

/* Hex */
.hex-clip {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

/* Animations */
.anim-fade-up {
  opacity: 0;
  transform: translate3d(0, 40px, 0) scale(0.96);
  transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
              transform 0.7s cubic-bezier(0.22,1,0.36,1);
}
.anim-fade-left {
  opacity: 0;
  transform: translate3d(-50px,0,0) scale(0.96);
  transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
              transform 0.75s cubic-bezier(0.22,1,0.36,1);
}
.anim-fade-up.in-view,
.anim-fade-left.in-view {
  opacity: 1;
  transform: translate3d(0,0,0) scale(1);
}

/* Delay */
.sd-1 { transition-delay: 0.1s; }
.sd-2 { transition-delay: 0.2s; }
.sd-3 { transition-delay: 0.3s; }
.sd-4 { transition-delay: 0.4s; }
.sd-5 { transition-delay: 0.5s; }

/* Floating */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.float { animation: float 6s ease-in-out infinite; }
.float-delay { animation: float 6s ease-in-out infinite; animation-delay: 2s; }

/* Hover effects */
.doctor-wrap {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.doctor-wrap:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

.exp-card {
  transition: all 0.3s ease;
}
.exp-card:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
}

.btn-cta {
  transition: all 0.3s ease;
}
.btn-cta:hover {
  background: linear-gradient(135deg, #2db87a, #22a36a);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 14px 40px rgba(45,184,122,0.45);
}

/* Layout positioning (same as your original) */
.doctor-wrap { position:absolute; top:0; left:52px; width:320px; height:390px; z-index:4; overflow:hidden; background:linear-gradient(160deg,#cce9d9,#a5d4bc);}
.hex-blue-wrap { position:absolute; bottom:42px; left:0; }
.hex-green-wrap { position:absolute; top:22px; right:28px; }
.exp-card-wrap { position:absolute; bottom:18px; right:0; }

@media (max-width:768px){
  .doctor-wrap { width:210px; height:260px; left:50%; transform:translateX(-50%); }
}
`;

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

type AboutProps = {
  data?: AboutSection | null;
};

export default function About({ data }: AboutProps) {
  const d = data ?? fallback;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.15 },
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
      <style>{css}</style>

      <section
        ref={ref}
        className="py-16 px-4 bg-white relative overflow-hidden"
      >
        {/* Floating bg */}
        <div style={{ position: "absolute", top: offsetY }}>
          <FloatingHex size={200} color="#eee" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          {/* LEFT */}
          <div
            className={`relative w-full md:w-100 h-100 anim-fade-left ${iv}`}
          >
            <div className="hex-blue-wrap float">
              <FloatingHex size={120} color="#1b3a7a" className="slow" />
            </div>

            <div className="hex-green-wrap float-delay">
              <FloatingHex size={80} color="#2db87a" />
            </div>

            <div className="doctor-wrap hex-clip">
              {d.image?.asset ? (
                <img
                  src={urlFor(d.image).width(640).height(780).url()}
                  alt={d.heading || "About"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : null}
            </div>

            <div className="float exp-card-wrap z-50">
              <div className="exp-card bg-white p-4 rounded-xl shadow-lg text-center">
                <p className="text-4xl font-bold text-green-600">{d.yearsExperience ?? fallback.yearsExperience}</p>
                <p className="text-xs text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 text-center md:text-left">
            <span
              className={`anim-fade-up ${iv} sd-1 text-xs font-semibold text-green-600 bg-green-100 px-4 py-1.5 rounded-full`}
            >
              {d.label || fallback.label}
            </span>

            <h2
              className={`anim-fade-up ${iv} sd-2 text-3xl font-bold mt-4 text-gray-900`}
            >
              {d.heading || fallback.heading}
            </h2>

            <p className={`anim-fade-up ${iv} sd-3 text-gray-500 mt-4`}>
              {d.description || fallback.description}
            </p>

            <ul className={`anim-fade-up ${iv} sd-4 mt-6 space-y-3 text-gray-800`}>
              {(d.features?.length ? d.features : fallback.features!).map((f: { _key: string; text: string }) => (
                <li key={f._key}>✔ {f.text}</li>
              ))}
            </ul>

            <button
              className={`anim-fade-up ${iv} sd-5 btn-cta mt-6 bg-green-600 text-white px-6 py-3 rounded-full`}
            >
              {d.ctaText || fallback.ctaText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
