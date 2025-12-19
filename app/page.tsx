import { cars } from "@/lib/cars-data";
import CarCard from "@/components/CarCard";

export default function Home() {
  return (
    /* O "min-h-screen" garante que o fundo cubra a tela toda.
       As classes dark: alteram as cores conforme o tema do Windows/Celular do usuário. */
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho com Gradiente */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
            ELITE CAR MARKETPLACE
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            A curadoria dos melhores veículos para quem não aceita menos que o topo.
          </p>
        </header>

        {/* Grid Responsivo:
            - 1 coluna no celular (padrão)
            - 2 colunas em telas médias (md)
            - 3 colunas em telas grandes (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </main>
  );
}