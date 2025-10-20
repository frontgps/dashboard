import axios from 'axios';
import { BASE_URL } from './baseUrl';

export const requestInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Custom-Header': 'foobar',
  },
});
