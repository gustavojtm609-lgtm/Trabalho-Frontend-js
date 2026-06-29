import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MdArrowBack, MdPerson, MdEmail, MdBadge, MdLockOutline, MdVisibility, MdVisibilityOff, MdPersonAddAlt1, MdSecurity } from 'react-icons/md';
import './Cadastro.css';

export function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [aceitouTermos, setAceitouTermos] = useState(false);
    
    const [showPassword, setShowPassword] = useState(false);
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        setErro('');

        if (!nome || !email || !cpf || !senha || !confirmarSenha) {
            setErro('Por favor, preencha todos os campos.');
            return;
        }

        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem.');
            return;
        }

        if (!aceitouTermos) {
            setErro('Você precisa aceitar os Termos de Uso e Políticas.');
            return;
        }

        try {
            setLoading(true);
            // Aqui entrará a chamada para a sua API futuramente
            navigate('/login');
        } catch (err) {
            setErro('Erro ao criar conta. Tente novamente.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="cadastro-screen">
            <div className="cadastro-card-box">
                
                {/* Header de navegação superior */}
                <div className="cadastro-header-nav">
                    <button className="cadastro-back-btn" onClick={() => navigate('/login')}>
                        <MdArrowBack size={24} />
                    </button>
                    <h1 className="cadastro-header-title">Criar Conta</h1>
                </div>

                {/* Ícone de Avatar verde */}
                <div className="cadastro-avatar-wrapper">
                    <div className="cadastro-avatar-circle">
                        <MdPersonAddAlt1 size={36} />
                    </div>
                </div>

                <p className="cadastro-sub-text">
                    Complete os dados abaixo para começar a organizar sua vida financeira.
                </p>

                {erro && <div className="alert alert-danger py-2 text-center small">{erro}</div>}

                <form onSubmit={handleRegister}>
                    
                    {/* Nome Completo */}
                    <div className="mb-3">
                        <label className="form-label cadastro-field-label">Nome Completo</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0 text-muted">
                                <MdPerson size={20} />
                            </span>
                            <input 
                                type="text" 
                                className="form-control border-start-0 ps-0 shadow-none" 
                                placeholder="Ex: João Silva"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* E-mail */}
                    <div className="mb-3">
                        <label className="form-label cadastro-field-label">E-mail</label>
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

                    {/* CPF */}
                    <div className="mb-3">
                        <label className="form-label cadastro-field-label">CPF</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0 text-muted">
                                <MdBadge size={20} />
                            </span>
                            <input 
                                type="text" 
                                className="form-control border-start-0 ps-0 shadow-none" 
                                placeholder="000.000.000-00"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Senha */}
                    <div className="mb-3">
                        <label className="form-label cadastro-field-label">Senha</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0 text-muted">
                                <MdLockOutline size={20} />
                            </span>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className="form-control border-start-0 border-end-0 ps-0 shadow-none" 
                                placeholder="Crie uma senha forte"
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

                    {/* Confirmar Senha */}
                    <div className="mb-4">
                        <label className="form-label cadastro-field-label">Confirmar Senha</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0 text-muted">
                                <MdSecurity size={20} />
                            </span>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className="form-control border-start-0 ps-0 shadow-none" 
                                placeholder="Repita a senha"
                                value={confirmarSenha}
                                onChange={e => setConfirmarSenha(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Checkbox de Termos */}
                    <div className="form-check d-flex align-items-start gap-2 mb-3 ps-0">
                        <input 
                            type="checkbox" 
                            className="form-check-input ms-0 mt-1 shadow-none" 
                            id="termsCheckbox"
                            checked={aceitouTermos}
                            onChange={e => setAceitouTermos(e.target.checked)}
                            style={{ cursor: 'pointer' }}
                        />
                        <label className="form-check-label cadastro-terms-text" htmlFor="termsCheckbox" style={{ cursor: 'pointer' }}>
                            Ao clicar em criar conta, você concorda com nossos{' '}
                            <Link to="/termos" className="cadastro-green-link text-decoration-none">Termos de Uso</Link> e{' '}
                            <Link to="/privacidade" className="cadastro-green-link text-decoration-none">Política de Privacidade</Link>.
                        </label>
                    </div>

                    {/* Botão de Envio */}
                    <button type="submit" className="btn cadastro-submit-button" disabled={loading}>
                        {loading ? 'Criando...' : 'Criar Conta'}
                    </button>

                    {/* Footer */}
                    <div className="cadastro-footer-text">
                        <span className="text-muted">Já possui uma conta? </span>
                        <Link to="/login" className="cadastro-green-link fw-bold text-decoration-none">
                            Fazer Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}