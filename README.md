# Frontend - Controle de Despesas

Aplicação React integrada à API RESTful do backend de controle de despesas.

## Tecnologias usadas

- React
- Vite
- React Router DOM
- Axios
- Context API
- CSS puro responsivo

## Funcionalidades

- Login e cadastro de usuário
- Persistência de sessão com localStorage
- Logout
- Dashboard com total, quantidade, gastos por categoria e últimas despesas
- CRUD completo de categorias
- CRUD completo de despesas
- Filtros por categoria, status, data e valor
- Loading states
- Tratamento de erros
- Feedback visual
- Validação de formulários
- Dark mode
- Paginação e ordenação no frontend

## Como rodar

1. Deixe o backend rodando em `http://localhost:3000`.

2. Instale as dependências:

```bash
npm install
```

3. Rode o frontend:

```bash
npm run dev
```

4. Abra o endereço exibido pelo Vite, geralmente:

```bash
http://localhost:5173
```

## Configuração da API

Crie um arquivo `.env` na raiz do frontend com:

```env
VITE_API_URL=http://localhost:3000
```

## Usuário de teste do backend

Caso você rode os seeders do backend, use:

- E-mail: `admin@admin.com`
- Senha: `123456`
