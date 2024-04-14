import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ICategory } from "@/app/_interfaces/category.interface";
import { gitCatImgSrc } from "@/app/_utils/utils";

interface ICategoryMenu {
  active: string;
  data: ICategory[];
}

const CategoryMenu: FC<ICategoryMenu> = ({ active, data }) => (
  <div className="flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center">
    {data.map((category) => (
      <Link
        key={category.attributes.name}
        href={`../category/${category.attributes.name}`}
        className={`flex flex-col items-center bg-green-50 hover:bg-green-600
                gap-2 p-3 rounded-lg group cursor-pointer w-[150px] min-w-[100px]
                ${active == category.attributes.name && "bg-green-600 text-white"}
                `}
      >
        <Image
          src={gitCatImgSrc(category)}
          width={50}
          height={50}
          alt="icon"
          className="group-hover:scale-125 transition-all ease-in-out"
        />
        <h2 className={`text-green-800 group-hover:text-white ${active == category.attributes.name && " text-white"}`}>
          {category.attributes.name}
        </h2>
      </Link>
    ))}
  </div>
);

export default CategoryMenu;
