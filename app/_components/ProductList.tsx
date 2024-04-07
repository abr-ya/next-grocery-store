import { FC } from "react";
import { IProduct } from "../_interfaces/product.interface";

interface IProductList {
  data: IProduct[];
}

const ProductList: FC<IProductList> = ({ data }) => (
  <div className="mt-8">
    <h2 className="main-h2">Our Popular Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
      {data?.map((item) => <span key={item.attributes.slug}>{item.attributes.title}</span>)}
    </div>
  </div>
);

export default ProductList;
