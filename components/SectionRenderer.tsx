import type { Section } from "@/lib/sanity/queries";
import About from "./section/About";
import Service from "./section/Service";

type Props = {
  sections?: Section[];
};

export default function SectionRenderer({ sections }: Props) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case "aboutSection":
            return <About key={section._key} data={section} />;
          case "servicesSection":
            return <Service key={section._key} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
