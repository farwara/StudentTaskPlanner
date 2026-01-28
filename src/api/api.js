const API_URL = import.meta.env.VITE_API_URL;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
console.log("ENV API_URL =", import.meta.env.VITE_API_URL);
console.log("ENV PROJECT_ID =", import.meta.env.VITE_PROJECT_ID);
export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem("token");

    // 🔍 ADD THIS LINE (debug)
    console.log("Calling:", `${API_URL}${endpoint}`);

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "novi-education-project-id": PROJECT_ID,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        },
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Request failed");
    }

    // Handle empty responses (e.g. 204)
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        return null;
    }

    return response.json();
}