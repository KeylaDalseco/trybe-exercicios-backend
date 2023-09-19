interface MyInterface {
  myNumber: number;

  myFunc (myParam: number): string ;
}

class MyClass implements MyInterface {
  constructor(public myNumber:number) {}

  myFunc(myParam: number): string {
    return `soma: ${this.myNumber + myParam}`;
  }
}

const objeto = new MyClass(20);
console.log(objeto.myNumber);
console.log(objeto.myFunc(4));