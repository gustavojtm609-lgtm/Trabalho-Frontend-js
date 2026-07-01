import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert.jsx';
import Loading from '../components/Loading.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', senha: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!form.email || !form.senha) {
      setError('Preencha o e-mail e a senha.');
      return;
    }

    try {
      setLoading(true);
      await login(form.email, form.senha);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Não foi possível fazer login.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-header">
          <span className="logo-circle">R$</span>
          <h1>Entrar no sistema</h1>
          <p>Use seu e-mail e senha para acessar suas despesas.</p>
        </div>

        <Alert type="danger" message={error} />

        <form className="form" onSubmit={handleSubmit}>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              placeholder="admin@admin.com"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              name="senha"
              placeholder="123456"
              value={form.senha}
              onChange={handleChange}
            />
          </label>

          <button className="btn btn-primary btn-full" type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        {loading && <Loading text="Validando acesso..." />}

        <p className="auth-footer">
          Ainda não tem conta? <Link to="/cadastro">Criar cadastro</Link>
        </p>
      </section>
    </main>
  );
}
