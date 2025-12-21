'use client';

import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { cars } from "@/lib/cars-data";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";

function HomeContent() {
  const searchParams = useSearchParams();
  const categoriaParam = searchParams.get('categoria') || "";

  //  O ESTADO DA BUSCA:
  const [searchQuery, setSearchQuery] = useState(categoriaParam);

  // ESTADO DA BUSCA:
  useEffect(() => {
    setSearchQuery(categoriaParam);
  }, [categoriaParam]);

  //  LÓGICA DE FILTRO:
  const filteredCars = cars.filter((car) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      car.model.toLowerCase().includes(searchTerm) ||
      car.brand.toLowerCase().includes(searchTerm) ||
      car.category.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent italic">
            ESTOQUE EXCLUSIVO
          </h1>
        </header>

        <SearchBar query={searchQuery} setQuery={setSearchQuery} />

        {filteredCars.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-zinc-500">Nenhum veículo encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="text-center p-20">Carregando Estoque...</div>}>
      <HomeContent />
    </Suspense>
  );
}