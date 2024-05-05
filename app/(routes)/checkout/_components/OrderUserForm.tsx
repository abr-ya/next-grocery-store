import { IUserAdress } from "@/app/_interfaces/user.interface";
import { FC } from "react";

interface IOrderUserForm {
  data: IUserAdress[];
}

const OrderUserForm: FC<IOrderUserForm> = ({ data }) => {
  const currentAddress = data[0].attributes; // todo: add select!
  const { name, email, phone, address } = currentAddress;

  return (
    <div className="md:col-span-2 mx-20">
      <h2 className="font-bold text-3xl">Billing Details</h2>
      <div>OrderUserForm == todo: Address profiles and select</div>
      <div>
        <p>name: {name}</p>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p>address: {address}</p>
      </div>
    </div>
  );
};

export default OrderUserForm;
