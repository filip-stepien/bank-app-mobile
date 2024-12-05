import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://172.20.10.2:3000/',
  timeout: 3000,
});

export default axiosInstance;
