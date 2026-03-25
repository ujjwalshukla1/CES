import Link from "next/link";
import type { FooterData, FooterSocial } from "@/lib/sanity/queries";

const fallbackData: FooterData = {
  companyName: "Mistri",
  aboutText:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
  address: "901 N Pitt Str., Suite 170 Alexandria, USA",
  mapUrl: "#",
  phone: "(406) 555-0120",
  email: "info@extrem.com",
  menuLinks: [
    { _key: "home", label: "Home", href: "/" },
    { _key: "about", label: "About Us", href: "/about" },
    { _key: "services", label: "Services", href: "/services" },
    { _key: "projects", label: "Our Projects", href: "/projects" },
    { _key: "career", label: "Career", href: "/career" },
    { _key: "team", label: "Our Team", href: "/team" },
    { _key: "news", label: "Latest News", href: "/news" },
    { _key: "contact", label: "Contact Us", href: "/contact" },
  ],
  socials: [
    { _key: "fb", platform: "facebook", url: "#" },
    { _key: "tw", platform: "twitter", url: "#" },
    { _key: "li", platform: "linkedin", url: "#" },
    { _key: "ig", platform: "instagram", url: "#" },
  ],
  copyrightText: "Copyright Mistri. Design By GramenTheme",
};

const SocialIcon = ({ platform }: { platform: FooterSocial["platform"] }) => {
  switch (platform) {
    case "facebook":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>
      );
  }
};

type FooterProps = {
  data?: FooterData | null;
};

