import findById from '../src/03-findById';

describe('03 - findById deve retornar', () => {
  it('um produto do tipo objeto', () => {
    const result = findById(3);
    expect(result).toBeInstanceOf(Object);
  });

  it('o produto com o id especificado', () => {
    const result = findById(2);
    const expected = {
      id: 2,
      name: 'Caneca',
      price: 19.90,
      quantity: 12,
      brands: ['Stanley', 'Camelbak']
    };
    expect(result).toStrictEqual(expected);
  });

  it('uma mensagem do tipo string caso não encontre o id', () => {
    const result = findById(99);
    expect(typeof result).toBe('string');
  });

  it('uma mensagem caso não encontre o id', () => {
    const result = findById(45);
    const expected = 'Produto com ID 45 não encontrado.';
    expect(result).toBe(expected);
  });
});
