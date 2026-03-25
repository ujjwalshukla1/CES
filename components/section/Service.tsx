import React from "react";
import { Beaker, Network, Factory } from "lucide-react";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Condensate Treatment",
    description:
      "Condensate treatment is a crucial aspect of industrial process, particularly in systems.",
    icon: <Beaker className="w-6 h-6 " />,
  },
  {
    title: "Potable Water and Waste",
    description:
      "Potable water treatment processes remove impurities, contaminants, and pathogens.",
    icon: <Network className="w-6 h-6 " />,
  },
  {
    title: "Cooling Water Treatment",
    description:
      "After treatment, potable water is distribute through well maintained systems of pipes.",
    icon: <Factory className="w-6 h-6 " />,
  },
];

function Service() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-16 md:mb-30">
        <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
          OUR SERVICES
        </span>

        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          We Provide Reliable Services
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className=" group relative bg-white rounded-2xl shadow-sm p-6 pt-10 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:bg-green-600"
          >
            {/* Icon */}
            <div className="absolute -top-6 left-6 w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center shadow-md transition-colors duration-300 group-hover:bg-white group-hover:text-green-600">
              {service.icon}
            </div>

            {/* Content */}
            <h3 className=" text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
              {service.title}
            </h3>

            <p className="text-sm text-gray-500 mt-3 leading-relaxed transition-colors duration-300 group-hover:text-white">
              {service.description}
            </p>

            <Link
              href={""}
              target="blank"
              className="mt-4 text-sm font-medium flex items-center gap-1 text-gray-900  group-hover:text-white hover:cursor-pointer"
            >
              Discover More
              <span className="text-lg ml-1">›</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
