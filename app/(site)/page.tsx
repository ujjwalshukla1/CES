import { getPage } from "@/lib/sanity/queries";
import SectionRenderer from "@/components/SectionRenderer";
import About from "@/components/section/About";
import Service from "@/components/section/Service";

export default async function Home() {
  const pageData = await getPage("/");

  // If Sanity has page data with sections, render them dynamically
  if (pageData?.sections?.length) {
    return <SectionRenderer sections={pageData.sections} />;
  }

  // Fallback: render default sections when Sanity has no data
  return (
    <>
      <About />
      <Service />
    </>
  );
}
