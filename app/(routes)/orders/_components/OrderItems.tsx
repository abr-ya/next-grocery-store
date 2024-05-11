import { FC } from "react";
import Image from "next/image";

import { IAppOrderItem } from "@/app/_interfaces/order.interface";
import { backUrl } from "@/app/_utils/utils";

interface IOrderItems {
  data: IAppOrderItem[];
}

const OrderItems: FC<IOrderItems> = ({ data }) => (
  <>
    {data.map((item) => (
      <div className="w-[60%]" key={`order-item-${item.id}`}>
        <div className="grid grid-cols-5 mt-2 items-center">
          <Image
            src={`${backUrl}${item.product.images.data[0].attributes.url}`}
            width={60}
            height={60}
            alt={`img-${item.product.slug}`}
            className="bg-gray-100 rounded-md border"
          />
          <div className="col-span-2">
            <h3>{item.product.title}</h3>
            <span>Item Price: {item.price}</span>
          </div>
          <h3>Quantity: {item.quantity}</h3>
          <span>Price: {item.price * item.quantity}</span>
        </div>
        <hr className="mt-2" />
      </div>
    ))}
  </>
);

export default OrderItems;
