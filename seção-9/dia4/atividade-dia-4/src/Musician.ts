// Musician.ts
// exemplo correto, sem criar instancia dentro do constructor e pssando esse como parametro do contructor.
import Flute from './Flute';

export default class Musician {
  // Agora a flauta é recebida como parâmetro
  constructor(
    public name: string,
    public flute: Flute = new Flute('Minha flauta'), // passado valor padrão
  ) { }

  play(): void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}

const flute = new Flute('Minha flauta');
const musician = new Musician('Márcia', flute);
musician.play();


// ============================================================
// EXEMPLO COM FUNCIONALIDADE DINAMICA E MELHOR AINDA.
// GERALMENTE IRÁ POSSUIR INTERFACE

interface Instrument {
  name: string;
  play(): void;
}

class Flute1 implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class Musician1 {
  constructor(
    public name: string,
    public instrument: Instrument = new Flute1('Minha flauta')
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`
    );
  }
}

const musician1 = new Musician1('Márcia');
const musician2 = new Musician1('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician1('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();