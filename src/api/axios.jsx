import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://novi-dynamics-api.example.com', // placeholder
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;