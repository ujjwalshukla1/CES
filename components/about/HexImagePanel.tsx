import FloatingHex from "../ui/FloatingHex";
import { urlFor } from "@/lib/sanity/image";
import type { AboutSection } from "@/lib/sanity/queries";

export default function HexImagePanel({
  image,
  heading,
  yearsExperience,
  iv,
  offsetY,
}: {
  image?: AboutSection["image"];
  heading?: string;
  yearsExperience: number;
  iv: string;
  offsetY: number;
}) {
  return (
    <>
      <div style={{ position: "absolute", top: offsetY }}>
        <FloatingHex size={200} color="#eee" />
      </div>
      <div className={`relative w-full md:w-100 h-100 anim-fade-left ${iv}`}>
        <div className="hex-blue-wrap float">
          <FloatingHex size={120} color="#1b3a7a" className="slow" />
        </div>
        <div className="hex-green-wrap float-delay">
          <FloatingHex size={80} color="#2db87a" />
        </div>
        <div className="doctor-wrap hex-clip">
          {image?.asset && (
            <img
              src={urlFor(image).width(640).height(780).url()}
              alt={heading || "About"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>
        <div className="float exp-card-wrap z-50">
          <div className="exp-card bg-white p-4 rounded-xl shadow-lg text-center">
            <p className="text-4xl font-bold text-green-600">{yearsExperience}</p>
            <p className="text-xs text-gray-500">Years Experience</p>
          </div>
        </div>
      </div>
    </>
  );
}
