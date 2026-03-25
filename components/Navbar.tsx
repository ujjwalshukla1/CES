"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/sanity/queries";

const fallbackLinks: NavLink[] = [
  { _key: "home", label: "HOME", href: "/" },
  { _key: "about", label: "ABOUT US", href: "/about" },
  { _key: "contact", label: "CONTACT", href: "/contact" },
];

type NavbarProps = {
  links?: NavLink[];
};

const Navbar = ({ links }: NavbarProps) => {
  const navLinks = links?.length ? links : fallbackLinks;
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const switchingRef = useRef(false);
  const navRef = useRef<HTMLElement>(null);

  const activeLink = navLinks.find((l) => l._key === visibleDropdown);

  const handleDropdownClick = (key: string) => {
    if (openDropdown === key) {
      // Closing the same dropdown
      setDrawerOpen(false);
      setTimeout(() => {
        setOpenDropdown(null);
        setVisibleDropdown(null);
      }, 500);
    } else if (openDropdown !== null) {
      // Switching to a different dropdown: close first, then reopen
      switchingRef.current = true;
      setDrawerOpen(false);
      setTimeout(() => {
        setVisibleDropdown(key);
        setOpenDropdown(key);
        requestAnimationFrame(() => {
          setDrawerOpen(true);
          switchingRef.current = false;
        });
      }, 500);
    } else {
      // Opening fresh
      setOpenDropdown(key);
      setVisibleDropdown(key);
      requestAnimationFrame(() => setDrawerOpen(true));
    }
  };

  const closeDropdown = () => {
    if (switchingRef.current) return;
    setDrawerOpen(false);
    setTimeout(() => {
      setOpenDropdown(null);
      setVisibleDropdown(null);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isWhite = scrolled || hovered || openDropdown !== null;

  return (
    <nav
      ref={navRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isWhite ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <svg
            className={`w-12 h-12 transition-colors duration-500 ${
              isWhite ? "text-gray-800" : "text-white"
            }`}
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M100 10C50.3 10 10 50.3 10 100s40.3 90 90 90 90-40.3 90-90S149.7 10 100 10zm0 170c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
            <path d="M100 45c-8 0-42 25-42 55 0 0 10-22 42-22s42 22 42 22c0-30-34-55-42-55zm0 10c5.5 0 28 17.5 32 40-8-12-20-18-32-18s-24 6-32 18c4-22.5 26.5-40 32-40z" />
          </svg>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link._key}>
              {link.hasDropdown ? (
                <button
                  onClick={() => handleDropdownClick(link._key)}
                  className={`group relative text-base font-normal tracking-widest transition-colors duration-500 flex items-center gap-1 ${
                    isWhite ? "text-gray-800" : "text-white"
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-500 ease-out group-hover:w-full" />
                  </span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-500 ease-out ${
                      openDropdown === link._key ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`group relative text-base font-normal tracking-widest transition-colors duration-500 flex items-center gap-1 ${
                    isWhite ? "text-gray-800" : "text-white"
                  }`}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-500 ease-out group-hover:w-full" />
                  </span>
                  {link.external && (
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Utility Icons */}
        <div className="flex items-center gap-4">
          <button
            className={`transition-colors duration-500 ${
              isWhite ? "text-gray-800" : "text-white"
            }`}
            aria-label="Search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <div className="flex items-center gap-4 border-l border-current/20 pl-4">
            <button
              className={`transition-colors duration-500 ${
                isWhite ? "text-gray-800" : "text-white"
              }`}
              aria-label="Contact"
            >
              <svg
                className="w-5 h-5"
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
            </button>

            <button
              className={`transition-colors duration-500 ${
                isWhite ? "text-gray-800" : "text-white"
              }`}
              aria-label="Language"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </button>

            <span
              className={`text-base font-normal tracking-widest transition-colors duration-500 ${
                isWhite ? "text-gray-800" : "text-white"
              }`}
            >
              JA
            </span>
          </div>
        </div>
      </div>

      {/* Full-width drawer dropdown */}
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out border-t ${
          drawerOpen &&
          activeLink?.dropdownLinks &&
          activeLink.dropdownLinks.length > 0
            ? "max-h-96 opacity-100 border-gray-200"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="bg-white px-8 py-6">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-x-12 gap-y-3">
            {activeLink?.dropdownLinks?.map((subLink) => (
              <Link
                key={subLink._key}
                href={subLink.href}
                onClick={() => closeDropdown()}
                className="group relative text-base font-normal tracking-widest text-gray-700 transition-colors duration-500 hover:text-gray-900 py-2"
              >
                <span className="relative">
                  {subLink.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-500 ease-out group-hover:w-full" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
