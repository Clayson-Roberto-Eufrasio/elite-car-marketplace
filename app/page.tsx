'use client'; // Transformamos em Client Component para gerenciar a busca em tempo real

import { useState } from "react";
import { cars } from "@/lib/cars-data";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  // Estado que armazena o que o usuário digita
  const [searchQuery, setSearchQuery] = useState("");

  // LÓGICA DE FILTRO:
  // Filtramos a lista original baseada no nome, marca ou categoria.
  // Usamos .toLowerCase() para que a busca não diferencie maiúsculas de minúsculas.
  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho de Boas-vindas */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
            ESTOQUE EXCLUSIVO
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Encontre o veículo que combina com seu sucesso.
          </p>
        </header>

        {/* Barra de Busca Dinâmica */}
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />

        {/* FEEDBACK DE BUSCA VAZIA:
            Se o filtro não encontrar nada, avisamos ao usuário.
        */}
        {filteredCars.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-zinc-500">Nenhum veículo encontrado para {searchQuery}</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-emerald-500 font-bold hover:underline"
            >
              Limpar busca
            </button>
          </div>
        ) : (
          /* GRID DE RESULTADOS:
             Renderiza apenas os carros que passaram pelo filtro.
          */
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