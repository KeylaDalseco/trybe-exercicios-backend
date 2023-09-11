import { first } from '../src/functions';
import { Drink } from '../src/types/Drink';
import { Food } from '../src/types/Food';
import foods from './fixtures/foods';
import drinks from './fixtures/drinks';

describe('03 - Função first', () => {
  it('A função first devolve o primeiro elemento de um array de strings', () => {
    const arrString: string[]  = ['a', 'b', 'c'];
    const firstElement = first<string>(arrString);
    expect(firstElement).toBe(arrString[0]);
  });

  it('A função first devolve o primeiro elemento de um array de números', () => {
    const arrNumber: number[]  = [1, 2, 3];
    const firstElement = first<number>(arrNumber);
    expect(firstElement).toBe(arrNumber[0]);
  });

  it('A função first devolve o primeiro elemento de um array de comidas', () => {
    const firstElement = first<Food>(foods);
    expect(firstElement).toBe(foods[0]);
    expect(firstElement.name).toBe(foods[0].name);
    expect(firstElement.price).toBe(foods[0].price);
    expect(firstElement.weight).toBe(foods[0].weight);
    expect(firstElement.weightUnit).toBe(foods[0].weightUnit);
  });

  it('A função first devolve o primeiro elemento de um array de bebidas', () => {
    const firstElement = first<Drink>(drinks);
    expect(firstElement).toBe(drinks[0]);
    expect(firstElement.name).toBe(drinks[0].name);
    expect(firstElement.price).toBe(drinks[0].price);
    expect(firstElement.capacity).toBe(drinks[0].capacity);
    expect(firstElement.capacityUnit).toBe(drinks[0].capacityUnit);
  });

  it('A função first devolve undefined quando o array é vazio', () => {
    const firstElement = first<string>([]);
    expect(firstElement).toBe(undefined);
  });;
});
