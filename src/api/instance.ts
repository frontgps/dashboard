import axios from "axios";
import { BASE_URL } from "./baseUrl";

export const requestInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });