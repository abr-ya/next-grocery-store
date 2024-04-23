"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserMenu from "./UserMenu";
import { ShoppingBasket } from "lucide-react";
import CartAsList from "./CartAsList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

const HeaderRight = () => {
  const jwt = getCookie("jwt");

  useEffect(() => {
    console.log(jwt);
  }, []);

  // todo: temp!
  const totalCartItem = 10;
  const subtotal = 50;

  console.log(jwt);

  const renderUserButton = () =>
    !jwt ? (
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
    ) : (
      <UserMenu />
    );

  return (
    <div className="flex gap-5 items-center">
      <Sheet>
        <SheetTrigger>
          <h2 className="flex gap-2 items-center text-lg">
            <ShoppingBasket className="h-7 w-7" />
            <span className="bg-primary text-white  px-2 rounded-full">{totalCartItem}</span>
          </h2>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="bg-primary text-white font-bold text-lg p-2">My Cart</SheetTitle>
            <SheetDescription>
              <CartAsList cartItemList={false} onDeleteItem={false} />
            </SheetDescription>
          </SheetHeader>
          <SheetClose asChild>
            <div className="absolute w-[90%] bottom-6 flex flex-col">
              <h2 className="text-lg font-bold flex justify-between">
                Subtotal
                <span>${subtotal}</span>
              </h2>
              <Button>Checkout</Button>
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
      {renderUserButton()}
    </div>
  );
};

export default HeaderRight;
