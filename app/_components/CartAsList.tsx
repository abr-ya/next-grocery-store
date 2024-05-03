import { FC } from "react";
import { TrashIcon } from "lucide-react";
import Image from "next/image";

import { IAppCartItem } from "../_interfaces/cart.interface";
import { backUrl } from "../_utils/utils";

interface ICartAsList {
  data: IAppCartItem[];
  deleteHandler: (id: number) => void;
}

const CartAsList: FC<ICartAsList> = ({ data, deleteHandler }) => (
  <div>
    <div className="h-[500px] overflow-auto">
      {data.map(({ title, image, quantity, amount, id }) => (
        <div className="flex justify-between items-center p-2 mb-2" key={`cartItem${id}`}>
          <div className="flex gap-4 items-center">
            <Image src={`${backUrl}${image}`} width={64} height={64} alt={title} className="border p-2" />
            <div className="flex flex-col">
              <h3 className="font-bold">{title}</h3>
              <span>Quantity {quantity}</span>
              <span className="font-bold">$ {amount}</span>
            </div>
          </div>
          <TrashIcon className="cursor-pointer" onClick={() => deleteHandler(id)} />
        </div>
      ))}
    </div>
  </div>
);

export default CartAsList;
