import { HeaderLeft, HeaderRight } from ".";
import ClientOnly from "./ClientOnly";

const Header = () => (
  <div className="p-5 shadow-sm flex justify-between">
    <HeaderLeft />
    {/* To fix Hydration failed  */}
    <ClientOnly>
      <HeaderRight />
    </ClientOnly>
  </div>
);

export default Header;
