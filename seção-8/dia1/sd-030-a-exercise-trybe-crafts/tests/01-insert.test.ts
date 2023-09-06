import insert from '../src/01-insert';

describe('01 - insert deve', () => {
  it('retornar uma string, após receber o nome do produto', () => {
    type Insert = (name: string) => string;
    const add: Insert = insert;
    const result = add('Camiseta');
    expect(typeof result).toBe('string');
  });

  it('retornar a mensagem `Camiseta adicionado(a) com sucesso!`', () => {
    type Insert = (name: string) => string;
    const add: Insert = insert;
    const result = add('Camiseta');
    expect(result).toBe('Camiseta adicionado(a) com sucesso!');
  });
});
