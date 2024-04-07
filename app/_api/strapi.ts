import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const axiosClient = axios.create({ baseURL });

export const getCategories = () =>
  axiosClient.get("/categories?sort[0]=id:asc&populate=*").then((resp) => resp.data.data);

export const getSlider = (id: number) => axiosClient.get(`/sliders/${id}?populate=*`).then((resp) => resp.data.data);

export const getProducts = () => axiosClient.get("/products?populate=*").then((resp) => resp.data.data);
