import { HeaderLeft, HeaderRight } from ".";
import { CartProvider } from "../_context/cartContext";
import ClientOnly from "./ClientOnly";

const Header = () => (
  <div className="p-5 shadow-sm flex justify-between">
    <HeaderLeft />
    {/* To fix Hydration failed  */}
    <ClientOnly>
      <CartProvider>
        <HeaderRight />
      </CartProvider>
    </ClientOnly>
  </div>
);

export default Header;
