import { Tuser } from "./user";

export type Tcmt = {
  _id?: string;
  userId: string;
  productId: string;
  content: string;
  createdAt?: Date;
  user?: {
    name: Tuser
  };
  slug?: string;
};