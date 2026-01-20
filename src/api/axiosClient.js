import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://novi-backend-api-wgsgz.ondigitalocean.app',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attach token automatically
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosClient;