import { Car } from "@/types/car";
import Link from "next/link";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  // Formatador de moeda brasileira (Ex: R$ 100.000,00)
  const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    /* Container principal: define cores para Light (bg-white) e Dark (dark:bg-zinc-900) */
    <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 shadow-md hover:shadow-xl">

      {/* Área da Imagem: Possui efeito de Zoom no Hover */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Badge da Categoria: Fundo desfocado (backdrop-blur) */}
        <div className="absolute top-2 right-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
          {car.category}
        </div>
      </div>

      {/* Seção de Informações */}
      <div className="p-5">
        <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
          {car.brand}
        </span>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          {car.model}
        </h3>

        {/* Lista de Atributos: Grid simples com 3 colunas */}
        <div className="flex items-center justify-between mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{car.year}</span>
          <span>•</span>
          <span>{car.transmission}</span>
          <span>•</span>
          <span>{car.mileage.toLocaleString()} km</span>
        </div>

        {/* Rodapé do Card: Preço e Botão */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <p className="text-2xl font-black text-emerald-600 dark:text-emerald-500">
            {priceFormatter.format(car.price)}
          </p>
          <Link
            href={`/veiculo/${car.id}`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}