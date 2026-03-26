import { Pill } from "lucide-react";

type Feature = {
  _key: string;
  title: string;
  description: string;
};

export default function InfoPanel({
  inView,
  panelImg,
  infoText,
  features,
}: {
  inView: boolean;
  panelImg: string | null;
  infoText: string;
  features: Feature[];
}) {
  return (
    <div
      className={`lg:w-105 xl:w-120 flex flex-col ${inView ? "right-anim" : "opacity-0"}`}
      style={{
        background:
          "linear-gradient(160deg, #1b3a7a 0%, #1e3a5f 60%, #0f172a 100%)",
      }}
    >
      <div className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden">
        {panelImg ? (
          <img
            src={panelImg}
            alt=""
            className={`w-full h-full object-cover ${inView ? "img-anim" : ""}`}
          />
        ) : (
          <div
            className={`w-full h-full bg-blue-900/50 ${inView ? "img-anim" : ""}`}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 55%, rgba(15,23,42,0.6) 100%)",
          }}
        />
      </div>

      <div
        className={`flex-1 p-6 sm:p-8 space-y-6 ${inView ? "info-anim" : "opacity-0"}`}
      >
        <p className="text-white/75 text-sm leading-relaxed">{infoText}</p>

        {features.map((feat) => (
          <div
            key={feat._key}
            className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/6 cursor-default group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 float-icon
                transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(45,184,122,0.35)]"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <Pill size={22} className="text-green-300" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1 transition-colors duration-200 group-hover:text-green-300">
                {feat.title}
              </h4>
              <p className="text-white/65 text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
