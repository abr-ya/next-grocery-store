import { FC } from "react";

import { IProduct } from "../_interfaces/product.interface";
import { ProductCard } from ".";

interface IProductList {
  data: IProduct[];
  title: string;
}

const ProductList: FC<IProductList> = ({ data, title }) => (
  <div className="mt-8">
    <h2 className="main-h2">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
      {data?.map((item) => <ProductCard key={item.attributes.slug} product={item} />)}
    </div>
  </div>
);

export default ProductList;
