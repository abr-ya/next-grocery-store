import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ICategory } from "../_interfaces/category.interface";

interface ICategoryList {
  data: ICategory[];
}

const CategoryList: FC<ICategoryList> = ({ data }) => {
  const backUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2">
        {data.map((category) => (
          <Link
            href={"/products-category/" + category.attributes.name}
            className="flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600"
            key={category.attributes.name}
          >
            <Image
              src={`${backUrl}${category?.attributes?.icon?.data[0].attributes?.url}`}
              width={50}
              height={50}
              alt="icon"
              className="group-hover:scale-125 transition-all ease-in-out"
            />
            <h2 className="text-green-800 group-hover:text-white">{category.attributes.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
