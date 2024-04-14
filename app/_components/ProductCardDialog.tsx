import { FC } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IProduct } from "../_interfaces/product.interface";
import ProductDetail from "./ProductDetail";

interface IProductCardDialog {
  product: IProduct;
}

const ProductCardDialog: FC<IProductCardDialog> = ({ product }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="text-primary hover:text-white hover:bg-primary">
        Add to cart
      </Button>
    </DialogTrigger>
    <DialogContent>
      <ProductDetail product={product} />
    </DialogContent>
  </Dialog>
);

export default ProductCardDialog;
