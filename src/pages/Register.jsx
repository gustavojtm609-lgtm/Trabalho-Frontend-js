import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Register() {
  const navigate = useNavigate();
  const { register, login } = useAuth();
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!form.nome.trim() || !form.email.trim() || !form.senha.trim()) {
      setError('Preencha nome, e-mail e senha.');
      return;
    }

    if (form.senha.length < 6) {
      setError('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }

    try {
      setLoading(true);
      await register(form.nome, form.email, form.senha);
      await login(form.email, form.senha);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao criar cadastro.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-header">
          <span className="logo-circle">+</span>
          <h1>Criar cadastro</h1>
          <p>Cadastre-se para controlar suas categorias e despesas.</p>
        </div>

        <Alert type="danger" message={error} />

        <form className="form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input name="nome" placeholder="Seu nome" value={form.nome} onChange={handleChange} />
          </label>

          <label>
            E-mail
            <input type="email" name="email" placeholder="email@exemplo.com" value={form.email} onChange={handleChange} />
          </label>

          <label>
            Senha
            <input type="password" name="senha" placeholder="Mínimo 6 caracteres" value={form.senha} onChange={handleChange} />
          </label>

          <button className="btn btn-primary btn-full" type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        <p className="auth-footer">
          Já tem conta? <Link to="/login">Fazer login</Link>
        </p>
      </section>
    </main>
  );
}
