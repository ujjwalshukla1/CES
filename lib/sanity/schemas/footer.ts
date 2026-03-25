import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "aboutText",
      title: "About Company Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "mapUrl",
      title: "Map URL",
      type: "url",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "menuLinks",
      title: "Menu Links",
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
    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Twitter", value: "twitter" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Instagram", value: "instagram" },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
    }),
  ],
});
