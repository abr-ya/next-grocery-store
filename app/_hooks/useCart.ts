import { useEffect, useState } from "react";
import { getUserCartRequest } from "../_api/strapi";
import { IAppCartItem } from "../_interfaces/cart.interface";

const useCart = (userId: number, token: string) => {
  const [data, setData] = useState<IAppCartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const getUserCart = async (userId: number, token: string) => {
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

  const reloadCart = () => getUserCart(userId, token);

  useEffect(() => {
    getUserCart(userId, token);
  }, [userId, token]);

  return { data, loading, reloadCart, count };
};

export default useCart;
