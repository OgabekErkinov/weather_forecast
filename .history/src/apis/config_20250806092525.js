import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', 
  headers: {
    'x-api-key': 'mening_maxfiy_kalitim',
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

export default api;
