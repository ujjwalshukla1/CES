"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/sanity/queries";
import NavLinkItem from "./navbar/NavLink";
import NavUtilIcons from "./navbar/NavUtilIcons";
import NavDrawer from "./navbar/NavDrawer";

const fallbackLinks: NavLink[] = [
  { _key: "home", label: "HOME", href: "/" },
  { _key: "about", label: "ABOUT US", href: "/about" },
  { _key: "contact", label: "CONTACT", href: "/contact" },
];

type NavbarProps = { links?: NavLink[] };

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
      setDrawerOpen(false);
      setTimeout(() => { setOpenDropdown(null); setVisibleDropdown(null); }, 500);
    } else if (openDropdown !== null) {
      switchingRef.current = true;
      setDrawerOpen(false);
      setTimeout(() => {
        setVisibleDropdown(key); setOpenDropdown(key);
        requestAnimationFrame(() => { setDrawerOpen(true); switchingRef.current = false; });
      }, 500);
    } else {
      setOpenDropdown(key); setVisibleDropdown(key);
      requestAnimationFrame(() => setDrawerOpen(true));
    }
  };

  const closeDropdown = () => {
    if (switchingRef.current) return;
    setDrawerOpen(false);
    setTimeout(() => { setOpenDropdown(null); setVisibleDropdown(null); }, 500);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeDropdown();
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isWhite ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="shrink-0">
          <svg className={`w-12 h-12 transition-colors duration-500 ${isWhite ? "text-gray-800" : "text-white"}`} viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 10C50.3 10 10 50.3 10 100s40.3 90 90 90 90-40.3 90-90S149.7 10 100 10zm0 170c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
            <path d="M100 45c-8 0-42 25-42 55 0 0 10-22 42-22s42 22 42 22c0-30-34-55-42-55zm0 10c5.5 0 28 17.5 32 40-8-12-20-18-32-18s-24 6-32 18c4-22.5 26.5-40 32-40z" />
          </svg>
        </Link>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link._key}>
              <NavLinkItem link={link} isWhite={isWhite} isOpen={openDropdown === link._key} onDropdownClick={handleDropdownClick} />
            </li>
          ))}
        </ul>

        <NavUtilIcons isWhite={isWhite} />
      </div>

      <NavDrawer drawerOpen={drawerOpen} activeLink={activeLink} closeDropdown={closeDropdown} />
    </nav>
  );
};

export default Navbar;
