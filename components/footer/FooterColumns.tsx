import Link from "next/link";
import type { FooterMenuLink } from "@/lib/sanity/queries";

export default function FooterColumns({
  aboutText, address, mapUrl, phone, email, menuLinks,
}: {
  aboutText: string; address: string; mapUrl: string; phone: string; email: string;
  menuLinks: FooterMenuLink[];
}) {
  const mid = Math.ceil(menuLinks.length / 2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">About Company</h3>
        <p className="text-sm leading-relaxed text-gray-400">{aboutText}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Official Info</h3>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <span className="text-gray-400">{address}</span>
              {mapUrl && <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="block mt-1 text-green-500 font-semibold text-sm hover:underline">View Map &#x279A;</a>}
            </div>
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-400">{phone}</span>
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-400">{email}</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Main Menu</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {[menuLinks.slice(0, mid), menuLinks.slice(mid)].map((col, ci) => (
            <ul key={ci} className="space-y-3">
              {col.map((link) => (
                <li key={link._key}>
                  <Link href={link.href} className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
