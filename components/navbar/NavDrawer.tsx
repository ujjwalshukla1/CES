import Link from "next/link";
import type { NavLink } from "@/lib/sanity/queries";

export default function NavDrawer({
  drawerOpen,
  activeLink,
  closeDropdown,
}: {
  drawerOpen: boolean;
  activeLink?: NavLink;
  closeDropdown: () => void;
}) {
  const hasLinks = activeLink?.dropdownLinks && activeLink.dropdownLinks.length > 0;

  return (
    <div
      className={`w-full overflow-hidden transition-all duration-500 ease-in-out border-t ${
        drawerOpen && hasLinks
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
              onClick={closeDropdown}
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
  );
}
