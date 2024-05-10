import { IAppCartItem } from "./cart.interface";
import { IProduct } from "./product.interface";
import { IUserAdressAttributes } from "./user.interface";

export interface ICreateOrderData {
  user_adress: number;
  total: number;
  userId: number;
  paymentId: string;
  orderItemList: IAppCartItem[];
}

interface IOrderPosition {
  id: number;
  price: number;
  product: { data: IProduct }; // relation
  quantity: number;
}

interface IOrderAttributes {
  createdAt: string;
  updatedAt: string;
  orderItemList: IOrderPosition[];
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

export interface IAppOrder {
  id: number;
  total: number;
  paymentId: string;
  itemList: IOrderPosition[];
  createdAt: string;
}
