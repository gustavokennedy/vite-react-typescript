/*
______      ________ _____            _      _        _____ _      ____  _    _ _____  
/ __ \ \    / /  ____|  __ \     /\   | |    | |      / ____| |    / __ \| |  | |  __ \ 
| |  | \ \  / /| |__  | |__) |   /  \  | |    | |     | |    | |   | |  | | |  | | |  | |
| |  | |\ \/ / |  __| |  _  /   / /\ \ | |    | |     | |    | |   | |  | | |  | | |  | |
| |__| | \  /  | |____| | \ \  / ____ \| |____| |____ | |____| |___| |__| | |__| | |__| |
\____/   \/   |______|_|  \_\/_/    \_\______|______(_)_____|______\____/ \____/|_____/ 
overall.cloud
*/ 
import axios, { AxiosRequestConfig } from 'axios';

export const baseURL = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export const post = (url: string, data: any, config?: AxiosRequestConfig) => axiosInstance.post(url, data, config);

export const get = (url: string, config?: AxiosRequestConfig) => axiosInstance.get(url, config);

export const put = (url: string, data: any, config?: AxiosRequestConfig) => axiosInstance.put(url, data, config);

export const deleteRequest = (url: string, config?: AxiosRequestConfig) =>  axiosInstance.delete(url, config);
