class Superclass1 {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass1 extends Superclass1 {
  // No construtor da _Subclass1_, o atributo _isSuper_ deve ser setado como `false`. Você vai precisar utilizar o _super_.
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc1 = (object: Superclass1) => {
  object.sayHello();
  // Dentro da função que recebe um objeto da _Superclass1_ como parâmetro, cheque o valor do atributo _isSuper_ e imprima no console "Super!" se for `true` e "Sub!" se for `false`;
  console.log(object.isSuper ? 'Super!' : 'Sub!');
};

const sup1 = new Superclass1();
const sub1 = new Subclass1();

myFunc1(sup1);
myFunc1(sub1);