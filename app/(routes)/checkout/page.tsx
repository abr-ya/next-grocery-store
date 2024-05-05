import { IUserAdress } from "@/app/_interfaces/user.interface";
import CartSummary from "./_components/CartSummary";
import OrderUserForm from "./_components/OrderUserForm";
import { getUserAdresses } from "@/app/_api/strapi";

const Checkout = async () => {
  const userAdresses: IUserAdress[] = await getUserAdresses(1);

  // todo: data from left form + submit handler to Summary

  return (
    <div>
      <h1 className="page-header">Checkout</h1>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
        <OrderUserForm data={userAdresses} />
        <CartSummary />
      </div>
    </div>
  );
};

export default Checkout;
