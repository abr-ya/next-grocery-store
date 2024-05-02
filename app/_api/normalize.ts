import { ICartItem } from "../_interfaces/cart.interface";

export const normalizeCartItem = (item: ICartItem) => {
  const newItem = {
    id: item.id,
    title: item.attributes.product.data.attributes.title,
    quantity: item.attributes.quantity,
    amount: item.attributes.amount,
    image: item.attributes.product?.data.attributes.images.data[0].attributes.url,
    mrp: item.attributes.product.data.attributes.mrp,
    productId: item.attributes.product.data.id,
  };

  return newItem;
};
