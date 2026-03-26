import { defineType, defineField, defineArrayMember } from "sanity";

// --- Section: Hero ---
const heroSection = defineArrayMember({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "ctaText",
              title: "CTA Button Text",
              type: "string",
            }),
            defineField({
              name: "ctaHref",
              title: "CTA Link URL",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Upload Image",
              type: "image",
              options: { hotspot: true },
              description: "Upload an image or use the URL field below",
            }),
            defineField({
              name: "imageUrl",
              title: "Or Image URL",
              type: "url",
              description: "External image URL — used if no image is uploaded",
            }),
          ],
          preview: {
            select: { title: "heading", media: "image" },
          },
        }),
      ],
    }),
    defineField({
      name: "trustedByText",
      title: "Trusted By Text",
      type: "string",
      initialValue: "Trusted by industry-leading organizations including",
    }),
    defineField({
      name: "clientLogos",
      title: "Client Logos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Company Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              title: "Upload Logo",
              type: "image",
              description: "Upload a logo or use the URL field below",
            }),
            defineField({
              name: "imageUrl",
              title: "Or Logo URL",
              type: "url",
              description: "External logo URL — used if no image is uploaded",
            }),
          ],
          preview: {
            select: { title: "name", media: "image" },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hero Section", subtitle: "Hero" };
    },
  },
});

// --- Section: About ---
const aboutSection = defineArrayMember({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      initialValue: "LABORATORY",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Get in Touch",
    }),
    defineField({
      name: "yearsExperience",
      title: "Years of Experience",
      type: "number",
      initialValue: 20,
    }),
    defineField({
      name: "image",
      title: "Upload Hexagon Image",
      type: "image",
      options: { hotspot: true },
      description: "Upload an image or use the URL field below",
    }),
    defineField({
      name: "imageUrl",
      title: "Or Image URL",
      type: "url",
      description: "External image URL — used if no image is uploaded",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "About Section", subtitle: "About" };
    },
  },
});

// --- Section: Services ---
const servicesSection = defineArrayMember({
  name: "servicesSection",
  title: "Services Section",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Section Label",
      type: "string",
      initialValue: "OUR SERVICES",
    }),
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Icon name: beaker, network, or factory",
              options: {
                list: [
                  { title: "Beaker", value: "beaker" },
                  { title: "Network", value: "network" },
                  { title: "Factory", value: "factory" },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              title: "Link URL",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Services Section", subtitle: "Services" };
    },
  },
});

// --- Section: Testimonial ---
const testimonialSection = defineArrayMember({
  name: "testimonialSection",
  title: "Testimonial / Testing Section",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      initialValue: "Find the Right Test for Your Needs!",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Providing the Diverse Needs of Your Patient Community",
    }),
    defineField({
      name: "items",
      title: "Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "points",
              title: "Bullet Points",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "icon",
              title: "Icon Emoji",
              type: "string",
              description: "e.g. 🍲 🧬 ⚛️",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "icon" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title || "Testimonial Section", subtitle: "Testimonial" };
    },
  },
});

// --- Section: Contact ---
const contactSection = defineArrayMember({
  name: "contactSection",
  title: "Contact / Appointment Section",
  type: "object",
  fields: [
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      initialValue: "Your Health And Safety Is Important To Us",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Find Your Nearest Lab And Schedule An Appointment",
    }),
    defineField({
      name: "buttonText",
      title: "Submit Button Text",
      type: "string",
      initialValue: "Make An Appointment",
    }),
    defineField({
      name: "serviceOptions",
      title: "Service Options",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "locationOptions",
      title: "Location Options",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "timeOptions",
      title: "Time Options",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "specialHoursLabels",
      title: "Services you want",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "infoText",
      title: "Info Panel Text",
      type: "text",
    }),
    defineField({
      name: "features",
      title: "Feature Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "image",
      title: "Upload Image",
      type: "image",
      options: { hotspot: true },
      description: "Upload an image or use the URL field below",
    }),
    defineField({
      name: "imageUrl",
      title: "Or Image URL",
      type: "url",
      description: "External image URL — used if no image is uploaded",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contact Section", subtitle: "Appointment Form" };
    },
  },
});

// --- Page Document ---
export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
      description: 'Use "home" for the homepage',
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [heroSection, aboutSection, servicesSection, testimonialSection, contactSection],
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare({ title, slug }) {
      return { title, subtitle: `/${slug || ""}` };
    },
  },
});
