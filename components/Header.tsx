import Link from "next/link";

export default function Header() {
  return (
    // 'sticky top-0' deixa o header fixo ao rolar a página
    // 'backdrop-blur-md' cria o efeito de vidro embaçado
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo com o gradiente que já definimos */}
        <Link href="/" className="group">
          <h2 className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            ELITE CAR
          </h2>
        </Link>

        {/* Navegação - Escondida no celular e visível em telas médias (md) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-emerald-500 transition-colors">Estoque</Link>
          <Link href="#" className="hover:text-emerald-500 transition-colors">Sobre Nós</Link>
          <Link href="#" className="hover:text-emerald-500 transition-colors">Contato</Link>
        </nav>

        {/* Área de Ações (Carrinho) */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
            {/* Ícone de Carrinho Simples em SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            {/* Badge de quantidade (exemplo: 0) */}
            <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-1.5 rounded-full">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}