interface Person1 {
  name: string,
  info: string,
}

class Student implements Person1 {
  constructor(public name: string, public school: string) {}

  get info() {
    return `${this.name} estuda no colégio ${ this.school}`
  }
}

class Professor implements Person1 {
  constructor(
    public name: string,
    public school: string,
    public subject: string
  ) { }

  get info() {
    return `${this.name} leciona ${this.subject} no colégio ${ this.school}`
  }
}

const printInfo = (person: Person1) => {
  console.log(person.info)
}

const student = new Student('keyla', 'Batista');
const teacher = new Professor('Maria', 'Marista', 'sociologia');

printInfo(student);
printInfo(teacher);