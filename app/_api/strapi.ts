import axios from "axios";
import { ILoginPayload, IRegisterPayload } from "../_interfaces/user.interface";
import { IAddToCartData, ICartItem } from "../_interfaces/cart.interface";
import { normalizeCartItem, normalizeOrder } from "./normalize";
import { ICreateOrderData, IOrder } from "../_interfaces/order.interface";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const optWithAuth = (token: string) => ({ headers: { Authorization: `Bearer ${token}` } });

const axiosClient = axios.create({ baseURL });

export const getCategories = () =>
  axiosClient.get("/categories?sort[0]=id:asc&populate=*").then((resp) => resp.data.data);

export const getSlider = (id: number) => axiosClient.get(`/sliders/${id}?populate=*`).then((resp) => resp.data.data);

export const getProducts = () => axiosClient.get("/products?populate=*").then((resp) => resp.data.data);

export const getProductsByCategory = (category: string) =>
  axiosClient.get(`/products?filters[categories][name][$in]=${category}&populate=*`).then((resp) => resp.data.data);

// user
export const registerRequest = (data: IRegisterPayload) => axiosClient.post("/auth/local/register", data);

export const loginRequest = (data: ILoginPayload) => axiosClient.post("/auth/local", data);

export const getUserAdresses = (userId: number) => {
  const filters = `filters[userId][$eq]=${userId}`;

  return axiosClient.get(`/user-adresses?${filters}`).then((resp) => resp.data.data);
};

// cart
export const addToCartRequest = (data: IAddToCartData, jwt: string) =>
  axiosClient.post("/user-carts", { data }, optWithAuth(jwt));

export const getUserCartRequest = (userId: number, jwt: string) => {
  const filters = `filters[userId][$eq]=${userId}`;
  const populate = "[populate][product][populate][images][populate]";

  return axiosClient.get(`/user-carts?${filters}&${populate}`, optWithAuth(jwt)).then((resp) => {
    const data: ICartItem[] = resp.data.data;

    return data.map((item) => normalizeCartItem(item));
  });
};

export const delFromCartRequest = (id: number, jwt: string) =>
  axiosClient.delete(`/user-carts/${id}`, optWithAuth(jwt));

export const updateCartRequest = (data: IAddToCartData, id: number, jwt: string) =>
  axiosClient.put(`/user-carts/${id}`, { data }, optWithAuth(jwt));

// orders
export const createOrder = (data: ICreateOrderData, jwt: string) =>
  axiosClient.post("/orders", { data }, optWithAuth(jwt));

export const getUserOrdersRequest = (userId: number, jwt: string) => {
  const filters = `filters[userId][$eq]=${userId}`;
  const populate = "populate[user_adress][populate]&populate[orderItemList][populate][product][populate][images]=url";

  return axiosClient.get(`/orders?${filters}&${populate}`, optWithAuth(jwt)).then((resp) => {
    const data: IOrder[] = resp.data.data;

    return data.map((item) => normalizeOrder(item));
  });
};
