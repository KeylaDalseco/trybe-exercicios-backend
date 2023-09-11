describe('05 - Type CartItem', () => {
  it('O type CartItem existe', () => {
    expect('CartItem.exists').toCompile();
  });

  it('O type CartItem deve ter o atributo name', () => {
    expect('CartItem.without_name').notToCompile();
  });

  it('O type CartItem deve ter o atributo price', () => {
    expect('CartItem.without_price').notToCompile();
  });

  it('O type CartItem deve ter o atributo quantity', () => {
    expect('CartItem.without_quantity').notToCompile();
  });

  it('O type CartItem deve ter os atributos name e price', () => {
    expect('CartItem.valid').toCompile();
  });
});
