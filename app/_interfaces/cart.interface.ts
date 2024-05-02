import { IProduct } from "./product.interface";

export interface IAddToCartData {
  quantity: number;
  amount: string;
  product: number;
  users_permissions_users: number;
  userId: number;
}

interface ICartItemAttributes {
  quantity: number;
  amount: string;
  product: { data: IProduct };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users_permissions_users: any;
  userId: number;
}

export interface ICartItem {
  id: number;
  attributes: ICartItemAttributes;
}
