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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "discount",
      title: "Discount(%)",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "object",
      fields: [
       
        {
          name: "specification",
          title: "Specification",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "warranty",
          title: "Warranty",
          type: "string",
          of: [{ type: "block" }],
        },
        {
          name: "color",
          title: "Color",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "isOffer",
      title: "IsOffer",
      type: "boolean",
    },
    {
      name: "registerDate",
      title: "RegisterDate",
      type: "datetime",
    },
    {
      name: "starRating",
      title: "Star Rating",
      type: "number",
    },
  ],
};
