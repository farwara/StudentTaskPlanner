
import { createContext, useContext, useMemo, useState } from "react";
import { apiFetch } from "../api/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : null;
    });

    async function login(email, password) {
        const data = await apiFetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });

        // ✅ NOVI uses "token" (not accessToken)
        localStorage.setItem("token", data.token);

        // ✅ store user info if provided
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
    }

    async function register(email, password) {
        await apiFetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                roles: ["user"],
            }),
        });
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    }

    const value = useMemo(() => ({ user, login, register, logout }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}