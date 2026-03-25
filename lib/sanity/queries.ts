import { sanityClient } from "./client";

export async function sanityFetch<T>(query: string, params = {}): Promise<T> {
  return sanityClient.fetch<T>(query, params);
}

// --- Navbar ---

export type DropdownLink = {
  _key: string;
  label: string;
  href: string;
};

export type NavLink = {
  _key: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  external?: boolean;
  dropdownLinks?: DropdownLink[];
};

export type NavbarData = {
  links: NavLink[];
  logo?: {
    asset: {
      _ref: string;
    };
  };
};

export const navbarQuery = `*[_type == "navbar"][0]{
  links[]{
    _key,
    label,
    href,
    hasDropdown,
    external,
    dropdownLinks[]{
      _key,
      label,
      href
    }
  },
  logo
}`;

export async function getNavbar(): Promise<NavbarData | null> {
  return sanityFetch<NavbarData | null>(navbarQuery);
}

// --- Footer ---

export type FooterSocial = {
  _key: string;
  platform: "facebook" | "twitter" | "linkedin" | "instagram";
  url: string;
};

export type FooterMenuLink = {
  _key: string;
  label: string;
  href: string;
};

export type FooterData = {
  companyName?: string;
  aboutText?: string;
  address?: string;
  mapUrl?: string;
  phone?: string;
  email?: string;
  menuLinks?: FooterMenuLink[];
  socials?: FooterSocial[];
  copyrightText?: string;
};

export const footerQuery = `*[_type == "footer"][0]{
  companyName,
  aboutText,
  address,
  mapUrl,
  phone,
  email,
  menuLinks[]{
    _key,
    label,
    href
  },
  socials[]{
    _key,
    platform,
    url
  },
  copyrightText
}`;

export async function getFooter(): Promise<FooterData | null> {
  return sanityFetch<FooterData | null>(footerQuery);
}

// --- Page Builder ---

export type AboutFeature = {
  _key: string;
  text: string;
};

export type AboutSection = {
  _key: string;
  _type: "aboutSection";
  label?: string;
  heading?: string;
  description?: string;
  features?: AboutFeature[];
  ctaText?: string;
  yearsExperience?: number;
};

export type ServiceItem = {
  _key: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
};

export type ServicesSection = {
  _key: string;
  _type: "servicesSection";
  label?: string;
  heading?: string;
  services?: ServiceItem[];
};

export type Section = AboutSection | ServicesSection;

export type PageData = {
  title: string;
  slug: { current: string };
  sections?: Section[];
};

export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  slug,
  sections[]{
    _key,
    _type,
    _type == "aboutSection" => {
      label,
      heading,
      description,
      features[]{ _key, text },
      ctaText,
      yearsExperience
    },
    _type == "servicesSection" => {
      label,
      heading,
      services[]{ _key, title, description, icon, href }
    }
  }
}`;

export async function getPage(slug: string): Promise<PageData | null> {
  return sanityFetch<PageData | null>(pageQuery, { slug });
}
