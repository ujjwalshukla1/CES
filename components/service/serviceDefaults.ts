import type { ServiceItem } from "@/lib/sanity/queries";

export const fallbackServices: ServiceItem[] = [
  { _key: "1", title: "Condensate Treatment", description: "Condensate treatment is a crucial aspect of industrial process, particularly in systems.", icon: "beaker" },
  { _key: "2", title: "Potable Water and Waste", description: "Potable water treatment processes remove impurities, contaminants, and pathogens.", icon: "network" },
  { _key: "3", title: "Cooling Water Treatment", description: "After treatment, potable water is distribute through well maintained systems of pipes.", icon: "factory" },
];

export const fallback = {
  label: "OUR SERVICES",
  heading: "We Provide Reliable Services",
  services: fallbackServices,
};
