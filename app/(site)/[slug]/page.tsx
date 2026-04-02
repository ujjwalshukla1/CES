import { getPage } from "@/lib/sanity/queries";
import SectionRenderer from "@/components/SectionRenderer";
import { notFound } from "next/navigation";

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = await getPage(slug);

  if (!pageData) notFound();

  return <SectionRenderer sections={pageData.sections} />;
}
