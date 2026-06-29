import axios from 'axios';

const api = axios.create({
    // Endereço padrão da sua API que está rodando no terminal da esquerda
    baseURL: 'http://localhost:3000/api' 
});

// Interceptor: Grampeia o Token JWT automaticamente em todas as requisições enviadas
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('@ControleDespesas:token');
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
});

export default api;