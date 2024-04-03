import { IMedia } from "./media.interface";

interface ISlideAttributes {
  title: string;
  type: "banner" | "home";
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: IMedia[];
  };
}

export interface ISlideData {
  id: number;
  attributes: ISlideAttributes;
}
