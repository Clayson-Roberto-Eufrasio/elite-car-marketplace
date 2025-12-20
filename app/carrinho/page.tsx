'use client';

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import dynamic from 'next/dynamic';

/**
 * Página de Carrinho (CarrinhoPage)
 * Exibe a lista de veículos selecionados, permite a remoção de itens e mostra o valor total.
 */
function CarrinhoPage() {
  // Desestruturação das funções e estados necessários da nossa Store
  const { cart, removeFromCart, totalPrice } = useCartStore();

  // Formatador de moeda para o padrão brasileiro (R$)
  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-4 md:p-12 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black mb-8 italic tracking-tighter">MEU CARRINHO DE ELITE</h1>

        {/* 1. VERIFICAÇÃO DE CARRINHO VAZIO: 
            Se o array 'cart' estiver vazio, mostramos uma mensagem amigável ao usuário.
        */}
        {cart.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl">
            <p className="text-zinc-500 mb-6">Seu carrinho de elite ainda está vazio.</p>
            <Link
              href="/"
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all"
            >
              Explorar Estoque
            </Link>
          </div>
        ) : (
          /* 2. LISTA DE ITENS:
             Se houver itens, fazemos um .map() no array para renderizar cada carro.
          */
          <div className="space-y-4">
            {cart.map((car) => (
              <div
                key={car.id}
                className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/30 transition-all"
              >
                {/* Informações do Veículo */}
                <div className="flex items-center gap-4">
                  <img
                    src={car.imageUrl}
                    alt={car.model}
                    className="w-24 h-16 object-cover rounded-lg shadow-inner"
                  />
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{car.brand} {car.model}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-bold">
                      {currencyFormatter.format(car.price)}
                    </p>
                  </div>
                </div>

                {/* Botão de Remover: Chama a função da store passando o ID do carro */}
                <button
                  onClick={() => removeFromCart(car.id)}
                  className="text-zinc-400 hover:text-red-500 transition-colors p-2 text-xs uppercase font-bold tracking-widest"
                >
                  Remover
                </button>
              </div>
            ))}

            {/* 3. RESUMO DO PEDIDO:
               Calcula o total acumulado e oferece o botão de finalização.
            */}
            <div className="mt-12 p-8 bg-zinc-100 dark:bg-zinc-900 rounded-3xl border-t-4 border-emerald-500 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold">Total do Investimento</p>
                  <span className="text-3xl md:text-4xl font-black text-emerald-600">
                    {currencyFormatter.format(totalPrice())}
                  </span>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-xs text-zinc-500">Itens no carrinho: {cart.length}</p>
                </div>
              </div>

              <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-black text-xl shadow-lg transition-transform active:scale-[0.98] uppercase tracking-tighter"
                onClick={() => alert("Parabéns Clayson! Este é o fim do fluxo do MVP.")}
              >
                Finalizar Reserva de Luxo
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

/**
 * EXPORTAÇÃO DINÂMICA (SSR: FALSE):
 * * Crucial para o funcionamento do Zustand com Persistência:
 * Como os dados do carrinho estão no 'localStorage' do navegador, o servidor do Next.js (SSR)
 * não consegue ler esses dados. Exportando com { ssr: false }, garantimos que o componente
 * só renderize no navegador, evitando erros de diferença entre Servidor e Cliente.
 */
export default dynamic(() => Promise.resolve(CarrinhoPage), { ssr: false });