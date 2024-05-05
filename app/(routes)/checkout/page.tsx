import CartSummary from "./_components/CartSummary";
import OrderUserForm from "./_components/OrderUserForm";

const Checkout = () => {
  // todo: data from left form + submit handler to Summary

  return (
    <div>
      <h1 className="page-header">Checkout</h1>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
        <OrderUserForm />
        <CartSummary />
      </div>
    </div>
  );
};

export default Checkout;
