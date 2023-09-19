class Superclass {
  constructor ( public isSuper: boolean = true) {}

  protected sayHello(): void {
    console.log('Olá mundo!!');
  }
}

class Subclass extends Superclass {
  public sayHello2(): void {
    this.sayHello();
  }
}

const myFunc = (object: Subclass) => {
  object.sayHello2();
}

const ex1 = new Subclass();
const ex2 = new Superclass();

myFunc(ex1);