import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getNavbar, getFooter } from "@/lib/sanity/queries";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navData, footerData] = await Promise.all([getNavbar(), getFooter()]);

  return (
    <>
      <Navbar links={navData?.links} />
      <main className="flex-1 pt-24">{children}</main>
      <Footer data={footerData} />
    </>
  );
}
