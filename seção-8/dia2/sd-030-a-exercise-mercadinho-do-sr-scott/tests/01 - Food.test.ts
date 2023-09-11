describe('01 - Type Food', () => {
  it('O type Food existe', () => {
    expect('Food.exists').toCompile();
  });

  it('O type Food deve ter o atributo name', () => {
    expect('Food.without_name').notToCompile();
  });

  it('O type Food deve ter o atributo price', () => {
    expect('Food.without_price').notToCompile();
  });

  it('O type Food deve ter o atributo weight', () => {
    expect('Food.without_weight').notToCompile();
  });

  it('O type Food deve ter o atributo weightUnit', () => {
    expect('Food.without_weight_unit').notToCompile();
  });

  it('O type Food deve ter os atributos name, price, weight, weightUnit', () => {
    expect('Food.valid').toCompile();
  });
});
