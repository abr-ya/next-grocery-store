"use client";

import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCookie } from "cookies-next";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import UserMenu from "./UserMenu";
import CartAsList from "./CartAsList";
import { Button } from "@/components/ui/button";
import { useContext, useEffect } from "react";
import { getUserFromCookies } from "../_utils/utils";
import { IUser } from "../_interfaces/user.interface";
import { TextLoader } from ".";
import CartContext from "../_context/cartContext";

const HeaderRight = () => {
  const pathname = usePathname();
  const jwt = getCookie("jwt");
  const user: IUser | null = getUserFromCookies();

  const { getUserCart, data, loading, count } = useContext(CartContext);

  useEffect(() => {
    console.log(jwt ? "isUser" : "isGuest");
    getUserCart(user?.id, jwt);
  }, [pathname]);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const subtotal = data.reduce((sum, el) => sum + el.amount, 0);

  const renderUserButton = () =>
    !jwt ? (
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
    ) : (
      <UserMenu />
    );

  const renderCartSheet = (count: number) => {
    if (!jwt) return null;

    return (
      <Sheet>
        <SheetTrigger>
          <h2 className="flex gap-2 items-center text-lg">
            <ShoppingBasket className="h-7 w-7" />
            <span className="bg-primary text-white  px-2 rounded-full">
              <TextLoader loading={loading} text={count} />
            </span>
          </h2>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="bg-primary text-white font-bold text-lg p-2">My Cart</SheetTitle>
          </SheetHeader>
          <CartAsList cartItemList={false} onDeleteItem={false} />
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
    );
  };

  return (
    <div className="flex gap-5 items-center">
      {renderCartSheet(count)}
      {renderUserButton()}
    </div>
  );
};

export default HeaderRight;
