import { ICategory } from "../_interfaces/category.interface";

const backUrl = process.env.NEXT_PUBLIC_API_URL;

export const gitCatImgSrc = (cat: ICategory) => `${backUrl}${cat?.attributes?.icon?.data[0].attributes?.url}`;
