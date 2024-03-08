// axios.ts
import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false
  });
};

const instance: AxiosInstance = createAxiosInstance();

export default instance;
