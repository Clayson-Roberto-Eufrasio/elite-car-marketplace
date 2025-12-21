'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContatoPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulando o envio
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">

        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent italic">
            CONTATO EXCLUSIVO
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto uppercase tracking-widest text-sm font-bold">
            Agende sua consultoria ou solicite informações sobre nossa frota.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Coluna 1: Canais de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Canais de Atendimento</h2>
              <div className="space-y-6">

                {/* WhatsApp */}
                <a href="#" className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition-all">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold">WhatsApp Business</p>
                    <p className="font-bold text-lg">(11) 99999-9999</p>
                  </div>
                </a>

                {/* Email */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold">E-mail para Negócios</p>
                    <p className="font-bold text-lg">contato@elitecar.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-zinc-900 to-black rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-4">Showroom Privado</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Avenida da Europa, 1500<br />
                Jardim Europa, São Paulo - SP<br />
                Atendimento apenas com agendamento prévio.
              </p>
            </div>
          </motion.div>

          {/* Coluna 2: Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl"
          >
            {formStatus === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-zinc-500">Um de nossos consultores entrará em contato em breve.</p>
                <button onClick={() => setFormStatus("idle")} className="mt-8 text-emerald-500 font-bold hover:underline">Enviar outra mensagem</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Nome Completo</label>
                    <input required type="text" placeholder="Seu nome" className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-zinc-500 ml-1">E-mail</label>
                    <input required type="email" placeholder="seu@email.com" className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Veículo de Interesse</label>
                  <select className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all">
                    <option>Porsche 911 GT3 RS</option>
                    <option>Ferrari F8 Tributo</option>
                    <option>Lamborghini Huracán</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Mensagem</label>
                  <textarea rows={4} placeholder="Como podemos ajudá-lo hoje?" className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <button
                  disabled={formStatus === "sending"}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-95 disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Enviando Solicitação..." : "Enviar Solicitação de Elite"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}