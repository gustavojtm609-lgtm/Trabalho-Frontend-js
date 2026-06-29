import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

import { Login } from '../pages/Login/Login';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Expenses } from "../pages/Despesas/expenses";
import { Categories } from '../pages/Categorias/categories';
import { Cadastro } from '../pages/Cadastro/Cadastro'; 

export function AppRoutes() {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="container text-center mt-5">
                <div className="spinner-border text-primary" role="status"></div>
            </div>
        );
    }

    return (
        <Routes>
            <Route path="/login" element={!signed ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={signed ? <Dashboard /> : <Navigate to="/login" />} />
            
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cadastro" element={<Cadastro />} /> 
            
            {/* Rota padrão: SEMPRE NO FINAL */}
            <Route path="*" element={<Navigate to={signed ? "/dashboard" : "/login"} />} />
        </Routes>
    );
}