export default function AboutContent({
  iv,
  label,
  heading,
  description,
  features,
  ctaText,
}: {
  iv: string;
  label: string;
  heading: string;
  description: string;
  features: { _key: string; text: string }[];
  ctaText: string;
}) {
  return (
    <div className="flex-1 text-center md:text-left">
      <span className={`anim-fade-up ${iv} sd-1 text-xs font-semibold text-green-600 bg-green-100 px-4 py-1.5 rounded-full`}>
        {label}
      </span>
      <h2 className={`anim-fade-up ${iv} sd-2 text-3xl font-bold mt-4 text-gray-900`}>
        {heading}
      </h2>
      <p className={`anim-fade-up ${iv} sd-3 text-gray-500 mt-4`}>
        {description}
      </p>
      <ul className={`anim-fade-up ${iv} sd-4 mt-6 space-y-3 text-gray-800`}>
        {features.map((f) => (
          <li key={f._key}>✔ {f.text}</li>
        ))}
      </ul>
      <button className={`anim-fade-up ${iv} sd-5 btn-cta mt-6 bg-green-600 text-white px-6 py-3 rounded-full`}>
        {ctaText}
      </button>
    </div>
  );
}
