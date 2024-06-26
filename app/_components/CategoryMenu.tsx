import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutGrid } from "lucide-react";

import { getCategories } from "../_api/strapi";
import { ICategory } from "../_interfaces/category.interface";
import { gitCatImgSrc } from "../_utils/utils";

const CategoryMenu = async () => {
  const categoriesData: ICategory[] = await getCategories();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
          <LayoutGrid className="h-5 w-5" /> Category
        </h2>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {categoriesData.map((category, index) => (
          <Link key={index} href={`/category/${category.attributes.name}`}>
            <DropdownMenuItem className="flex gap-4 p-2 items-center cursor-pointer my-2 outline-none hover:bg-slate-200 rounded-xl">
              <Image src={gitCatImgSrc(category)} unoptimized={true} alt="icon" width={30} height={30} />
              <h2 className="">{category.attributes.name}</h2>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryMenu;
