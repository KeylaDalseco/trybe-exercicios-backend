import { Product } from './02-insertProducts';

export type Item = {
  product: Product,
  quantity: number,
  phrase: string,
  brand: string,
};

export default function calculateTotalPrice(items:Item[]):number {
  const total = items.reduce((totalValue, item) => (
    totalValue + item.product.price * item.quantity
  ), 0);
  
  return parseFloat(total.toFixed(2));
}
