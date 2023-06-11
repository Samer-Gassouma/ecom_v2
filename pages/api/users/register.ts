import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { client } from "../../../lib/client";
import { signToken } from "../../../utilities/auth";

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {

  const { name, email, password } = req.body;

  // Check if user already exists
  const userExists = await client.fetch(`*[_type == 'user' && email == $email]`, { email });
  
  if (userExists.length > 0) {
    return res.status(400).json({ message: 'User already exists' });
  }



  // Create user object
  
  
  const user = {
    _type: 'user',
    name,
    email,
    password
  };


  try {
    const createdUser = await client.create(user);

    // Create token
    const token = signToken(createdUser);

    // Set cookie
    res.setHeader('Set-Cookie', `token=${token}; path=/; httpOnly`);


    // Handle successful user creation
    res.status(201).json({ message: 'User created successfully', user: createdUser });
  } catch (error) {
    // Handle error during user creation
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }

});

export default handler;
