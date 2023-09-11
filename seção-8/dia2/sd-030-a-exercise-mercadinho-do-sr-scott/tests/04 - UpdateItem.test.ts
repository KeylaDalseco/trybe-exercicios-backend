import { updateItem } from '../src/functions';
import { Drink } from '../src/types/Drink';
import { Food } from '../src/types/Food';
import foods from './fixtures/foods';
import drinks from './fixtures/drinks';

describe('04 - Função updateItem', () => {
  it('A função updateItem é capaz de atualizar um array de numbers', () => {
    const arrNumber: number[]  = [1, 2, 3];
    const index = 1;
    const updatedValue = 5000;
    const updateArr = updateItem<number>(arrNumber, index, updatedValue);
    expect(updateArr[1]).toBe(updatedValue);
  });

  it('A função updateItem altera o elemento e retorna o array de strings atualizado', () => {
    const arrString: string[]  = ['a', 'b', 'c'];
    const index = 2;
    const updatedValue = 'updated';
    const updateArr = updateItem<string>(arrString, index, updatedValue);
    expect(updateArr[2]).toBe(updatedValue);
  });

  it('A função updateItem é capaz de atualizar um array de comidas', () => {
    const index = 1;
    const updatedFood: Food = {
      name: "Pizza Grande",
      price: 80,
      weight: 200,
      weightUnit: 'g'
    };
    const updateArr = updateItem<Food>(foods, index, updatedFood);
    expect(updateArr[index].name).toBe(updatedFood.name);
    expect(updateArr[index].price).toBe(updatedFood.price);
    expect(updateArr[index].weight).toBe(updatedFood.weight);
    expect(updateArr[index].weightUnit).toBe(updatedFood.weightUnit);
  });

  it('A função updateItem é capaz de atualizar um array de bebidas', () => {
    const index = 0;
    const updatedDrink: Drink =   {
      name: "Coca-cola 2l",
      price: 10.0,
      capacity: 2,
      capacityUnit: 'l'
    };
    const updateArr = updateItem<Drink>(drinks, 0, updatedDrink);
    expect(updateArr[index].name).toBe(updatedDrink.name);
    expect(updateArr[index].price).toBe(updatedDrink.price);
    expect(updateArr[index].capacity).toBe(updatedDrink.capacity);
    expect(updateArr[index].capacityUnit).toBe(updatedDrink.capacityUnit);
  });

  it('A função updateItem não altera o array ao receber um índice que não existe', () => {
    const arrString: string[]  = ['a', 'b', 'c'];
    const index = 5;
    const updatedValue = 'updated';
    const updateArr = updateItem<string>(arrString, index, updatedValue);
    expect(updateArr).toStrictEqual(arrString);
  });
});
