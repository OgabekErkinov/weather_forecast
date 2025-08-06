import axios from 'axios';

const BASE

const api = axios.create({
  baseURL: 'http://localhost:3000', 
  headers: {
    'x-api-key': 'db718c32fe914a9a8bf40756250608',
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

export default api;
