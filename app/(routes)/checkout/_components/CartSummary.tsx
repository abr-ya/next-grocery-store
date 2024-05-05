"use client";

import { useContext, useEffect } from "react";
import { ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

import CartContext from "@/app/_context/cartContext";
import { deliveryCost } from "@/app/constants";
import { Button } from "@/components/ui/button";

const CartSummary = () => {
  const router = useRouter();
  const jwt = getCookie("jwt");

  useEffect(() => {
    if (!jwt) router.push("/login");
  }, []);

  const { data, count } = useContext(CartContext);

  const subtotal = data.reduce((sum, el) => sum + el.amount, 0);

  const calculateTotalAmount = () => (subtotal * 1.03 + 15).toFixed(2);

  const onOrderCreate = () => {
    console.log("Create");
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
          Tax (3%) : <span>${(subtotal * 0.03).toFixed(2)}</span>
        </h2>
        <hr></hr>
        <h2 className="font-bold flex justify-between">
          Total : <span>${calculateTotalAmount()}</span>
        </h2>
        <Button onClick={onOrderCreate}>
          Payment <ArrowBigRight />
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
