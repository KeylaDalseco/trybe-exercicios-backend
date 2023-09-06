import { Item } from '../src/04-calculateTotalPrice';
import { Product } from '../src/02-insertProducts';

import calculateTotalPrice from "../src/04-calculateTotalPrice";

describe('04 - calculateTotalPrice deve retornar', () => {
  const shirt: Product = {
    id: 1,
    name: 'Camiseta',
    price: 29.9,
    quantity: 2,
    brands: ['Nike', 'Reebok'],
  };

  const chosenItem: Item[] = [{
    product: shirt,
    quantity: 3,
    phrase: 'May the 4th be with you',
    brand: 'Nike'
  }];

  it('o preço total do tipo número', () => {
    const result = calculateTotalPrice(chosenItem);
    expect(typeof result).toBe('number');
  });

  it('o preço total corretamente com um item', () => {
    const result = calculateTotalPrice(chosenItem);
    expect(result).toEqual(89.7);
  });

  it('o preço total corretamente com múltiplos items', () => {
    const mug = {
      id: 2,
      name: 'Caneca',
      price: 19.90,
      quantity: 10,
      brands: ['Stanley', 'Camelbak'],
    };

    const multipleChosenItems = [{
      product: shirt,
      quantity: 3,
      phrase: 'May the 4th be with you',
      brand: 'Nike'
    }, {
      product: mug,
      quantity: 2,
      phrase: 'No Coffee, No Forcee',
      brand: 'Stanley'
    }]

    const result = calculateTotalPrice(multipleChosenItems);
    expect(result).toEqual(129.5);
  });

  it('o valor de 0 com os items do array vazio', () => {
    const noneItems: Item[] = [];
    const result = calculateTotalPrice(noneItems);
    expect(result).toEqual(0);
  });
});
