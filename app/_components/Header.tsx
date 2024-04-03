import { HeaderLeft, HeaderRight } from ".";

const Header = () => (
  <div className="p-5 shadow-sm flex justify-between">
    <HeaderLeft />
    <HeaderRight />
  </div>
);

export default Header;
