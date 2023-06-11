import {mongooseConnect} from "../../lib/mongoose";
import { Order } from "../../models/Order";
import sgMail from "@sendgrid/mail";
import { Product } from "../../models/Product";

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { totalAmount,formData } = req.body;
  const { name, email, phone, city, postalCode, Address, } = formData;
  await mongooseConnect();
  let line_items = [];
 totalAmount.items.map((item) => {
    line_items.push({
      price_data: {
        product_data: {
          name: item.name
        },
        unit_amount: item.price ,
      },
      quantity: item.quantity,
    });
  });
  const total = totalAmount.totalAmount;
  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    phone,
    city,
    postalCode,
    Address,
    total,
    paid: false,
  });
  if (orderDoc) {
    const msg = {
      to: email, // User's email address
      from: "samer.samm12@gmail.com", // Your email address
      subject: "Order Confirmation",
      html: `
        <p>Thank you for your order!</p>
        <p>Your order ID is: ${orderDoc._id}</p>
        <p>We will process your order and notify you once it's shipped.</p>
        <p>Thank you for shopping with us!</p>
      `,
    };
    // Send the email
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    res.status(200).json({
      success: true,
      sessionId: orderDoc._id,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
}


