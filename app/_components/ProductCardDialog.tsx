import { FC } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";

import { IProduct } from "../_interfaces/product.interface";
import { Button } from "@/components/ui/button";
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
      <DialogHeader>
        <DialogDescription>
          <ProductDetail product={product} />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default ProductCardDialog;
