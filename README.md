
# Catálogo de Produtos React

> Projeto desenvolvido em React + Vite para gerenciamento de um catálogo de produtos, com funcionalidades de carrinho de compras e adição de novos produtos, utilizando persistência no localStorage.

## Funcionalidades

- Listagem de produtos com dados mock e produtos adicionados pelo usuário
- Adição de novos produtos via formulário
- Adição de produtos ao carrinho de compras
- Persistência dos dados de produtos e carrinho no localStorage
- Interface responsiva com styled-components e Bootstrap

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Como rodar o projeto

1. Instale as dependências:
	```bash
	npm install
	```
2. Inicie o servidor de desenvolvimento:
	```bash
	npm run dev
	```
3. Acesse `http://localhost:5173` no navegador.

## Estrutura de Pastas

- `src/components` — Componentes reutilizáveis (ProdutoCard, Banner, etc)
- `src/pages` — Páginas principais (Catálogo, Carrinho, Adicionar Produto)
- `src/data` — Dados mock iniciais
- `src/utils` — Utilitários para manipulação do localStorage

## Observações

- Os produtos e o carrinho são salvos no localStorage, garantindo persistência mesmo após recarregar a página.
- Para limpar o carrinho, utilize o botão disponível na página Carrinho.

---
Projeto para fins didáticos — EBAC
