import { FC } from "react";
import { IOrderItem } from "@/app/_interfaces/order.interface";

interface IOrderItems {
  data: IOrderItem[];
}

const OrderItems: FC<IOrderItems> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className="w-[60%]">
          <h3>item: {item.product.data.attributes.title}</h3>
          <hr className="mt-3"></hr>
        </div>
      ))}
    </>
  );
};

export default OrderItems;
