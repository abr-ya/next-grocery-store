import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { ICategory } from "../_interfaces/category.interface";
import { gitCatImgSrc } from "../_utils/utils";

interface ICategoryList {
  data: ICategory[];
}

const CategoryList: FC<ICategoryList> = ({ data }) => (
  <div className="mt-8">
    <h2 className="main-h2">Shop by Category</h2>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2">
      {data.map((category) => (
        <Link
          href={`/category/${category.attributes.name}`}
          className="flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600"
          key={category.attributes.name}
        >
          <Image
            src={gitCatImgSrc(category)}
            width={50}
            height={50}
            alt={`${category.attributes.name}-icon`}
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h2 className="text-green-800 group-hover:text-white">{category.attributes.name}</h2>
        </Link>
      ))}
    </div>
  </div>
);

export default CategoryList;
