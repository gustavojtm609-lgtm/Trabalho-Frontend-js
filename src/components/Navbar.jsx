import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="topbar">
      <div>
        <strong className="brand">Controle de Despesas</strong>
        <p className="user-text">Olá, {user?.nome || 'usuário'}</p>
      </div>

      <nav className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/categorias">Categorias</NavLink>
        <NavLink to="/despesas">Despesas</NavLink>
      </nav>

      <div className="topbar-actions">
        <button className="btn btn-ghost" onClick={toggleTheme} type="button">
          {darkMode ? 'Modo claro' : 'Modo escuro'}
        </button>
        <button className="btn btn-danger" onClick={logout} type="button">
          Sair
        </button>
      </div>
    </header>
  );
}
