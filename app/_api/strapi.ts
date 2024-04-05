import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const axiosClient = axios.create({ baseURL });

export const getCategories = () =>
  axiosClient.get("/categories?sort[0]=id:asc&populate=*").then((resp) => resp.data.data);

export const getSlider = () => axiosClient.get("/sliders?populate=*").then((resp) => resp.data.data);
