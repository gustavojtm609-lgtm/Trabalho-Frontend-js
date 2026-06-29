import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar Lateral */}
      <aside className="sidebar">
        <div className="logo">Controle de Gastos</div>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Despesas</li>
            <li>Categorias</li>
            <li>Perfil</li>
          </ul>
        </nav>
        <div className="user-profile">Arthur Silva</div>
      </aside>

      {/* Área de Conteúdo Principal */}
      <main className="main-content">
        <header className="main-header">
          <h1>Dashboard</h1>
          <div className="actions">
            <button>Export PDF</button>
          </div>
        </header>

        <div className="grid-layout">
          <div className="card-finance main-card">
            <h2>Total Spending</h2>
            <p className="amount">R$ 1.250,00</p>
          </div>
          
          <div className="card-finance sidebar-card">
            <h2>Breakdown by Category</h2>
            {/* Lista de categorias aqui */}
          </div>
        </div>
      </main>
    </div>
  );
}