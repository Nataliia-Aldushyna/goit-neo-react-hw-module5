import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.defaults.headers.common["Authorization"] = `Bearer ${import.meta.env.VITE_KEY}`;

export default api;