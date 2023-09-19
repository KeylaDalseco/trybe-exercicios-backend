export class Person {
  protected MINIMUM_NAME_LENGTH = 3;
  protected MAXIMUM_AGE = 120;

  constructor(private _name:string, private _birthDate: Date) {
    this.validatePerson(); // validação do objeto criado com o construtor da classe
    this._name = _name;
    this._birthDate = _birthDate;
  }

  get name():string {
    return this._name;
  }

  set name(name:string) {
    this._name = name;
  }

  get birthDate():Date {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    this._birthDate = date;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateName(name: string): void {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve conter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres.`);
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`);
    }
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}