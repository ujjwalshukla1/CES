import Link from "next/link";
import type { FooterData } from "@/lib/sanity/queries";
import SocialIcon from "./footer/SocialIcon";
import FooterBackground from "./footer/FooterBackground";
import FooterColumns from "./footer/FooterColumns";

const fb: FooterData = {
  companyName: "Mistri", aboutText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
  address: "901 N Pitt Str., Suite 170 Alexandria, USA", mapUrl: "#", phone: "(406) 555-0120", email: "info@extrem.com",
  menuLinks: [{ _key: "home", label: "Home", href: "/" }, { _key: "about", label: "About Us", href: "/about" }, { _key: "services", label: "Services", href: "/services" }, { _key: "projects", label: "Our Projects", href: "/projects" }, { _key: "career", label: "Career", href: "/career" }, { _key: "team", label: "Our Team", href: "/team" }, { _key: "news", label: "Latest News", href: "/news" }, { _key: "contact", label: "Contact Us", href: "/contact" }],
  socials: [{ _key: "fb", platform: "facebook", url: "#" }, { _key: "tw", platform: "twitter", url: "#" }, { _key: "li", platform: "linkedin", url: "#" }, { _key: "ig", platform: "instagram", url: "#" }],
  copyrightText: "Copyright Mistri. Design By GramenTheme",
};

export default function Footer({ data }: { data?: FooterData | null }) {
  const d = data ?? fb;
  const companyName = d.companyName || fb.companyName;
  const socials = d.socials?.length ? d.socials : fb.socials!;
  const menuLinks = d.menuLinks?.length ? d.menuLinks : fb.menuLinks!;

  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      <FooterBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-white">
            <svg className="w-10 h-10 text-white" viewBox="0 0 200 200" fill="currentColor">
              <path d="M100 10C50.3 10 10 50.3 10 100s40.3 90 90 90 90-40.3 90-90S149.7 10 100 10zm0 170c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
              <path d="M100 45c-8 0-42 25-42 55 0 0 10-22 42-22s42 22 42 22c0-30-34-55-42-55zm0 10c5.5 0 28 17.5 32 40-8-12-20-18-32-18s-24 6-32 18c4-22.5 26.5-40 32-40z" />
            </svg>
            {companyName}
          </Link>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s._key} href={s.url} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 transition-colors duration-300 hover:bg-white hover:text-gray-900 hover:border-white">
                <SocialIcon platform={s.platform} />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 mb-10" />
        <FooterColumns aboutText={d.aboutText || fb.aboutText!} address={d.address || fb.address!} mapUrl={d.mapUrl || fb.mapUrl!} phone={d.phone || fb.phone!} email={d.email || fb.email!} menuLinks={menuLinks} />
      </div>
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-5 text-center">
          <p className="text-sm text-gray-500">{d.copyrightText || fb.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
