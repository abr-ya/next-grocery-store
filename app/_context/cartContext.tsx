"use client";

import { FC, ReactNode, createContext, useState } from "react";
import { getUserCartRequest } from "../_api/strapi";
import { IAppCartItem } from "../_interfaces/cart.interface";

type CartContextType = ReturnType<typeof CartManager>;

const CartContext = createContext<CartContextType>({
  data: [],
  count: 0,
  loading: false,
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

      setTimeout(() => {
        setLoading(false);
        setData(userCart);
        setCount(count);
        console.log(userCart);
      }, 400);
    }
  };

  return { data, count, loading, getUserCart };
};

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <CartContext.Provider value={CartManager([])}>{children}</CartContext.Provider>
);

export default CartContext;
