'use client';

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import dynamic from 'next/dynamic';

/**
 * Componente de Cabeçalho (Header)
 * Responsável pela navegação principal e exibição do status do carrinho.
 */
function Header() {
  // Acessa a lista de itens do carrinho no estado global do Zustand
  const cart = useCartStore((state) => state.cart);

  return (
    /* 'sticky top-0': Mantém o header fixo no topo ao rolar a página.
       'z-50': Garante que o header fique acima de qualquer outro elemento.
       'backdrop-blur-md': Cria o efeito de "vidro embaçado" (glassmorphism).
       'bg-white/70' e 'dark:bg-black/70': Cores com transparência para o efeito de desfoque.
    */
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO: Link que retorna para a página inicial */}
        <Link href="/" className="group">
          <h2 className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            ELITE CAR
          </h2>
        </Link>

        {/* NAVEGAÇÃO: Links de texto (escondidos em telas pequenas 'hidden md:flex') */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-emerald-500 transition-colors">Estoque</Link>
          <Link href="#" className="hover:text-emerald-500 transition-colors">Sobre Nós</Link>
          <Link href="#" className="hover:text-emerald-500 transition-colors">Contato</Link>
        </nav>

        {/* ÁREA DO CARRINHO */}
        <div className="flex items-center gap-4">
          <Link
            href="/carrinho"
            className="relative p-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors"
            title="Ver meu carrinho"
          >
            {/* Ícone de Carrinho em SVG (Vetor) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>

            {/* BADGE DINÂMICO: 
               - 'animate-bounce': Adiciona uma animação de pulo para chamar atenção.
               - Só renderiza se o carrinho tiver pelo menos 1 item (cart.length > 0).
            */}
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-1.5 rounded-full animate-bounce">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * EXPORTAÇÃO COM DYNAMIC IMPORT (SSR: FALSE)
 * * Por que isso é importante no Next.js 15?
 * O carrinho é salvo no 'localStorage' do navegador. O Servidor (SSR) não tem acesso a isso.
 * Desabilitando o SSR neste componente, evitamos erros de "Hydration Mismatch" 
 * (quando o que o servidor renderiza é diferente do que o cliente mostra).
 */
export default dynamic(() => Promise.resolve(Header), { ssr: false });