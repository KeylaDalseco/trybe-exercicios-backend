class Person1 {
  name: string;
  height: number;
  weight?: number; // o caractere "?" indica um atributo opcional

  constructor(n: string, h: number, w?: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p11 = new Person1('Maria', 171, 58);
// aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight
const p22 = new Person1('João', 175);
console.log(p11.name, p11.height, p11.weight);
console.log(p22.name, p22.height, p22.weight);
p11.sleep();
p22.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 undefined
Maria: zzzzzzz
João: zzzzzzz
*/
