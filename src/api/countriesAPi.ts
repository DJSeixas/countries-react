import axios from "axios"

export interface AxiosResponse<T = any>  {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    request?: any;
  }

export default axios.create({
    baseURL: `https://restcountries.com/v2`
})