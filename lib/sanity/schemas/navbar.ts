import { defineType, defineField, defineArrayMember } from "sanity";

const navLinkField = defineArrayMember({
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "URL",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hasDropdown",
      title: "Has Dropdown",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "external",
      title: "External Link",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "dropdownLinks",
      title: "Dropdown Links",
      type: "array",
      hidden: ({ parent }) => !parent?.hasDropdown,
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
            defineField({
              name: "href",
              title: "URL",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});

export default defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [navLinkField],
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
