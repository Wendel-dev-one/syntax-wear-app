// Importações do TanStack Router para gerenciamento de rotas
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./router-tree-gen"; // Árvore de rotas gerada automaticamente pelo plugin

// Cria a instância do roteador a partir da árvore de rotas definida na aplicação
const router = createRouter({ routeTree });

// Registro global do tipo do roteador no módulo do TanStack Router.
// Isso habilita type-safety (inferência de tipos) ao usar hooks como
// useNavigate, useParams, Link, etc. em qualquer parte da aplicação.
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router; // Sobrescreve a interface padrão com o roteador atual
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
