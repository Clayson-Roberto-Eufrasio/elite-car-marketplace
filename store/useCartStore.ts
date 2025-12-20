import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Car } from '@/types/car';

// Definimos o que o nosso carrinho terá
interface CartState {
  cart: Car[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: string) => void;
  clearCart: () => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  // O 'persist' salva o carrinho no navegador (localStorage)
  // Assim, se o usuário atualizar a página, os carros continuam lá!
  persist(
    (set, get) => ({
      cart: [],

      // Adiciona um carro se ele ainda não estiver no carrinho
      addToCart: (car) => {
        const currentCart = get().cart;
        const isAlreadyInCart = currentCart.some((item) => item.id === car.id);

        if (!isAlreadyInCart) {
          set({ cart: [...currentCart, car] });
        }
      },

      // Remove um carro pelo ID
      removeFromCart: (carId) => {
        set({ cart: get().cart.filter((item) => item.id !== carId) });
      },

      // Limpa tudo
      clearCart: () => set({ cart: [] }),

      // Calcula o valor total
      totalPrice: () => {
        return get().cart.reduce((total, car) => total + car.price, 0);
      },
    }),
    { name: 'cart-storage' } // Nome da chave no localStorage
  )
);