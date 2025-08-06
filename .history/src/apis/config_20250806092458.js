// services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // sizning backend manzilingiz
  headers: {
    'x-api-key': 'mening_maxfiy_kalitim',
    'Content-Type': 'application/json'
  },
  timeout: 5000 // optional: 5 sekund ichida javob bo'lmasa, xatolik qaytaradi
});

export default api;
