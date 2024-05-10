import { IAppCartItem, ICartItem } from "../_interfaces/cart.interface";
import { IAppOrder, IOrder } from "../_interfaces/order.interface";

export const normalizeCartItem = (item: ICartItem) => {
  const newItem: IAppCartItem = {
    id: item.id,
    title: item.attributes.product.data.attributes.title,
    quantity: item.attributes.quantity,
    amount: item.attributes.amount,
    image: item.attributes.product?.data.attributes.images.data[0].attributes.url,
    price: item.attributes.product.data.attributes.price || item.attributes.product.data.attributes.mrp,
    product: item.attributes.product.data.id,
  };

  return newItem;
};

export const normalizeOrder = (order: IOrder) => {
  const newItem: IAppOrder = {
    id: order.id,
    total: order.attributes.total,
    paymentId: order.attributes.paymentId,
    itemList: order.attributes.orderItemList,
    createdAt: order.attributes.createdAt,
  };

  return newItem;
};
