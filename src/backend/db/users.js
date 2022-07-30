import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "test",
    lastName: "user",
    email: "testuser@gmail.com",
    password: "Testuser@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
   {
    _id: uuid(),
    firstName: "john",
    lastName: "doe",
    email: "johndoe@gmail.com",
    password: "Johndoe@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
    {
    _id: uuid(),
    firstName: "ram",
    lastName: "jack",
    email: "ramjack@gmail.com",
    password: "Ramjack@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
