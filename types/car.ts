export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: 'Manual' | 'Automático';
  fuel: 'Gasolina' | 'Flex' | 'Híbrido' | 'Elétrico';
  imageUrl: string;
  description: string;
  category: 'Sedan' | 'Esportivo' | 'SUV' | 'Luxo';
}