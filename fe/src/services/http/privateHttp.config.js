import axios from 'axios';
import { baseUrl } from './baseUrl';
import token from '../../utils/token'

const privateHttp = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

privateHttp.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

privateHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
        token.removeAccessToken();
        window.location.href = '/login';
        return Promise.reject(error);
      }
    return Promise.reject(error);
  },
);

export default privateHttp;