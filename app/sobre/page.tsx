'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function SobreNos() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">

        {/* Cabeçalho Animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent italic">
            NOSSA HISTÓRIA
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Redefinindo o conceito de exclusividade e performance no mercado automotivo de luxo desde 2025.
          </p>
        </motion.div>

        {/* Conteúdo em Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-emerald-600">Mais que uma vitrine, um destino.</h2>
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
              A <strong>Elite Car</strong> nasceu da paixão pela engenharia de precisão e pelo design atemporal. Não vendemos apenas carros; entregamos a realização de um sonho esculpido em metal e couro.
            </p>
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
              Nossa curadoria é rigorosa. Cada veículo em nosso estoque passa por um processo de inspeção que garante não apenas a estética impecável, mas a performance original de fábrica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl border border-emerald-500/30 overflow-hidden relative shadow-2xl">
              <Image
                src="/showroom.webp" // O caminho para sua imagem na pasta public
                alt="Showroom exclusivo da Elite Car com carros esportivos de luxo"
                fill // Faz a imagem preencher todo o espaço da div pai
                className="object-cover" // Garante que a imagem cubra a área sem distorcer
                sizes="(max-width: 768px) 100vw, 50vw" // Otimização para mobile/desktop
                priority // Carrega essa imagem com prioridade (pois é importante)
              />

              {/* (Opcional) Um degradê sutil por cima para o texto brilhar mais */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Elemento Decorativo */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-600/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Valores / Diferenciais */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Curadoria", desc: "Seleção manual dos modelos mais icônicos do mundo." },
            { title: "Transparência", desc: "Histórico completo e procedência garantida em cada reserva." },
            { title: "Exclusividade", desc: "Atendimento personalizado para quem não aceita o comum." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800"
            >
              <h3 className="text-emerald-500 font-bold mb-2 uppercase tracking-widest text-sm">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}