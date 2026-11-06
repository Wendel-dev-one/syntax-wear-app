# SyntaxWear

Loja virtual demonstrativa de calçados, desenvolvida com React e TypeScript. A interface reúne catálogo de produtos, páginas informativas, formulários de acesso e cadastro e um carrinho de compras que mantém os itens no navegador.

## Desenvolvido por

Wendel Silva

## Funcionalidades

- Página inicial com banner, categorias e galeria.
- Catálogo, filtros por categoria e detalhes dos produtos.
- Carrinho com adição, remoção e ajuste de quantidades; os dados ficam salvos no `localStorage`.
- Consulta de endereço por CEP na página do produto, usando a API pública ViaCEP.
- Páginas de perguntas frequentes, apresentação da marca e lojas.
- Telas de login e cadastro com validação de formulário.

> **Observação:** este projeto é uma demonstração de front-end. O catálogo usa dados locais em `src/mocks`, e não há integração com serviço de autenticação, pagamento ou pedidos. Os botões de login/cadastro não criam uma sessão ou conta real.

## Tecnologias

- React 19 e TypeScript
- Vite 8
- TanStack Router
- Tailwind CSS 4
- React Hook Form e Zod

## Requisitos

- Node.js compatível com Vite 8 (Node.js 20.19+ ou 22.12+).
- npm.

## Como executar

No terminal, a partir da pasta do projeto:

```bash
npm ci
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação, normalmente `http://localhost:5173`. Abra esse endereço no navegador.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Executa a verificação de tipos e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente a versão já compilada em `dist/`. Execute `npm run build` antes. |
| `npm run lint` | Verifica o código com ESLint. |

## Páginas principais

| Caminho | Conteúdo |
| --- | --- |
| `/` | Página inicial |
| `/products` | Catálogo de produtos |
| `/products/:productId` | Detalhes de um produto |
| `/products/category/:category` | Produtos de uma categoria |
| `/about` | Sobre a marca |
| `/our-stores` | Lojas |
| `/faq` | Perguntas frequentes |
| `/sign-in` | Login |
| `/sign-up` | Cadastro |

## Organização do projeto

- `src/pages/` — páginas e rotas, organizadas por arquivo com TanStack Router.
- `src/components/` — componentes reutilizáveis da interface.
- `src/contexts/` — estado compartilhado do carrinho.
- `src/mocks/` — dados locais de produtos e categorias.
- `src/assets/` — imagens e fontes usadas pela aplicação.
- `src/styles/` — estilos globais e configuração visual.
- `src/utils/` — funções utilitárias, como formatação de moeda e validação de CPF.