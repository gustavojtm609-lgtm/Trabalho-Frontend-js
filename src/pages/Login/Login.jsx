import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { MdEmail, MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { IoWalletOutline } from 'react-icons/io5';
import './Login.css'; // Certifique-se que o CSS está nesta mesma pasta

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setErro('');

        if (!email || !senha) {
            setErro('Por favor, preencha todos os campos.');
            return;
        }

        try {
            setLoading(true);
            await login(email, senha);
            navigate('/dashboard');
        } catch (err) {
            setErro(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-screen">
            <div className="login-card-box">
                <div className="login-avatar-wrapper">
                    <div className="login-avatar-circle">
                        <IoWalletOutline size={32} />
                    </div>
                </div>

                <h2 className="login-main-title">Controle de Gastos</h2>
                <p className="login-sub-text">
                    Gerencie suas despesas com segurança e clareza.
                </p>
                
                {erro && <div className="alert alert-danger py-2 text-center small">{erro}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label login-field-label">E-mail</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0 text-muted">
                                <MdEmail size={20} />
                            </span>
                            <input 
                                type="email" 
                                className="form-control border-start-0 ps-0 shadow-none" 
                                placeholder="seu@email.com"
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label className="form-label login-field-label mb-0">Senha</label>
                            <Link to="/recuperar" className="login-green-link text-decoration-none">
                                Esqueci minha senha
                            </Link>
                        </div>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0 text-muted">
                                <MdLockOutline size={20} />
                            </span>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className="form-control border-start-0 border-end-0 ps-0 shadow-none" 
                                placeholder="••••••••"
                                value={senha} 
                                onChange={e => setSenha(e.target.value)} 
                            />
                            <button 
                                type="button" 
                                className="input-group-text bg-white border-start-0 text-muted shadow-none"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Botão com o verde aplicado via CSS (classe login-submit-button) */}
                    <button type="submit" className="btn login-submit-button" disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>

                    <div className="login-signup-text">
                        <span className="text-muted">Não tem uma conta? </span>
                        <Link to="/cadastro" className="login-green-link fw-bold text-decoration-none">
                            Criar conta
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}