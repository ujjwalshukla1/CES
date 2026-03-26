import type { TestimonialItem } from "@/lib/sanity/queries";

export const fallbackItems: TestimonialItem[] = [
  { _key: "1", title: "Food Sensitivity Testing", description: "IgG food reactions can take hours or days to develop, making it difficult to determine which food is responsible...", points: ["Stomach or abdominal pain", "Gastrointestinal distress", "Bloating / Indigestion"], icon: "🍲" },
  { _key: "2", title: "Genova Diagnostics Testing", description: "Genova Diagnostics is an internationally renowned lab committed to only the highest standards...", points: ["Gastrointestinal / Immunology", "Nutritional / Endocrinology", "Genomics / Environmental"], icon: "🧬" },
  { _key: "3", title: "Hormone Insights Testing", description: "Hormones are essential for the body to function optimally. Imbalances may result in many health conditions...", points: ["Cortisol and cortisone metabolites", "Androgens and 17-ketosteroids", "Progesterone metabolites"], icon: "⚛️" },
];
