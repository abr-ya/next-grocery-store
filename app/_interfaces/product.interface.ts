import { ICategory } from "./category.interface";
import { IMedia } from "./media.interface";

export interface IProduct {
  id: number;
  attributes: IProductAttributes;
}

interface IProductAttributes {
  title: string;
  description: string;
  mrp: number;
  price: number;
  quantityType: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: {
    data: IMedia[];
  };
  categories: {
    data: ICategory[]; // todo: продумать интерфейс без иконок
  };
}
