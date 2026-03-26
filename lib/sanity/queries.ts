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
  image?: {
    asset: { _ref: string };
  };
  imageUrl?: string;
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

export type HeroSlide = {
  _key: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  image?: {
    asset: { _ref: string };
  };
  imageUrl?: string;
};

export type ClientLogo = {
  _key: string;
  name?: string;
  image?: {
    asset: { _ref: string };
  };
  imageUrl?: string;
};

export type HeroSection = {
  _key: string;
  _type: "heroSection";
  slides?: HeroSlide[];
  trustedByText?: string;
  clientLogos?: ClientLogo[];
};

export type ContactFeature = {
  _key: string;
  title: string;
  description: string;
};

export type ContactSection = {
  _key: string;
  _type: "contactSection";
  badge?: string;
  heading?: string;
  buttonText?: string;
  serviceOptions?: string[];
  locationOptions?: string[];
  timeOptions?: string[];
  specialHoursLabels?: { _key: string; label: string }[];
  infoText?: string;
  features?: ContactFeature[];
  image?: { asset: { _ref: string } };
  imageUrl?: string;
};

export type TestimonialItem = {
  _key: string;
  title: string;
  description: string;
  points: string[];
  icon?: string;
};

export type TestimonialSection = {
  _key: string;
  _type: "testimonialSection";
  label?: string;
  heading?: string;
  items?: TestimonialItem[];
};

export type Section = AboutSection | ServicesSection | HeroSection | ContactSection | TestimonialSection;

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
      yearsExperience,
      image,
      imageUrl
    },
    _type == "heroSection" => {
      slides[]{ _key, heading, description, ctaText, ctaHref, image, imageUrl },
      trustedByText,
      clientLogos[]{ _key, name, image, imageUrl }
    },
    _type == "servicesSection" => {
      label,
      heading,
      services[]{ _key, title, description, icon, href }
    },
    _type == "testimonialSection" => {
      label,
      heading,
      items[]{ _key, title, description, points, icon }
    },
    _type == "contactSection" => {
      badge,
      heading,
      buttonText,
      serviceOptions,
      locationOptions,
      timeOptions,
      specialHoursLabels[]{ _key, label },
      infoText,
      features[]{ _key, title, description },
      image,
      imageUrl
    }
  }
}`;

export async function getPage(slug: string): Promise<PageData | null> {
  return sanityFetch<PageData | null>(pageQuery, { slug });
}
