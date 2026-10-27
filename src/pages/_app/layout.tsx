// createFileRoute: cria uma rota baseada no caminho do arquivo dentro da estrutura de pastas
// Outlet: componente que renderiza a rota filha ativa dentro deste layout
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

// Define a rota de layout para o grupo "_app".
// O prefixo "_" indica que este arquivo é um layout (route group) e não gera uma URL própria.
// Todas as rotas filhas dentro da pasta "_app" herdarão automaticamente este layout
// (ou seja, serão renderizadas com Header e Footer ao redor).
export const Route = createFileRoute('/_app')({
  component: RouteComponent, // Componente que será usado como layout para as rotas filhas
})

// Componente de layout compartilhado por todas as páginas do grupo "_app"
function RouteComponent() {
  return (
    <div>
      <Header /> {/* Cabeçalho fixo no topo de todas as páginas deste grupo */}
      <Outlet /> {/* Aqui é renderizado o conteúdo da página filha ativa (ex: Home, Produto, etc.) */}
      <Footer /> {/* Rodapé fixo no final de todas as páginas deste grupo */}
    </div>
  )
}
