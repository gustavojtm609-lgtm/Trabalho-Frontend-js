import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="auth-page">
      <section className="auth-card center">
        <h1>Página não encontrada</h1>
        <p>O endereço acessado não existe no sistema.</p>
        <Link className="btn btn-primary" to="/">Voltar ao dashboard</Link>
      </section>
    </main>
  );
}
