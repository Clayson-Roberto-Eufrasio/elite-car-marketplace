import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"; // Importando o nosso novo Header
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Elite Car Marketplace",
  description: "Os melhores veículos de luxo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header /> {/* O Header aparece no topo de tudo */}
        {children}
        <Footer /> {/* O Footer aparece no final de tudo */}
      </body>
    </html>
  );
}