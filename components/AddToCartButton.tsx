'use client'; // Essencial para usar o Zustand e eventos de clique

import { Car } from "@/types/car";
import { useCartStore } from "@/store/useCartStore";

export default function AddToCartButton({ car }: { car: Car }) {
  const { addToCart, cart } = useCartStore();

  // Verifica se o carro já está no carrinho
  const isInCart = cart.some((item) => item.id === car.id);

  return (
    <button
      onClick={() => addToCart(car)}
      disabled={isInCart}
      className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-95 ${isInCart
          ? "bg-zinc-700 cursor-not-allowed text-zinc-400"
          : "bg-emerald-600 hover:bg-emerald-700 text-white"
        }`}
    >
      {isInCart ? "Já está no Carrinho" : "Adicionar ao Carrinho"}
    </button>
  );
}