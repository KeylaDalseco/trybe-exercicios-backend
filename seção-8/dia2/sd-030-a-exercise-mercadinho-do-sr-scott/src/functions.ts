import { Food } from './types/Food';
import { Drink } from './types/Drink';
import { CartItem } from './types/CartItem';

export const first = <Type>(product:Type[]): Type => product[0];

export const updateItem = <Type>(products: Type[], index:number, update:Type): Type[] => {
  if (index >= 0 && index < products.length) products.splice(index, 1, update);
  return products;
};

export const buildCartItem = (
  { name, price }: Food | Drink,
  quantity: number,
): CartItem => ({ name, price, quantity } as CartItem);