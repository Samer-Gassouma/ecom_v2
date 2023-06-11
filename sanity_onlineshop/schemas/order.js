import { IProduct } from "./product";
export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "items",
      title: "items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "product",
            },
          ],
        },
      ],
    },
    {
        name: "totalQuantity",
        title: "totalQuantity",
        type: "Number",
      },
      
    {
      name: "totalAmount",
      title: "totalAmount",
      type: "number",
    },
    
  ],
};
