// Define a estrutura de um objeto "Carro" em todo o sistema
export interface Car {
  id: string;
  brand: string;           // Marca (ex: Porsche)
  model: string;           // Modelo (ex: 911)
  year: number;            // Ano
  price: number;           // Preço numérico para cálculos
  mileage: number;         // Quilometragem
  transmission: 'Manual' | 'Automático'; // Tipos fixos para evitar erros
  fuel: 'Gasolina' | 'Flex' | 'Híbrido' | 'Elétrico';
  imageUrl: string;        // Link da foto
  description: string;     // Texto descritivo
  category: string; // Categorias
}