const Footer = ({ data }: FooterProps) => {
  const d = data ?? fallbackData;
  const companyName = d.companyName || fallbackData.companyName;
  const aboutText = d.aboutText || fallbackData.aboutText;
  const address = d.address || fallbackData.address;
  const mapUrl = d.mapUrl || fallbackData.mapUrl;
  const phone = d.phone || fallbackData.phone;
  const email = d.email || fallbackData.email;
  const menuLinks =
    d.menuLinks && d.menuLinks.length > 0
      ? d.menuLinks
      : fallbackData.menuLinks!;
  const socials =
    d.socials && d.socials.length > 0 ? d.socials : fallbackData.socials!;
  const copyrightText = d.copyrightText || fallbackData.copyrightText;

  const mid = Math.ceil(menuLinks.length / 2);
  const leftMenu = menuLinks.slice(0, mid);
  const rightMenu = menuLinks.slice(mid);

  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Dense static pattern background */}
      <div className="absolute inset-0 opacity-[0.20] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sci-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Atom */}
              <circle cx="30" cy="30" r="3" fill="white" />
              <ellipse cx="30" cy="30" rx="14" ry="6" fill="none" stroke="white" strokeWidth="0.8" />
              <ellipse cx="30" cy="30" rx="14" ry="6" fill="none" stroke="white" strokeWidth="0.8" transform="rotate(60 30 30)" />
              <ellipse cx="30" cy="30" rx="14" ry="6" fill="none" stroke="white" strokeWidth="0.8" transform="rotate(120 30 30)" />
              {/* Flask */}
              <path d="M110 10 L110 28 L100 48 Q99 51 102 51 L118 51 Q121 51 120 48 L110 28" fill="none" stroke="white" strokeWidth="0.8" />
              <line x1="106" y1="10" x2="114" y2="10" stroke="white" strokeWidth="0.8" />
              {/* Hexagon */}
              <polygon points="170,25 180,20 190,25 190,35 180,40 170,35" fill="none" stroke="white" strokeWidth="0.8" />
              <polygon points="173,27 178,24 183,27 183,33 178,36 173,33" fill="none" stroke="white" strokeWidth="0.5" />
              {/* DNA */}
              <path d="M15 70 Q27 78 15 86 Q3 94 15 102" fill="none" stroke="white" strokeWidth="0.8" />
              <path d="M27 70 Q15 78 27 86 Q39 94 27 102" fill="none" stroke="white" strokeWidth="0.8" />
              <line x1="17" y1="78" x2="25" y2="78" stroke="white" strokeWidth="0.5" />
              <line x1="17" y1="94" x2="25" y2="94" stroke="white" strokeWidth="0.5" />
              {/* Magnifying Glass */}
              <circle cx="80" cy="85" r="8" fill="none" stroke="white" strokeWidth="0.8" />
              <line x1="86" y1="91" x2="94" y2="99" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              {/* Test Tube */}
              <line x1="140" y1="70" x2="140" y2="95" stroke="white" strokeWidth="0.8" />
              <line x1="148" y1="70" x2="148" y2="95" stroke="white" strokeWidth="0.8" />
              <path d="M140 95 Q140 102 144 102 Q148 102 148 95" fill="none" stroke="white" strokeWidth="0.8" />
              <line x1="137" y1="70" x2="151" y2="70" stroke="white" strokeWidth="0.8" />
              {/* Gear */}
              <circle cx="185" cy="85" r="6" fill="none" stroke="white" strokeWidth="0.7" />
              <circle cx="185" cy="85" r="3" fill="none" stroke="white" strokeWidth="0.5" />
              <line x1="185" y1="77" x2="185" y2="80" stroke="white" strokeWidth="1.5" />
              <line x1="185" y1="90" x2="185" y2="93" stroke="white" strokeWidth="1.5" />
              <line x1="177" y1="85" x2="180" y2="85" stroke="white" strokeWidth="1.5" />
              <line x1="190" y1="85" x2="193" y2="85" stroke="white" strokeWidth="1.5" />
              {/* Graph */}
              <line x1="55" y1="150" x2="55" y2="120" stroke="white" strokeWidth="0.7" />
              <line x1="55" y1="150" x2="95" y2="150" stroke="white" strokeWidth="0.7" />
              <rect x="60" y="135" width="5" height="15" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="68" y="128" width="5" height="22" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="76" y="122" width="5" height="28" fill="none" stroke="white" strokeWidth="0.6" />
              <rect x="84" y="132" width="5" height="18" fill="none" stroke="white" strokeWidth="0.6" />
              {/* Clipboard */}
              <rect x="120" y="125" width="22" height="30" rx="1.5" fill="none" stroke="white" strokeWidth="0.8" />
              <rect x="126" y="121" width="10" height="6" rx="1" fill="none" stroke="white" strokeWidth="0.7" />
              <polyline points="125,138 128,141 133,136" fill="none" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="136" y1="139" x2="140" y2="139" stroke="white" strokeWidth="0.6" />
              <polyline points="125,146 128,149 133,144" fill="none" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="136" y1="147" x2="140" y2="147" stroke="white" strokeWidth="0.6" />
              {/* Microscope */}
              <ellipse cx="175" cy="130" rx="7" ry="4" fill="none" stroke="white" strokeWidth="0.7" />
              <line x1="175" y1="134" x2="175" y2="155" stroke="white" strokeWidth="1" />
              <line x1="175" y1="143" x2="185" y2="137" stroke="white" strokeWidth="0.8" />
              <circle cx="188" cy="135" r="3" fill="none" stroke="white" strokeWidth="0.7" />
              <line x1="168" y1="155" x2="182" y2="155" stroke="white" strokeWidth="1" />
              {/* Scattered dots */}
              <circle cx="50" cy="55" r="1.2" fill="white" />
              <circle cx="130" cy="55" r="1" fill="white" />
              <circle cx="95" cy="170" r="1.2" fill="white" />
              <circle cx="160" cy="170" r="1" fill="white" />
              <circle cx="45" cy="180" r="1" fill="white" />
              {/* Plus signs */}
              <line x1="100" y1="165" x2="100" y2="175" stroke="white" strokeWidth="0.8" />
              <line x1="95" y1="170" x2="105" y2="170" stroke="white" strokeWidth="0.8" />
              <line x1="160" y1="55" x2="160" y2="63" stroke="white" strokeWidth="0.8" />
              <line x1="156" y1="59" x2="164" y2="59" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sci-pattern)" />
        </svg>
      </div>

      {/* Floating animated icons on top */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-14 h-14 text-white/10 animate-float-1" style={{ top: "8%", left: "5%" }} viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 5 L20 30 L5 65 Q3 72 10 72 L50 72 Q57 72 55 65 L40 30 L40 5" />
          <line x1="15" y1="5" x2="45" y2="5" />
        </svg>
        <svg className="absolute w-12 h-12 text-white/10 animate-float-2" style={{ top: "55%", left: "12%" }} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="30" cy="30" r="4" fill="currentColor" />
          <ellipse cx="30" cy="30" rx="25" ry="10" />
          <ellipse cx="30" cy="30" rx="25" ry="10" transform="rotate(60 30 30)" />
          <ellipse cx="30" cy="30" rx="25" ry="10" transform="rotate(120 30 30)" />
        </svg>
        <svg className="absolute w-8 h-16 text-white/10 animate-float-3" style={{ top: "15%", left: "72%" }} viewBox="0 0 30 70" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M5 5 Q20 15 5 25 Q-10 35 5 45 Q20 55 5 65" />
          <path d="M25 5 Q10 15 25 25 Q40 35 25 45 Q10 55 25 65" />
          <line x1="8" y1="15" x2="22" y2="15" strokeWidth="0.8" />
          <line x1="8" y1="35" x2="22" y2="35" strokeWidth="0.8" />
          <line x1="8" y1="55" x2="22" y2="55" strokeWidth="0.8" />
        </svg>
        <svg className="absolute w-10 h-10 text-white/10 animate-float-4" style={{ top: "65%", left: "38%" }} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="15" />
          <line x1="31" y1="31" x2="45" y2="45" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute w-10 h-10 text-white/10 animate-float-5" style={{ top: "10%", left: "42%" }} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="25" cy="25" r="10" />
          <circle cx="25" cy="25" r="5" />
          <line x1="25" y1="12" x2="25" y2="17" strokeWidth="2.5" />
          <line x1="25" y1="33" x2="25" y2="38" strokeWidth="2.5" />
          <line x1="12" y1="25" x2="17" y2="25" strokeWidth="2.5" />
          <line x1="33" y1="25" x2="38" y2="25" strokeWidth="2.5" />
        </svg>
        <svg className="absolute w-12 h-12 text-white/10 animate-float-6" style={{ top: "45%", left: "82%" }} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
          <polygon points="20,4 35,12 35,28 20,36 5,28 5,12" />
          <polygon points="20,10 29,15 29,25 20,30 11,25 11,15" />
        </svg>
        <svg className="absolute w-10 h-14 text-white/10 animate-float-7" style={{ top: "75%", left: "60%" }} viewBox="0 0 40 55" fill="none" stroke="currentColor" strokeWidth="1.3">
          <rect x="2" y="8" width="36" height="45" rx="2" />
          <rect x="12" y="3" width="16" height="10" rx="2" />
          <polyline points="9,24 13,28 21,20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="25" y1="24" x2="33" y2="24" />
        </svg>
        <svg className="absolute w-12 h-14 text-white/10 animate-float-8" style={{ top: "5%", left: "88%" }} viewBox="0 0 45 55" fill="none" stroke="currentColor" strokeWidth="1.3">
          <ellipse cx="20" cy="10" rx="10" ry="6" />
          <line x1="20" y1="16" x2="20" y2="42" strokeWidth="1.8" />
          <line x1="20" y1="28" x2="35" y2="18" />
          <circle cx="38" cy="16" r="5" />
          <line x1="10" y1="42" x2="30" y2="42" strokeWidth="1.8" />
        </svg>
        <svg className="absolute w-6 h-14 text-white/10 animate-float-9" style={{ top: "35%", left: "28%" }} viewBox="0 0 20 55" fill="none" stroke="currentColor" strokeWidth="1.3">
          <line x1="5" y1="5" x2="5" y2="40" />
          <line x1="15" y1="5" x2="15" y2="40" />
          <path d="M5 40 Q5 50 10 50 Q15 50 15 40" />
          <line x1="2" y1="5" x2="18" y2="5" />
        </svg>
        <svg className="absolute w-10 h-10 text-white/8 animate-float-10" style={{ top: "80%", left: "20%" }} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="30" cy="30" r="4" fill="currentColor" />
          <ellipse cx="30" cy="30" rx="25" ry="10" />
          <ellipse cx="30" cy="30" rx="25" ry="10" transform="rotate(60 30 30)" />
          <ellipse cx="30" cy="30" rx="25" ry="10" transform="rotate(120 30 30)" />
        </svg>
        <svg className="absolute w-10 h-10 text-white/8 animate-float-11" style={{ top: "50%", left: "52%" }} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="15" />
          <line x1="31" y1="31" x2="45" y2="45" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute w-12 h-12 text-white/8 animate-float-12" style={{ top: "30%", left: "92%" }} viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 5 L20 30 L5 65 Q3 72 10 72 L50 72 Q57 72 55 65 L40 30 L40 5" />
          <line x1="15" y1="5" x2="45" y2="5" />
        </svg>
      </div>
      {/* Top bar: logo + socials */}
      <div className="max-w-7xl mx-auto px-8 pt-12 pb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-bold text-white"
          >
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              <path d="M100 10C50.3 10 10 50.3 10 100s40.3 90 90 90 90-40.3 90-90S149.7 10 100 10zm0 170c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
              <path d="M100 45c-8 0-42 25-42 55 0 0 10-22 42-22s42 22 42 22c0-30-34-55-42-55zm0 10c5.5 0 28 17.5 32 40-8-12-20-18-32-18s-24 6-32 18c4-22.5 26.5-40 32-40z" />
            </svg>
            {companyName}
          </Link>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social._key}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 transition-colors duration-300 hover:bg-white hover:text-gray-900 hover:border-white"
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 mb-10" />

        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              About Company
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {aboutText}
            </p>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Official Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-white shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <span className="text-gray-400">{address}</span>
                  {mapUrl && (
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-1 text-red-500 font-semibold text-sm hover:underline"
                    >
                      View Map &#x279A;
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">{phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">{email}</span>
              </li>
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Main Menu
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                {leftMenu.map((link) => (
                  <li key={link._key}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {rightMenu.map((link) => (
                  <li key={link._key}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-5 text-center">
          <p className="text-sm text-gray-500">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
