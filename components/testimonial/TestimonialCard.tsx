import { CheckCircle } from "lucide-react";
import type { TestimonialItem } from "@/lib/sanity/queries";

export default function TestimonialCard({ title, description, points, icon }: TestimonialItem) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md border border-gray-100 p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
      <div className="pointer-events-none absolute -top-3 sm:-top-4 left-4 sm:left-6 flex gap-2">
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full opacity-0 translate-y-3 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out" />
        <div className="w-8 h-5 sm:w-10 sm:h-6 bg-blue-900 rounded-full opacity-0 translate-y-3 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out delay-75" />
      </div>

      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <h3 className="font-bold text-blue-900 max-w-[70%] transition-colors duration-300 group-hover:text-green-600 text-[clamp(1.1rem,1.5vw,1.5rem)]">
          {title}
        </h3>
        <div className="text-3xl transition-all duration-300 group-hover:-translate-y-1 scale-90 sm:scale-100">
          {icon || "🧪"}
        </div>
      </div>

      <p className="mb-4 text-gray-500 leading-relaxed text-[clamp(0.85rem,1.2vw,1.1rem)]">{description}</p>

      <ul className="space-y-2 mb-5 sm:mb-6">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700 text-[clamp(0.8rem,1.1vw,1rem)]">
            <CheckCircle className="text-green-500 w-4 h-4 mt-1 shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 mb-4 group-hover:border-gray-300 transition" />

      <button className="w-fit mx-auto sm:mx-0 bg-green-600 text-white px-5 sm:px-6 md:px-8 py-2 rounded-lg flex items-center gap-2 hover:bg-green-500 transition text-[clamp(0.85rem,1vw,1rem)]">
        Explore More
      </button>
    </div>
  );
}
