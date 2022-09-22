import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

const axiosClient = axios.create({
  baseURL: "https://api.coinranking.com/v2",
  paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});
axiosClient.interceptors.request.use(
  (config) => {
    const info = "coinranking484aa4572b108d44ee8dcaa34d607df292547695f0279bdc";

    if (config && config.headers && info) {
      config.headers.Authorization = `Bearer ${info}`;
      config.headers["Access-Control-Allow-Origin"] = `*`;
      config.headers[
        "Access-Control-Allow-Methods"
      ] = `GET,PUT,POST,DELETE,PATCH,OPTION`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401) {
    }
    if (error.status === 500) {
    }
    if (error.status === 400) {
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
