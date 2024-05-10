"use client";

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { IUser } from "@/app/_interfaces/user.interface";
import { getUserFromCookies } from "@/app/_utils/utils";
import { getUserOrdersRequest } from "@/app/_api/strapi";
import { IAppOrder } from "@/app/_interfaces/order.interface";

const OrdersList = () => {
  const router = useRouter();
  const jwt = getCookie("jwt");
  const user: IUser | null = getUserFromCookies();

  const [loading, setLoading] = useState(false);
  const [orderList, setOrderList] = useState<IAppOrder[]>([]);

  const getOrdersToState = async (userId: number, token: string) => {
    setLoading(true);
    const orderList = await getUserOrdersRequest(userId, token);
    setOrderList(orderList);
    setLoading(false);
  };

  useEffect(() => {
    if (!jwt || !user) {
      router.push("/login");
    } else {
      getOrdersToState(user.id, jwt);
    }
  }, []);

  if (loading) return <>... loading ...</>;

  return (
    <div>
      {orderList.map((order) => (
        <p key={order.id}>
          order {order.id} == total: {order.total}
        </p>
      ))}
    </div>
  );
};

export default OrdersList;
