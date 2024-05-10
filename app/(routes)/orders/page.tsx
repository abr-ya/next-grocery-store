import OrdersList from "./_components/OrdersList";

// can't use token and user from cookie on server ==> Client OrdersList
const page = () => (
  <div>
    <h1 className="page-header">My Orders</h1>
    <div className="py-4 mx-7 md:mx-12">
      <h2 className="main-h2">Order History</h2>
      <OrdersList />
    </div>
  </div>
);

export default page;
