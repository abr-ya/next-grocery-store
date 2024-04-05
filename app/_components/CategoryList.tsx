import { FC } from "react";
import { ICategory } from "../_interfaces/category.interface";

interface ICategoryList {
  data: ICategory[];
}

const CategoryList: FC<ICategoryList> = () => {
  return <div>CategoryList</div>;
};

export default CategoryList;
