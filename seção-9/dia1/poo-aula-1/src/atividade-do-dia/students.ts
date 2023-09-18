class Students {
  private _matricula: string;
  private _nome: string;
  private _provas: number[];
  private _trabalhos: number[];

  constructor( 
    matricula: string,
    nome: string,
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._provas = [];
    this._trabalhos = [];
  }
  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get name(): string {
    return this._nome;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }

  get provas(): number[] {
    return this._provas;
  }

  set provas(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._provas = value;
  }

  get trabalhos(): number[] {
    return this._trabalhos;
  }

  set trabalhos(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._trabalhos = value;
  }

  sumGrades(): number {
    return [...this._provas, ...this._trabalhos]
      .reduce((previousNote, note) => {
        const nextNote = note + previousNote;

        return nextNote;
      }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this._provas.length + this._trabalhos.length;

    return Math.round(sumGrades / divider);
  }
}

// Para testar!

const personOne = new Students('202001011', 'Maria da Silva');

console.log(personOne);

personOne.provas = [25, 20, 23, 23];
personOne.trabalhos = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());
  
