import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Search } from "lucide-react";
import CategoryMenu from "./CategoryMenu";

const HeaderLeft = () => {
  return (
    <div className="flex items-center gap-8">
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={150} height={100} className="cursor-pointer" />
      </Link>
      <CategoryMenu />
      <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
        <Search />
        <input type="text" placeholder="Search" className="outline-none" />
      </div>
    </div>
  );
};

export default HeaderLeft;
