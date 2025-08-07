import axios from 'axios';

const BASE_URL = "https://api.weatherapi.com/v1"

const privateApi = axios.create({
  baseURL: BASE_URL, 
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

export default privateApi;
