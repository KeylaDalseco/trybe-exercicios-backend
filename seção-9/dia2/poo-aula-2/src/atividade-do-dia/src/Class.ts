export class Class {
  constructor(private _name:string) {
    this._name = _name;
    this.validateName(this._name);
  }

  get name() {
    return this._name;
  }
  
  set name(name:string) {
    this._name = name;
  }

  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error(`O nome deve conter no mínimo ${3} caracteres.`);
    }
  }
}