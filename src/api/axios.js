import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "novi-education-project-id": import.meta.env.VITE_API_KEY,
        "Content-Type": "ap" +
            "plication/json",
    },
});

export default axiosInstance;
