import { MdAccountBalanceWallet, MdNightlightRound, MdKeyboardArrowDown, MdCalendarToday, MdFilterList, MdRestaurant, MdDirectionsBus, MdHome, MdBook, MdAdd, MdDashboard, MdListAlt, MdCategory, MdPerson } from 'react-icons/md';
import './expenses.css'; // Importação com o nome correto do arquivo CSS

export function Expenses() {
    return (
        <div className="expenses-layout">
            
            {/* Top Header */}
            <header className="expenses-header">
                <MdAccountBalanceWallet className="header-icon" size={22} />
                <h1 className="expenses-header-title">Despesas</h1>
                <MdNightlightRound className="header-icon" size={20} />
            </header>

            {/* Filtros superiores */}
            <div className="filters-scroll">
                <div className="filter-badge">
                    <span>Categoria</span>
                    <MdKeyboardArrowDown size={16} />
                </div>
                <div className="filter-badge">
                    <MdCalendarToday size={14} />
                    <span>Este Mês</span>
                    <MdKeyboardArrowDown size={16} />
                </div>
                <div className="filter-badge">
                    <MdFilterList size={14} />
                    <span>Status</span>
                </div>
            </div>

            {/* Grupo de Meses */}
            <div className="month-group-title">Outubro 2023</div>

            {/* Lista de Registros */}
            <div className="expenses-list">
                
                {/* Item 1: Restaurante Universitário */}
                <div className="expense-card">
                    <div className="expense-card-left">
                        <div className="category-icon-circle bg-restaurant">
                            <MdRestaurant />
                        </div>
                        <div className="expense-card-info">
                            <span className="expense-card-name">Restaurante Universitário</span>
                            <div className="expense-card-meta">
                                <span>15 Out</span>
                                <span>•</span>
                                <span className="status-dot dot-pago"></span>
                                <span>Pago</span>
                            </div>
                        </div>
                    </div>
                    <div className="expense-card-value">-R$ 15,00</div>
                </div>

                {/* Item 2: Recarga Bilhete Único */}
                <div className="expense-card">
                    <div className="expense-card-left">
                        <div className="category-icon-circle bg-transport">
                            <MdDirectionsBus />
                        </div>
                        <div className="expense-card-info">
                            <span className="expense-card-name">Recarga Bilhete Único</span>
                            <div className="expense-card-meta">
                                <span>12 Out</span>
                                <span>•</span>
                                <span className="status-dot dot-pago"></span>
                                <span>Pago</span>
                            </div>
                        </div>
                    </div>
                    <div className="expense-card-value">-R$ 50,00</div>
                </div>

                {/* Item 3: Aluguel Kitnet */}
                <div className="expense-card">
                    <div className="expense-card-left">
                        <div className="category-icon-circle bg-home">
                            <MdHome />
                        </div>
                        <div className="expense-card-info">
                            <span className="expense-card-name">Aluguel Kitnet</span>
                            <div className="expense-card-meta">
                                <span>05 Out</span>
                                <span>•</span>
                                <span className="status-dot dot-pendente"></span>
                                <span>Pendente</span>
                            </div>
                        </div>
                    </div>
                    <div className="expense-card-value">-R$ 850,00</div>
                </div>

                {/* Item 4: Livros Semestre */}
                <div className="expense-card">
                    <div className="expense-card-left">
                        <div className="category-icon-circle bg-education">
                            <MdBook />
                        </div>
                        <div className="expense-card-info">
                            <span className="expense-card-name">Livros Semestre</span>
                            <div className="expense-card-meta">
                                <span>02 Out</span>
                                <span>•</span>
                                <span className="status-dot dot-pago"></span>
                                <span>Pago</span>
                            </div>
                        </div>
                    </div>
                    <div className="expense-card-value">-R$ 120,00</div>
                </div>

            </div>

            {/* Floating Action Button (+) */}
            <button className="app-fab">
                <MdAdd size={24} />
            </button>

            {/* Menu de Navegação Inferior */}
            <nav className="app-bottom-nav">
                <div className="nav-item">
                    <div className="nav-icon-wrapper">
                        <MdDashboard size={20} />
                    </div>
                    <span>Dashboard</span>
                </div>
                <div className="nav-item nav-item-active">
                    <div className="nav-icon-wrapper-active">
                        <MdListAlt size={20} />
                    </div>
                    <span>Despesas</span>
                </div>
                <div className="nav-item">
                    <div className="nav-icon-wrapper">
                        <MdCategory size={20} />
                    </div>
                    <span>Categorias</span>
                </div>
                <div className="nav-item">
                    <div className="nav-icon-wrapper">
                        <MdPerson size={20} />
                    </div>
                    <span>Perfil</span>
                </div>
            </nav>

        </div>
    );
}