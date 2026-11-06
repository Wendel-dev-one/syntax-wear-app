import IconCart from "@/assets/images/icon-cart.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface CartButtonProps {
  onClick?: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  return (
    <button
      className="relative cursor-pointer"
      onClick={onClick}
      aria-label={`Carrinho de compras${cartItemCount > 0 ? `, ${cartItemCount} ${cartItemCount === 1 ? "item" : "itens"}` : ", vazio"}`}
    >
      <img src={IconCart} alt="Ícone carrinho de compras" />

      {cartItemCount > 0 && (
        <span className="absolute -top-2 -right-2 min-w-4.5 h-4.5 px-1 bg-error text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none pointer-events-none">
          {cartItemCount}
        </span>
      )}
    </button>
  );
};
