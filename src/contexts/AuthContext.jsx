import { createContext, useContext, useMemo, useState } from 'react';
import api from '../services/api.js';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('@despesas:token'));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('@despesas:user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  async function login(email, senha) {
    const { data } = await api.post('/auth/login', { email, senha });

    localStorage.setItem('@despesas:token', data.token);
    localStorage.setItem('@despesas:user', JSON.stringify(data.user));

    setToken(data.token);
    setUser(data.user);

    return data;
  }

  async function register(nome, email, senha) {
    const { data } = await api.post('/users', { nome, email, senha });
    return data;
  }

  function logout() {
    localStorage.removeItem('@despesas:token');
    localStorage.removeItem('@despesas:user');
    setToken(null);
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      login,
      register,
      logout,
    }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
