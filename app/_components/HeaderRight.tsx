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
import { usePathname } from "next/navigation";
import { getUserCartRequest } from "../_api/strapi";
import { getUserFromCookies } from "../_utils/utils";
import { IUser } from "../_interfaces/user.interface";

const HeaderRight = () => {
  const pathname = usePathname();
  const jwt = getCookie("jwt");
  const user: IUser | null = getUserFromCookies();

  useEffect(() => {
    console.log(jwt ? "isUser" : "isGuest");
    if (jwt && user) getUserCart(user.id, jwt);
  }, [pathname]);

  // todo: temp!
  const totalCartItem = 10;
  const subtotal = 50;

  const getUserCart = async (userId: number, token: string) => {
    const userCart = await getUserCartRequest(userId, token);
    console.log(userCart);
  };

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
