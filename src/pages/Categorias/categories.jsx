import { MdArrowBack, MdNightlightRound, MdAddCircleOutline, MdEdit, MdDelete, MdRestaurant, MdHome, MdLocalHospital, MdDirectionsBus, MdCelebration, MdDashboard, MdListAlt, MdCategory, MdPerson } from 'react-icons/md';
import './categories.css';

export function Categories() {
    return (
        <div className="categories-layout">
            
            {/* Header com botão de voltar e modo escuro */}
            <header className="categories-header">
                <button className="header-icon-btn">
                    <MdArrowBack size={24} />
                </button>
                <h1 className="categories-header-title">Gerenciar Categorias</h1>
                <button className="header-icon-btn">
                    <MdNightlightRound size={22} />
                </button>
            </header>

            {/* Seção superior com o botão de adicionar */}
            <div className="padding-container">
                <button className="btn-new-category">
                    <MdAddCircleOutline size={20} />
                    <span>Nova Categoria</span>
                </button>
            </div>

            {/* Lista de Categorias cadastradas */}
            <div className="categories-list">
                
                {/* 1. Alimentação */}
                <div className="category-item">
                    <div className="category-item-left">
                        <div className="cat-icon-circle bg-cat-alimentacao">
                            <MdRestaurant />
                        </div>
                        <div className="category-item-info">
                            <span className="category-item-name">Alimentação</span>
                            <span className="category-item-desc">Gastos com comida e mercado</span>
                        </div>
                    </div>
                    <div className="category-item-actions">
                        <button className="action-icon-btn"><MdEdit size={20} /></button>
                        <button className="action-icon-btn"><MdDelete size={20} /></button>
                    </div>
                </div>

                {/* 2. Moradia */}
                <div className="category-item">
                    <div className="category-item-left">
                        <div className="cat-icon-circle bg-cat-moradia">
                            <MdHome />
                        </div>
                        <div className="category-item-info">
                            <span className="category-item-name">Moradia</span>
                            <span className="category-item-desc">Aluguel, contas e manutenção</span>
                        </div>
                    </div>
                    <div className="category-item-actions">
                        <button className="action-icon-btn"><MdEdit size={20} /></button>
                        <button className="action-icon-btn"><MdDelete size={20} /></button>
                    </div>
                </div>

                {/* 3. Saúde */}
                <div className="category-item">
                    <div className="category-item-left">
                        <div className="cat-icon-circle bg-cat-saude">
                            <MdLocalHospital />
                        </div>
                        <div className="category-item-info">
                            <span className="category-item-name">Saúde</span>
                            <span className="category-item-desc">Remédios, consultas e exames</span>
                        </div>
                    </div>
                    <div className="category-item-actions">
                        <button className="action-icon-btn"><MdEdit size={20} /></button>
                        <button className="action-icon-btn"><MdDelete size={20} /></button>
                    </div>
                </div>

                {/* 4. Transporte */}
                <div className="category-item">
                    <div className="category-item-left">
                        <div className="cat-icon-circle bg-cat-transporte">
                            <MdDirectionsBus />
                        </div>
                        <div className="category-item-info">
                            <span className="category-item-name">Transporte</span>
                            <span className="category-item-desc">Ônibus, Uber e combustível</span>
                        </div>
                    </div>
                    <div className="category-item-actions">
                        <button className="action-icon-btn"><MdEdit size={20} /></button>
                        <button className="action-icon-btn"><MdDelete size={20} /></button>
                    </div>
                </div>

                {/* 5. Lazer */}
                <div className="category-item">
                    <div className="category-item-left">
                        <div className="cat-icon-circle bg-cat-lazer">
                            <MdCelebration />
                        </div>
                        <div className="category-item-info">
                            <span className="category-item-name">Lazer</span>
                            <span className="category-item-desc">Viagens, cinema e festas</span>
                        </div>
                    </div>
                    <div className="category-item-actions">
                        <button className="action-icon-btn"><MdEdit size={20} /></button>
                        <button className="action-icon-btn"><MdDelete size={20} /></button>
                    </div>
                </div>

            </div>

            {/* Menu de Navegação Inferior unificado com a tela de despesas */}
            <nav className="app-bottom-nav">
                <div className="nav-item">
                    <div className="nav-icon-wrapper">
                        <MdDashboard size={20} />
                    </div>
                    <span>Dashboard</span>
                </div>
                <div className="nav-item">
                    <div className="nav-icon-wrapper">
                        <MdListAlt size={20} />
                    </div>
                    <span>Despesas</span>
                </div>
                <div className="nav-item nav-item-active">
                    <div className="nav-icon-wrapper-active">
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