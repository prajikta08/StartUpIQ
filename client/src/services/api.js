import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL })

export const validateIdea = (idea) => API.post('/validate', { idea });
export const getHistory = () => API.get('/validate/history');