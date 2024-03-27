import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false
  });

  instance.interceptors.response.use((response: any) => {
    return response;
  });

  return instance;
};

const axiosInstance: AxiosInstance = createAxiosInstance();

export default axiosInstance;
