describe('02 - Type Drink', () => {
  it('O type Drink existe', () => {
    expect('Drink.exists').toCompile();
  });

  it('O type Drink deve ter o atributo name', () => {
    expect('Drink.without_name').notToCompile();
  });

  it('O type Drink deve ter o atributo price', () => {
    expect('Drink.without_price').notToCompile();
  });

  it('O type Drink deve ter o atributo capacity', () => {
    expect('Drink.without_capacity').notToCompile();
  });

  it('O type Drink deve ter o atributo capacityUnit', () => {
    expect('Drink.without_capacity_unit').notToCompile();
  });

  it('O type Drink deve ter os atributos name, price, capacity, capacityUnit', () => {
    expect('Drink.valid').toCompile();
  });
});
