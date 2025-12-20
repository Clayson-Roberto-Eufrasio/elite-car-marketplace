'use client';

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

/**
 * Componente de Busca
 * @param query - O texto atual da busca
 * @param setQuery - Função para atualizar o texto
 */
export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      {/* Ícone de Lupa */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Input de Busca */}
      <input
        type="text"
        placeholder="Busque por marca, modelo ou categoria (ex: BMW, Porsche...)"
        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all shadow-sm text-zinc-900 dark:text-zinc-100"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}