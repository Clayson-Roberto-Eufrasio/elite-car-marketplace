'use client';

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }} // Começa invisível e um pouco à direita
      animate={{ opacity: 1, x: 0 }}  // Fica visível e volta para a posição original
      transition={{ ease: "easeInOut", duration: 0.4 }} // Velocidade da transição
    >
      {children}
    </motion.div>
  );
}