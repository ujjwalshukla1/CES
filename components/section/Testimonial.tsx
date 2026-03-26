import type { TestimonialSection } from "@/lib/sanity/queries";
import { fallbackItems } from "../testimonial/testimonialDefaults";
import TestimonialCard from "../testimonial/TestimonialCard";

type TestimonialProps = { data?: TestimonialSection | null };

export default function TestimonialSectionComponent({ data }: TestimonialProps) {
  const label = data?.label || "Find the Right Test for Your Needs!";
  const heading = data?.heading || "Providing the Diverse Needs of Your Patient Community";
  const items = data?.items?.length ? data.items : fallbackItems;

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center px-4 sm:px-6 md:px-0">
        <p className="text-green-600 font-medium mb-2 sm:mb-3 text-[clamp(0.75rem,1vw,0.95rem)]">
          {label}
        </p>
        <h2 className="font-bold text-blue-900 mx-auto max-w-[90%] sm:max-w-2xl md:max-w-3xl leading-[1.2] sm:leading-tight mb-8 sm:mb-10 md:mb-12 text-[clamp(1.5rem,3vw,2.5rem)]">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <TestimonialCard key={item._key} {...item} />
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-2">
        <div className="w-6 h-2 rounded-full bg-blue-900" />
        <div className="w-6 h-2 rounded-full bg-green-400" />
      </div>
    </section>
  );
}
