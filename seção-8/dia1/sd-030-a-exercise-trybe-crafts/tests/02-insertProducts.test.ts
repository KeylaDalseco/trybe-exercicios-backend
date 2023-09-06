import { Product } from "../src/02-insertProducts";

import insertProducts from "../src/02-insertProducts";

describe('02 - insertProducts deve', () => {
  const brandsInStock = ['Nike', 'Reebok']

  const productWithCorrectBrands: Product = {
    id: 1,
    name: 'Camiseta',
    price: 29.90,
    quantity: 12,
    brands: ['Nike', 'Reebok'],
  };

  const productWithWrongBrands: Product = {
    id: 1,
    name: 'Camiseta',
    price: 19.90,
    quantity: 12,
    brands: ['Nike', 'Adidas'],
  }

  it('retornar uma string', () => {
    const result = insertProducts(brandsInStock, productWithCorrectBrands);
    expect(typeof result).toBe('string');
  });

  it('retornar a mensagem de adição bem sucedida ao estoque, com nome e preço, caso todas as marcas do produto estejam no array de marcas recebido pela função', () => {
    const result = insertProducts(brandsInStock, productWithCorrectBrands);
    const expectedMessage = `Camiseta adicionado(a) com o preço de R$ 29.9`;
    expect(result).toContain(expectedMessage);
  });

  it('retornar a mensagem sobre uma marca estar indisponível para seu produto', () => {
    const result = insertProducts(brandsInStock, productWithWrongBrands);
    const expectedMessage: string = 'Seu produto contém marcas indisponíveis.';
    expect(result).toContain(expectedMessage);
  });
});
