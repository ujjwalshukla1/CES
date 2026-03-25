import About from "@/components/section/About";
import TestimonialSection from "@/components/section/Testimonial";
import Image from "next/image";

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
