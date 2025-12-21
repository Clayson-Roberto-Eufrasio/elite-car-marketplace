'use client';

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Coluna 1: Branding */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent italic mb-4">
              ELITE CAR
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              A maior curadoria de veículos exóticos e de luxo do Brasil. Realizando sonhos em forma de engenharia.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-xs tracking-widest">Navegação</h3>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/" className="hover:text-emerald-500 transition-colors">Estoque</Link></li>
              <li><Link href="/sobre" className="hover:text-emerald-500 transition-colors">Sobre Nós</Link></li>
              <li><Link href="/contato" className="hover:text-emerald-500 transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Categorias Populares */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-xs tracking-widest">Categorias</h3>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/?categoria=Supercar" className="hover:text-emerald-500 transition-colors">
                  Supercars
                </Link>
              </li>
              <li>
                <Link href="/?categoria=SUV" className="hover:text-emerald-500 transition-colors">
                  SUVs de Luxo
                </Link>
              </li>
              <li>
                <Link href="/?categoria=Conversível" className="hover:text-emerald-500 transition-colors">
                  Conversível
                </Link>
              </li>
              <li>
                <Link href="/?categoria=Pista" className="hover:text-emerald-500 transition-colors">
                  Pista
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-xs tracking-widest">Siga-nos</h3>
            <div className="flex gap-4">
              {/* No futuro, você pode colocar ícones aqui */}
              <span className="text-sm text-zinc-500 hover:text-emerald-500 cursor-pointer transition-colors">Instagram</span>
              <span className="text-sm text-zinc-500 hover:text-emerald-500 cursor-pointer transition-colors">YouTube</span>
            </div>
          </div>
        </div>

        {/* Linha Final: Copyright */}
        <div className="border-t border-zinc-100 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">
            &copy; {currentYear} Elite Car - Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-zinc-400 uppercase tracking-tighter">
            Desenvolvido por <span className="font-bold text-zinc-600 dark:text-zinc-300">Clayson</span>
          </p>
        </div>
      </div>
    </footer>
  );
}