"use client";

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import moment from "moment";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { IUser } from "@/app/_interfaces/user.interface";
import { getUserFromCookies } from "@/app/_utils/utils";
import { getUserOrdersRequest } from "@/app/_api/strapi";
import { IAppOrder } from "@/app/_interfaces/order.interface";
import OrderItems from "./OrderItems";

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
        <Collapsible key={order.id}>
          <CollapsibleTrigger>
            <div className="border p-2 bg-slate-100 flex gap-24">
              <h2>
                <span className="font-bold mr-2">Order ID: </span>
                {order.id}
              </h2>
              <h2>
                <span className="font-bold mr-2">Order Date: </span>
                {moment(order?.createdAt).format("DD MMM yyy HH:mm")}
              </h2>
              <h2>
                <span className="font-bold mr-2">Total Amount:</span> {order.total}
              </h2>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <OrderItems data={order.itemList} />
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default OrdersList;
