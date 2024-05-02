"use client";

import { createContext, useState } from "react";
import { getUserCartRequest } from "../_api/strapi";

const CartContext = createContext({
  data: [],
  count: 0,
  loading: false,
  getUserCart: () => false,
});

export const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const getUserCart = async (userId, token) => {
    console.log("cartContext ==> getUserCart");

    if (!userId || !token) {
      console.log("No userId || !token == cart is empty!");
      setData([]);
      setCount(0);
      return;
    }

    setLoading(true);
    const userCart = await getUserCartRequest(userId, token);
    setTimeout(() => {
      setLoading(false);
      setData(userCart);
      setCount(userCart.length);
      console.log(userCart);
    }, 400);
  };

  const context = {
    data,
    count,
    loading,
    getUserCart,
  };

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};

export default CartContext;
