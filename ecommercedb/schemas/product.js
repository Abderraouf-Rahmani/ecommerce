export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
    },
    {
      name: "isTrending",
      title: "Trending",
      type: "boolean",
    },
    {
      name: "isWide",
      title: "Wide",
      type: "boolean",
    },
    {
      name: "wideCardTitle",
      title: "Wide Card Title",
      type: "string",
      hidden: ({ document }) => !document?.isWide,
    },
    {
      name: "productCategory",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "ref",
      title: "Ref",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },
    {
      name: "characteristics",
      title: "Characteristics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "spec",
              title: "Spec",
              type: "string",
            },
            {
              name: "char",
              title: "Char",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
