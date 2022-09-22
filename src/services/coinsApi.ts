import axiosClient from "./axiosClient";
export const getCoins = () => {
  return axiosClient.get("/coins");
};
export const getCoinsDetail = (id: string) => {
  return axiosClient.get(`/coin/${id}`);
};
