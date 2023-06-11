export default {
    name: "post",
    title: "post",
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
          name: "title",
          title: "title",
          type: "string",
        },
        {
          name: "discription",
          title: "discription",
          type: "string",
          
        },
       
    ],

  };
  