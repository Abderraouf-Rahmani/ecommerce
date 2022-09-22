export default {
  name: "hero",
  title: "Hero Grid",
  type: "document",
  fields: [
    {
      name: "bigSqr",
      title: "Big Square Hero 1/2",
      type: "document",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
      ],
    },
    {
      name: "tallRect",
      title: "Middle Tall Rectangle",
      type: "document",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
      ],
    },
    {
      name: "topLittleSqr",
      title: "Top Little Square",
      type: "document",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
      ],
    },
    {
      name: "bottomLittleSqr",
      title: "Bottom Little Square",
      type: "document",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
      ],
    },
  ],
};
