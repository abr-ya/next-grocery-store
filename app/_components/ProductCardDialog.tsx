import { FC } from "react";
// import Image from "next/image";

import { IProduct } from "../_interfaces/product.interface";
import { Button } from "@/components/ui/button";

interface IProductCardDialog {
  product: IProduct;
}

const ProductCardDialog: FC<IProductCardDialog> = () => {
  return (
    <Button variant="outline" className="text-primary hover:text-white hover:bg-primary">
      Add to cart
    </Button>
  );
};

export default ProductCardDialog;
