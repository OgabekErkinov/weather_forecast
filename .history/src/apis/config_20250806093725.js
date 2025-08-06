import axios from 'axios';

const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?key=db718c32fe914a9a8bf40756250608&q=London&days=5&aqi=yes&alerts=yes"
const api_key = import.meta.env.VITE_API_KEY

const api = axios.create({
  baseURL: 'http://localhost:3000', 
  headers: {
    'x-api-key': ,
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

export default api;
