"use client";

import React, { FC, useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IProduct } from "../_interfaces/product.interface";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { getCookie } from "cookies-next";
import { IAddToCartData, IAppCartItem } from "../_interfaces/cart.interface";
import { IUser } from "../_interfaces/user.interface";
import { backUrl, getUserFromCookies } from "../_utils/utils";
import { TextLoader } from ".";
import CartContext from "../_context/cartContext";
import { updateCartRequest } from "../_api/strapi";

interface IProductDetail {
  product: IProduct;
}

const ProductDetail: FC<IProductDetail> = ({ product }) => {
  const jwt = getCookie("jwt");
  const user: IUser | null = getUserFromCookies();

  const { addToCart, data, loading } = useContext(CartContext);
  const prodInCart: IAppCartItem | undefined = data.filter((el) => el.product === product.id)[0];
  console.log(prodInCart);

  const router = useRouter();
  const [quantity, setQuantity] = useState(prodInCart ? prodInCart.quantity : 1);

  const getAmount = () => (quantity * product.attributes.price || product.attributes.mrp).toFixed(2);

  const changeCartHandler = () => {
    if (jwt && user) {
      const data: IAddToCartData = {
        quantity,
        amount: getAmount(),
        product: product.id,
        users_permissions_users: user.id,
        userId: user.id,
      };
      if (prodInCart) {
        console.log("update!", data);
        updateCartRequest(data, prodInCart.id, jwt); // todo: to Context, Update All Cart!
      } else {
        addToCart(data, jwt);
      }
    } else {
      router.push("/login");
    }
  };

  const isButtonDisable = loading || prodInCart?.quantity === quantity;
  const buttonLabel = `${!prodInCart ? "Add to" : "Update"} Cart`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-4 bg-white text-black">
      <Image
        src={`${backUrl}${product?.attributes?.images?.data[0].attributes?.url}`}
        alt={product.attributes.title}
        width={300}
        height={300}
        className="bg-slate-200 p-2 h-[300px] w-[300px] object-contain rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">{product.attributes.title}</h2>
        <p className="text-sm  text-gray-500">{product.attributes.description}</p>
        <div className="flex gap-2">
          {product.attributes.price && <span className="font-bold text-3xl">${product.attributes.price}</span>}
          <span className={`font-bold text-3xl ${product.attributes.price && "line-through text-gray-500"}`}>
            ${product.attributes.mrp}
          </span>
        </div>
        <span className="font-medium text-lg">Quantity ({product.attributes.quantityType})</span>
        <div className="flex flex-col items-baseline gap-3">
          <div className="flex gap-3 items-center">
            <div className="p-2 border flex gap-10 items-center px-5">
              <button disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <span className="text-2xl font-bold"> = ${getAmount()}</span>
          </div>
          <Button className="flex gap-3" onClick={changeCartHandler} disabled={isButtonDisable}>
            <ShoppingBasket />
            <TextLoader loading={loading} text={buttonLabel} />
          </Button>
        </div>
        <span>
          <span className="font-bold">Category:</span> {product.attributes.categories.data[0].attributes.name}
        </span>
      </div>
    </div>
  );
};

export default ProductDetail;
