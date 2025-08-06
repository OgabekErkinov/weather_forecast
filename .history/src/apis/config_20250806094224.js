import axios from 'axios';

const BASE_URL = "http://api.weatherapi.com/v1"
const api_key = import.meta.env.VITE_API_KEY

const privateApi = axios.create({
  baseURL: 'http://localhost:3000', 
  headers: {
    'x-api-key': api_key,
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

export default privateApi;
