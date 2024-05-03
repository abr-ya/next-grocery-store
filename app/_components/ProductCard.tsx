import { FC } from "react";
import Image from "next/image";

import { IProduct } from "../_interfaces/product.interface";
import { ProductCardDialog } from ".";
import { backUrl } from "../_utils/utils";

interface IProductCard {
  product: IProduct;
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  // todo move to ??
  const flexCenter = "flex flex-col items-center justify-center";
  const cardHover = "hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer";

  return (
    <div className={`p-2 md:p-6  gap-3 border rounded-lg ${flexCenter} ${cardHover}`}>
      <Image
        src={`${backUrl}${product?.attributes?.images?.data[0].attributes?.url}`}
        width={500}
        height={200}
        alt={product.attributes.title}
        className="h-[200px] w-[200px] object-contain"
      />
      <h2 className="font-bold text-lg">{product.attributes.title}</h2>
      <div className="flex gap-3">
        {product.attributes.price && <h2 className="font-bold text-lg">${product.attributes.price}</h2>}
        <h2 className={`font-bold text-lg ${product.attributes.price && "line-through text-gray-500"}`}>
          ${product.attributes.mrp}
        </h2>
      </div>
      <ProductCardDialog product={product} />
    </div>
  );
};

export default ProductCard;
