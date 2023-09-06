import { Product } from '../src/02-insertProducts';
import { Item } from '../src/04-calculateTotalPrice';
import { Order } from '../src/05-orderRequest';

import orderRequest from '../src/05-orderRequest';

describe('05 - orderRequest deve retornar', () => {
  const productWithStockOne: Product = 
    {
      id: 1,
      name: 'Camiseta',
      price: 29.9,
      quantity: 25,
      brands: ['Nike', 'Reebok'],
    }

    const productsWithStockTwo: Product = {
      id: 2,
      name: 'Caneca',
      price: 19.90,
      quantity: 10,
      brands: ['Stanley', 'Camelbak'],
    }

  const itemsWithStock: Item[] = [
    {
      product: productWithStockOne,
      quantity: 3,
      phrase: "Feliz aniversário, Judite",
      brand: 'Nike'
    } as Item,
    {
      product: productsWithStockTwo,
      quantity: 3,
      phrase: 'Acho bom amar a caneca, Judite!',
      brand: 'Stanley'
    } as Item
  ]

  const orderWithStock: Order = {
    id: 1,
    customerName: 'John Doe',
    customerEmail: 'johndoe@example.com',
    items: itemsWithStock,
    status: 'pendente',
  };

  it('uma string', () => {
    const result = orderRequest(orderWithStock);
    expect(typeof result).toBe('string');
  });

  it('atualização da ordem para "enviado"', () => {
    const result = orderRequest(orderWithStock);
    const expected = 'Olá John Doe, o seu pedido de ID 1 foi enviado.';
    expect(result).toContain(expected);
  });

  const productWithoutStockOne: Product = 
    {
      id: 3,
      name: 'Boné',
      price: 39.90,
      quantity: 0,
      brands: ['Adidas'],
    }

  const itemsWithoutStock: Item[] = [
    {
      product: productWithoutStockOne,
      quantity: 3,
      phrase: 'Pra proteger do sol, Judite!',
      brand: 'Adidas'
    } as Item
  ]

  const orderWithoutStock: Order = {
    id: 1,
    customerName: 'John Doe',
    customerEmail: 'johndoe@example.com',
    items: itemsWithoutStock,
    status: 'pendente',
  };

  it('lançar uma mensagem de erro se qualquer um dos produtos não ter estoque', () => {
    const expected = 'Desculpe, Boné não está disponível no estoque';
    expect(() => orderRequest(orderWithoutStock)).toThrowError(expected);
  });
});
