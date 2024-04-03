import { IMedia } from "./media.interface";

export interface ICategory {
  id: number;
  attributes: ICategoryAttributes;
}

interface ICategoryAttributes {
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: {
    data: IMedia[];
  };
}
