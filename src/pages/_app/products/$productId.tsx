import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { MdAddShoppingCart } from "react-icons/md";

export const Route = createFileRoute("/_app/products/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { productId } = Route.useParams();

  const filteredProduct = products.find(
    (product) => product.id === Number(productId),
  );

  const originalPrice = filteredProduct?.price ?? 0;

  // 1.0 = 100% do valor
  // 0.9 = 90% do valor
  const discountPrice = originalPrice * 0.9;

  //preço original parecelado
  const inInstallmentsPrice = originalPrice / 6;

  return (
    <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10">
      <nav className="text-black text-sm mb-15 ml-5">
        <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{" "}
        <span className="font-semibold">{filteredProduct?.name}</span>
      </nav>

      <div className="flex justify-center gap-10">
        <img
          src={filteredProduct?.image}
          alt={filteredProduct?.name}
          className="w-125 bg-white rounded-2xl"
        />

        <div className="text-black">
          <h1 className="text-4xl font-bold mb-1">{filteredProduct?.name}</h1>

          <p className="mb-2">Cor: {filteredProduct?.color}</p>

          <p className="line-through text-sm text-[#878787]">
            {formatCurrency(originalPrice)}
          </p>

          <p className="text-3xl font-bold mb-2">
            {formatCurrency(discountPrice)} no PIX
          </p>

          <p className="test-sm text-[#878787]">
            Você economiza: <span className="font-semibold">10%</span>
          </p>

          <p className="mb-2">
            ou <span className="text-[#38373A] font-semibold">6x</span> de{" "}
            <span className="text-[#38373A] font-semibold">
              {formatCurrency(inInstallmentsPrice)}
            </span>
          </p>

          <p className="max-w-125 my-5">{filteredProduct?.description}</p>

          <div className="mb-5">
            <p>Calcular prazo de entrega</p>

            <form className="flex justify-between gap-3">
              <input
                type="text"
                placeholder="Insira seu CEP"
                className="border border-[#c0c0c0] rounded-md p-3 w-full"
              />
              <button className="bg-black text-white py-3 px-6 rounded-md w-1/2 cursor-pointer hover:bg-gray-800">
                Calcular
              </button>
            </form>
          </div>

          <button className="flex items-center justify-center gap-1 bg-black text-white rounded-md p-5 w-full cursor-pointer hover:bg-gray-800">
            Adicionar ao carrinho <MdAddShoppingCart className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}
