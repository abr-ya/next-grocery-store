"use client";

import { FC, ReactNode, createContext, useState } from "react";
import { addToCartRequest, delFromCartRequest, getUserCartRequest } from "../_api/strapi";
import { IAddToCartData, IAppCartItem } from "../_interfaces/cart.interface";
import { toast } from "sonner";

type CartContextType = ReturnType<typeof CartManager>;

const CartContext = createContext<CartContextType>({
  data: [],
  count: 0,
  loading: false,
  addToCart: async () => undefined,
  deleteFromCart: async () => undefined,
  getUserCart: async () => undefined,
});

// split Context to Manager + Provider like Jack No BS TS #25
// for example react-feedback-ts/blob/master/src/context/FeedbackContext.tsx
export const CartManager = (initialCart: IAppCartItem[]) => {
  const [data, setData] = useState(initialCart);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const getUserCart = async (userId: number, token: string) => {
    if (!userId || !token) {
      console.log("No userId || !token == cart is empty!");
      setData([]);
      setCount(0);
    } else {
      setLoading(true);
      const userCart = await getUserCartRequest(userId, token);
      const count = userCart.length;
      console.log("new count ==", count);

      // for test visual only!
      setTimeout(() => {
        setLoading(false);
        setData(userCart);
        setCount(count);
        console.log(userCart);
      }, 400);
    }
  };

  const addToCart = async (data: IAddToCartData, token: string) => {
    setLoading(true);
    addToCartRequest(data, token)
      .then((resp) => {
        console.log("Added to Cart result:", resp);
        toast("Added to Cart");
      })
      .catch((e) => {
        console.log("addToCartRequest", e);
        toast("Error while adding into cart");
      })
      .finally(() => {
        setLoading(false);
        getUserCart(data.userId, token);
      });
  };

  const deleteFromCart = async (id: number, userId: number, token: string) => {
    setLoading(true);
    delFromCartRequest(id, token)
      .then((resp) => {
        console.log("Deleted from Cart result:", resp);
        toast("Deleted from Cart");
      })
      .catch((e) => {
        console.log("deleteFromCart", e);
        toast("Error while deleted from Cart");
      })
      .finally(() => {
        setLoading(false);
        getUserCart(userId, token);
      });
  };

  return { data, count, loading, addToCart, deleteFromCart, getUserCart };
};

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <CartContext.Provider value={CartManager([])}>{children}</CartContext.Provider>
);

export default CartContext;
