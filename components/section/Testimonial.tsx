// components/TestimonialSection.tsx

// Testimonial Section
import { CheckCircle } from "lucide-react";
import type { TestimonialSection, TestimonialItem } from "@/lib/sanity/queries";

const fallbackItems: TestimonialItem[] = [
  {
    _key: "1",
    title: "Food Sensitivity Testing",
    description:
      "IgG food reactions can take hours or days to develop, making it difficult to determine which food is responsible...",
    points: [
      "Stomach or abdominal pain",
      "Gastrointestinal distress",
      "Bloating / Indigestion",
    ],
    icon: "🍲",
  },
  {
    _key: "2",
    title: "Genova Diagnostics Testing",
    description:
      "Genova Diagnostics is an internationally renowned lab committed to only the highest standards...",
    points: [
      "Gastrointestinal / Immunology",
      "Nutritional / Endocrinology",
      "Genomics / Environmental",
    ],
    icon: "🧬",
  },
  {
    _key: "3",
    title: "Hormone Insights Testing",
    description:
      "Hormones are essential for the body to function optimally. Imbalances may result in many health conditions...",
    points: [
      "Cortisol and cortisone metabolites",
      "Androgens and 17-ketosteroids",
      "Progesterone metabolites",
    ],
    icon: "⚛️",
  },
];

const TestimonialCard = ({
  title,
  description,
  points,
  icon,
}: TestimonialItem) => {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-md border border-gray-100
  p-5 sm:p-6 md:p-8
  flex flex-col justify-between
  transition-all duration-300 hover:shadow-lg"
    >
      {/* Top Pills (Animated) */}
      <div className="pointer-events-none absolute -top-3 sm:-top-4 left-4 sm:left-6 flex gap-2">
        <div
          className="w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full 
      opacity-0 translate-y-3 scale-75
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
      transition-all duration-300 ease-out"
        />

        <div
          className="w-8 h-5 sm:w-10 sm:h-6 bg-blue-900 rounded-full 
      opacity-0 translate-y-3 scale-75
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
      transition-all duration-300 ease-out delay-75"
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <h3
          className="font-bold text-blue-900 max-w-[70%]
      transition-colors duration-300 group-hover:text-green-600
      text-[clamp(1.1rem,1.5vw,1.5rem)]"
        >
          {title}
        </h3>

        <div className="text-3xl transition-all duration-300 group-hover:-translate-y-1 scale-90 sm:scale-100">
          {icon || "🧪"}
        </div>
      </div>

      {/* Description */}
      <p
        className="mb-4 text-gray-500 leading-relaxed
    text-[clamp(0.85rem,1.2vw,1.1rem)]"
      >
        {description}
      </p>

      {/* Points */}
      <ul className="space-y-2 mb-5 sm:mb-6">
        {points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-gray-700
        text-[clamp(0.8rem,1.1vw,1rem)]"
          >
            <CheckCircle className="text-green-500 w-4 h-4 mt-1 shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-4 group-hover:border-gray-300 transition" />

      {/* Button */}
      <button
        className="w-fit mx-auto sm:mx-0
    bg-green-600 text-white
    px-5 sm:px-6 md:px-8 py-2
    rounded-lg flex items-center gap-2
    hover:bg-green-500 transition
    text-[clamp(0.85rem,1vw,1rem)]"
      >
        Explore More
      </button>
    </div>
  );
};

type TestimonialProps = {
  data?: TestimonialSection | null;
};

const TestimonialSectionComponent = ({ data }: TestimonialProps) => {
  const label = data?.label || "Find the Right Test for Your Needs!";
  const heading = data?.heading || "Providing the Diverse Needs of Your Patient Community";
  const items = data?.items?.length ? data.items : fallbackItems;

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Top Tagline */}
      <div className="text-center px-4 sm:px-6 md:px-0">
        <p
          className="text-green-600 font-medium mb-2 sm:mb-3
    text-[clamp(0.75rem,1vw,0.95rem)]"
        >
          {label}
        </p>

        <h2
          className="font-bold text-blue-900 mx-auto
    max-w-[90%] sm:max-w-2xl md:max-w-3xl
    leading-[1.2] sm:leading-tight
    mb-8 sm:mb-10 md:mb-12
    text-[clamp(1.5rem,3vw,2.5rem)]"
        >
          {heading}
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <TestimonialCard key={item._key} {...item} />
        ))}
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center mt-10 gap-2">
        <div className="w-6 h-2 rounded-full bg-blue-900" />
        <div className="w-6 h-2 rounded-full bg-green-400" />
      </div>
    </section>
  );
};

export default TestimonialSectionComponent;
