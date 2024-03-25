"use client";

import React, { useEffect, useState } from "react";
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

import { getCategory } from "../_api/strapi";
import { ICategory } from "../_interfaces/category.interface";

const CategoryMenu = () => {
  const backUrl = process.env.NEXT_PUBLIC_API_URL;
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

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
        {categoryList.map((category, index) => (
          <Link key={index} href={"/products-category/" + category.attributes.name}>
            <DropdownMenuItem className="flex gap-4 p-2 items-center cursor-pointer my-2 outline-none hover:bg-slate-200 rounded-xl">
              <Image
                src={`${backUrl}${category?.attributes?.icon?.data[0].attributes?.url}`}
                unoptimized={true}
                alt="icon"
                width={30}
                height={30}
              />
              <h2 className="">{category.attributes.name}</h2>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryMenu;
