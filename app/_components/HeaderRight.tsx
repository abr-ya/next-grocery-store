import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TopMenu from "./TopMenu";
import { ShoppingBasket } from "lucide-react";
import CartAsList from "./CartAsList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeaderRight = () => {
  const totalCartItem = 10;
  const isLogin = false;
  const subtotal = 50;

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

      {!isLogin ? (
        <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>
      ) : (
        <TopMenu />
      )}
    </div>
  );
};

export default HeaderRight;
