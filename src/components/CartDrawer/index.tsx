import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FaTrash } from "react-icons/fa";
import { formatCurrency } from "../../utils/formatCurrency";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, remove, increment, decrement } = useContext(CartContext);



  return (
    <>
      {/* Overlay */}
      <div
        className={`${isOpen ? "bg-black/20 backdrop-blur-md visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0 z-50`}
        onClick={onClose}
      >
        {/* Drawer */}
        <div
          className={`${isOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-surface p-2 transition-all duration-500 ease-in-out w-75 md:w-106`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between p-5 border-b">
            <p className="text-2xl font-bold">Carrinho ({cart.length})</p>
            <button className="text-xl cursor-pointer" onClick={onClose}>
              X
            </button>
          </header>

          <ul className="py-5 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-4">
            {cart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 px-7">
                <button
                  className="self-end text-xs cursor-pointer"
                  onClick={() => remove(product.id)}
                >
                  <FaTrash />
                </button>

                <div className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16"
                  />

                  <div className="flex flex-col items-start">
                    <p className="mb-1 text-sm">{product.name}</p>

                    <p className="mb-1 text-sm">
                      Quantidade: {product.quantity}
                    </p>

                    <p className="mb-3.5">
                      <span className="font-bold mr-1.5">
                        {formatCurrency(product.price)}
                      </span>{" "}
                      à vista
                    </p>

                    <div className="border flex gap-6 py-1 px-3">
                      <button
                        className="cursor-pointer"
                        onClick={() => decrement(product)}
                      >
                        -
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        className="cursor-pointer"
                        onClick={() => increment(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <footer className="absolute bottom-0 w-full h-25 p-4">
            <button className="w-full h-full bg-black text-white rounded-xs cursor-pointer hover:bg-black-hover">
              Fechar pedido
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
