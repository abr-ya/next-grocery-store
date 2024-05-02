import { useEffect, useState } from "react";
import { getUserCartRequest } from "../_api/strapi";
import { IAppCartItem } from "../_interfaces/cart.interface";

const useCart = (userId: number, token: string) => {
  const [data, setData] = useState<IAppCartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const getUserCart = async (userId: number, token: string) => {
    if (!userId || !token) {
      console.log("No userId || !token == cart is empty!");
      setData([]);
      return;
    }

    setLoading(true);
    const userCart = await getUserCartRequest(userId, token);
    setTimeout(() => {
      setLoading(false);
      setData(userCart);
      console.log(userCart);
    }, 400);
  };

  useEffect(() => {
    getUserCart(userId, token);
  }, [userId, token]);

  return { data, loading };
};

export default useCart;
