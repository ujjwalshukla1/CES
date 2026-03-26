import React from "react";
import { Beaker, Network, Factory } from "lucide-react";
import Link from "next/link";
import type { ServiceItem } from "@/lib/sanity/queries";

const iconMap: Record<string, React.ReactNode> = {
  beaker: <Beaker className="w-6 h-6" />,
  network: <Network className="w-6 h-6" />,
  factory: <Factory className="w-6 h-6" />,
};

export default function ServiceCard({
  service,
  index,
  inView,
}: {
  service: ServiceItem;
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 p-6 pt-10 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-xl hover:bg-green-600 hover:border-green-500"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${200 + index * 150}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${200 + index * 150}ms, background-color 0.3s, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      <div className="absolute -top-6 left-6 w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-green-600">
        {iconMap[service.icon] || <Beaker className="w-6 h-6" />}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
        {service.title}
      </h3>
      <p className="text-sm text-gray-500 mt-3 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
        {service.description}
      </p>
      <Link
        href={service.href || "#"}
        className="mt-4 text-sm font-medium flex items-center gap-1 text-gray-900 group-hover:text-white transition-colors duration-300"
      >
        Discover More
        <span className="text-lg ml-1 transition-transform duration-300 group-hover:translate-x-1">›</span>
      </Link>
      <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-green-400/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-green-400/10" />
    </div>
  );
}
