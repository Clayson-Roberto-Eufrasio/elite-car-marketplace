'use client';

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const cart = useCartStore((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado do menu mobile

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="z-50">
          <h2 className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
            ELITE CAR
          </h2>
        </Link>

        {/* NAVEGAÇÃO DESKTOP (Escondida no Mobile) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-emerald-500 transition-colors">Estoque</Link>
          <Link href="/sobre" className="hover:text-emerald-500 transition-colors">Sobre Nós</Link>
          <Link href="#" className="hover:text-emerald-500 transition-colors">Contato</Link>
        </nav>

        {/* BOTÕES DE AÇÃO (Carrinho e Menu Hambúrguer) */}
        <div className="flex items-center gap-2 z-50">
          <Link href="/carrinho" className="relative p-2 text-zinc-600 dark:text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-1.5 rounded-full animate-bounce">{cart.length}</span>
            )}
          </Link>

          {/* BOTÃO HAMBÚRGUER (Aparece só no Mobile) */}
          <button
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }} // Gira 90 graus quando abre
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M4 6h16M4 18h16" /></svg>
              )}
            </motion.div>
          </button>
        </div>

        {/* MENU MOBILE (Animação de Slide) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-zinc-50 dark:bg-zinc-950 z-40 flex flex-col items-center justify-center p-6"
            >
              {/* Overlay de fundo para garantir que não fique transparente */}
              <div className="flex flex-col items-center gap-10 w-full">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-black text-zinc-800 dark:text-zinc-100 hover:text-emerald-500 transition-colors"
                >
                  ESTOQUE
                </Link>
                <Link
                  href="/sobre"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-black text-zinc-800 dark:text-zinc-100 hover:text-emerald-500 transition-colors"
                >
                  SOBRE NÓS
                </Link>
                <Link
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-black text-zinc-800 dark:text-zinc-100 hover:text-emerald-500 transition-colors"
                >
                  CONTATO
                </Link>

                {/* Linha decorativa no menu mobile */}
                <div className="w-20 h-1 bg-emerald-500 rounded-full mt-4"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });