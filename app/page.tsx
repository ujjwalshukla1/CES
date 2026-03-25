import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getNavbar, getFooter } from "@/lib/sanity/queries";

export default async function Home() {
  const [navData, footerData] = await Promise.all([getNavbar(), getFooter()]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={navData?.links} />
      <main className="flex-1 pt-24">
        <h1>Home</h1>
      </main>
      <Footer data={footerData} />
    </div>
  );
}
