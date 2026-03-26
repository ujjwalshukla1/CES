import type { Section } from "@/lib/sanity/queries";
import Hero from "./section/Hero";
import About from "./section/About";
import Service from "./section/Service";
import Testimonial from "./section/Testimonial";
import Contact from "./section/Contact";

type Props = {
  sections?: Section[];
};

export default function SectionRenderer({ sections }: Props) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case "heroSection":
            return <Hero key={section._key} data={section} />;
          case "aboutSection":
            return <About key={section._key} data={section} />;
          case "servicesSection":
            return <Service key={section._key} data={section} />;
          case "testimonialSection":
            return <Testimonial key={section._key} data={section} />;
          case "contactSection":
            return <Contact key={section._key} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
