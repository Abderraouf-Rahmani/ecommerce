export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
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
      name: "slug",
      title: "Slug",
      type: "slug",
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
