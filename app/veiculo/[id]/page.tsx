import { cars } from "@/lib/cars-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

// Essa função gera o conteúdo da página com base no ID da URL
export default async function DetalhesVeiculo({ params }: { params: { id: string } }) {

  const { id } = await params;

  // Buscamos o carro específico no nosso "banco de dados" usando o ID
  const car = cars.find((c) => c.id === id);

  // Se o carro não existir, mostramos a página 404 padrão do Next.js
  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-4 md:p-12">
      <div className="max-w-5xl mx-auto">

        {/* Botão para Voltar */}
        <Link
          href="/"
          className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline mb-8 block"
        >
          ← Voltar para a vitrine
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna 1: Imagem Grande */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
            <img
              src={car.imageUrl}
              alt={car.model}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Coluna 2: Informações e Compra */}
          <div className="flex flex-col justify-center">
            <span className="text-zinc-500 uppercase tracking-widest">{car.brand}</span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-zinc-900 dark:text-zinc-100">
              {car.model}
            </h1>

            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-500 mb-6">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(car.price)}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 text-zinc-600 dark:text-zinc-400">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                <p className="text-xs uppercase">Ano</p>
                <p className="font-bold text-zinc-900 dark:text-zinc-100">{car.year}</p>
              </div>
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                <p className="text-xs uppercase">Quilometragem</p>
                <p className="font-bold text-zinc-900 dark:text-zinc-100">{car.mileage.toLocaleString()} km</p>
              </div>
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                <p className="text-xs uppercase">Transmissão</p>
                <p className="font-bold text-zinc-900 dark:text-zinc-100">{car.transmission}</p>
              </div>
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                <p className="text-xs uppercase">Combustível</p>
                <p className="font-bold text-zinc-900 dark:text-zinc-100">{car.fuel}</p>
              </div>
            </div>

            <AddToCartButton car={car} />

          </div>
        </div>

        {/* Descrição */}
        <div className="mt-12 p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">Sobre este veículo</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {car.description}
          </p>
        </div>
      </div>
    </main>
  );
}