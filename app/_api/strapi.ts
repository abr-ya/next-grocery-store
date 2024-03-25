import axios from "axios";

// todo: => ENV
const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const axiosClient = axios.create({ baseURL });

export const getCategory = () => axiosClient.get("/categories?sort[0]=id:asc&populate=*");
