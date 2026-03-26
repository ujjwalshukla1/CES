"use client";

import Link from "next/link";
import type { NavLink as NavLinkType } from "@/lib/sanity/queries";

export default function NavLinkItem({
  link,
  isWhite,
  isOpen,
  onDropdownClick,
}: {
  link: NavLinkType;
  isWhite: boolean;
  isOpen: boolean;
  onDropdownClick: (key: string) => void;
}) {
  const colorClass = isWhite ? "text-gray-800" : "text-white";
  const underline = <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-500 ease-out group-hover:w-full" />;

  if (link.hasDropdown) {
    return (
      <button
        onClick={() => onDropdownClick(link._key)}
        className={`group relative text-base font-normal tracking-widest transition-colors duration-500 flex items-center gap-1 ${colorClass}`}
      >
        <span className="relative">{link.label}{underline}</span>
        <svg className={`w-3 h-3 transition-transform duration-500 ease-out ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  }

  return (
    <Link
      href={link.href}
      className={`group relative text-base font-normal tracking-widest transition-colors duration-500 flex items-center gap-1 ${colorClass}`}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="relative">{link.label}{underline}</span>
      {link.external && (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </Link>
  );
}
