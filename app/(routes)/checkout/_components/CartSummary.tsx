"use client";

import { useContext, useEffect } from "react";
import { ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

import CartContext from "@/app/_context/cartContext";
import { deliveryCost } from "@/app/constants";
import { Button } from "@/components/ui/button";
import { getUserFromCookies } from "@/app/_utils/utils";
import { IUser } from "@/app/_interfaces/user.interface";
import { createOrder } from "@/app/_api/strapi";
import { toast } from "sonner";
import { ICreateOrderData } from "@/app/_interfaces/order.interface";

const CartSummary = () => {
  const router = useRouter();
  const jwt = getCookie("jwt");
  const user: IUser | null = getUserFromCookies();

  useEffect(() => {
    if (!jwt) router.push("/login");
  }, []);

  const { data, count, deleteArrFromCart } = useContext(CartContext);

  const subtotal = data.reduce((sum, el) => sum + el.amount, 0);

  const calculateTotalAmount = () => Math.floor(subtotal * 1.03 + 15);

  const onOrderCreate = () => {
    if (user?.id && jwt) {
      const payload: ICreateOrderData = {
        user_adress: 1, // todo: add real!
        paymentId: "todo",
        total: calculateTotalAmount(),
        orderItemList: data,
        userId: user?.id,
      };

      console.log("Create with Payload:", payload);

      createOrder(payload, jwt).then(() => {
        toast("Order Places Successfully!");
        // clear User Cart!
        const delArray = payload.orderItemList.map((el) => el.id);
        console.log(delArray);
        deleteArrFromCart(delArray, payload.userId, jwt);
        router.push("/order-final");
      });
    } else {
      console.log("Can't Create Order ==> no token or userId!");
    }
  };

  return (
    <div className="mx-10 border">
      <h2 className="p-3 bg-gray-200 font-bold text-center">Total Cart ({count})</h2>
      <div className="p-4 flex flex-col gap-4">
        <h2 className="font-bold flex justify-between">
          Subtotal : <span>${subtotal}</span>
        </h2>
        <hr></hr>
        <h2 className="flex justify-between">
          Delivery : <span>${deliveryCost.toFixed(2)}</span>
        </h2>
        <h2 className="flex justify-between">
          Tax (3%): <span>${(subtotal * 0.03).toFixed(2)}</span>
        </h2>
        <hr></hr>
        <h2 className="font-bold flex justify-between">
          Total (rounds down): <span>${calculateTotalAmount()}</span>
        </h2>
        <Button onClick={onOrderCreate} disabled={subtotal === 0}>
          {/* todo: Payment == add integration! */}
          Create Order <ArrowBigRight />
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
