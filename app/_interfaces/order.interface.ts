import { IAppCartItem } from "./cart.interface";
import { IProduct, IProductAttributes } from "./product.interface";
import { IUserAdressAttributes } from "./user.interface";

export interface ICreateOrderData {
  user_adress: number;
  total: number;
  userId: number;
  paymentId: string;
  orderItemList: IAppCartItem[];
}

export interface IOrderItem {
  id: number;
  price: number;
  product: { data: IProduct }; // relation
  quantity: number;
}

interface IOrderAttributes {
  createdAt: string;
  updatedAt: string;
  orderItemList: IOrderItem[];
  paymentId: string;
  total: number;
  userId: number;
  user_adress: {
    data: {
      attribures: IUserAdressAttributes;
      id: number;
    };
  };
}

export interface IOrder {
  id: number;
  attributes: IOrderAttributes;
}

export interface IAppOrderItem {
  id: number;
  price: number;
  product: IProductAttributes;
  quantity: number;
}

export interface IAppOrder {
  id: number;
  total: number;
  paymentId: string;
  itemList: IAppOrderItem[];
  createdAt: string;
}
