/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";

interface ICartAsList {
  cartItemList: any;
  onDeleteItem: any;
}

const CartAsList: FC<ICartAsList> = () => {
  return <div>CartAsList</div>;
};

export default CartAsList;
