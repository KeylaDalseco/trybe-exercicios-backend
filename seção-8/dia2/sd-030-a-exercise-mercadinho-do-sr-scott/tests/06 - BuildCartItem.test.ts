import { buildCartItem } from '../src/functions';
import { CartItem } from '../src/types/CartItem';
import { Drink } from '../src/types/Drink';
import { Food } from '../src/types/Food';

describe('06 - Função buildCartItem', () => {
  it('A função buildCartItem retorna um objeto do tipo CartItem ao receber um objeto do tipo Food e uma quantidade', () => {
    const hamburger: Food = {
      name: "Hamburger",
      price: 10.99,
      weight: 200,
      weightUnit: 'g',
    };

    const quantity = 10;

    const item: CartItem = buildCartItem(hamburger, quantity);

    expect(item.name).toBe(hamburger.name);
    expect(item.price).toBe(hamburger.price);
    expect(item.quantity).toBe(quantity);
    expect(Object.keys(item)).not.toContain('weight');
    expect(Object.keys(item)).not.toContain('weightUnit');
  });

  it('A função buildCartItem retorna um objeto do tipo CartItem ao receber um objeto do tipo Drink e uma quantidade', () => {
    const coke: Drink = {
      name: "Coca-cola lata",
      price: 3.50,
      capacity: 300,
      capacityUnit: 'ml'
    };

    const quantity = 10;

    const item: CartItem = buildCartItem(coke, quantity);

    expect(item.name).toBe(coke.name);
    expect(item.price).toBe(coke.price);
    expect(item.quantity).toBe(quantity);
    expect(Object.keys(item)).not.toContain('capacity');
    expect(Object.keys(item)).not.toContain('capacityUnit');
  });
});
