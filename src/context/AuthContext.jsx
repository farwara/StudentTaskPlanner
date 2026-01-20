
import { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: null,
        token: null,
    });

    const login = (token, user) => {
        setAuth({
            isAuthenticated: true,
            user,
            token,
        });
    };

    const logout = () => {
        setAuth({
            isAuthenticated: false,
            user: null,
            token: null,
        });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
