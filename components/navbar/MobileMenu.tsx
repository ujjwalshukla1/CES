"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/sanity/queries";

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-lg font-semibold text-gray-900 tracking-wide">CES</span>
          <button onClick={onClose} aria-label="Close menu" className="p-1 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="overflow-y-auto h-[calc(100%-80px)] px-6 py-4">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link._key}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setExpandedKey(expandedKey === link._key ? null : link._key)}
                      className="w-full flex items-center justify-between py-3 text-gray-800 text-base font-normal tracking-wide"
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                          expandedKey === link._key ? "rotate-180" : ""
                        }`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedKey === link._key ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-4 pb-2 space-y-1 border-l-2 border-green-200">
                        {link.dropdownLinks?.map((sub) => (
                          <li key={sub._key}>
                            <Link
                              href={sub.href}
                              onClick={onClose}
                              className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 text-gray-800 text-base font-normal tracking-wide hover:text-green-600 transition-colors duration-200"
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="border-t border-gray-100 my-5" />

          {/* Utility links */}
          <div className="space-y-3">
            <button className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
            <button className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </button>
            <button className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Language
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
