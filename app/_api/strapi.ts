import axios from "axios";
import { ILoginPayload, IRegisterPayload } from "../_interfaces/user.interface";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const axiosClient = axios.create({ baseURL });

export const getCategories = () =>
  axiosClient.get("/categories?sort[0]=id:asc&populate=*").then((resp) => resp.data.data);

export const getSlider = (id: number) => axiosClient.get(`/sliders/${id}?populate=*`).then((resp) => resp.data.data);

export const getProducts = () => axiosClient.get("/products?populate=*").then((resp) => resp.data.data);

export const getProductsByCategory = (category: string) =>
  axiosClient.get(`/products?filters[categories][name][$in]=${category}&populate=*`).then((resp) => resp.data.data);

export const registerRequest = (data: IRegisterPayload) => axiosClient.post("/auth/local/register", data);

export const loginRequest = (data: ILoginPayload) => axiosClient.post("/auth/local", data);
