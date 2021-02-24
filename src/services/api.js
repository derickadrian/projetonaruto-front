import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost/projetonaruto"
});

export default api;
