import { FC } from "react";
import { IProduct } from "../_interfaces/product.interface";

interface IProductDetail {
  product: IProduct;
}

const ProductDetail: FC<IProductDetail> = () => {
  return <div>ProductDetail</div>;
};

export default ProductDetail;
