import { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('@ControleDespesas:user');
        const savedToken = localStorage.getItem('@ControleDespesas:token');

        if (savedUser && savedToken) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    async function login(email, senha) {
        try {
            // Forçamos o envio das chaves exatas que o seu Backend MySQL espera
            const response = await api.post('/auth/login', { 
                email: email, 
                senha: senha 
            });
            
            const { user: userData, token } = response.data;

            localStorage.setItem('@ControleDespesas:user', JSON.stringify(userData));
            localStorage.setItem('@ControleDespesas:token', token);

            setUser(userData);
        } catch (error) {
            throw new Error(error.response?.data?.error || "E-mail ou senha incorretos.");
        }
    }

    function logout() {
        localStorage.removeItem('@ControleDespesas:user');
        localStorage.removeItem('@ControleDespesas:token');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}