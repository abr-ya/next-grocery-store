import { IMedia } from "./media.interface";

interface ISlideAttributes {
  title: string;
  type: "banner" | "home";
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: {
    data: IMedia[];
  };
}

export interface ISliderData {
  id: number;
  attributes: ISlideAttributes;
}
