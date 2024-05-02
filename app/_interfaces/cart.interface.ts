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
  amount: number;
  product: { data: IProduct };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users_permissions_users: any;
  userId: number;
}

export interface ICartItem {
  id: number;
  attributes: ICartItemAttributes;
}

export interface IAppCartItem {
  id: number;
  title: string;
  quantity: number;
  amount: number;
  image: string;
  mrp: number;
  productId: number;
}
