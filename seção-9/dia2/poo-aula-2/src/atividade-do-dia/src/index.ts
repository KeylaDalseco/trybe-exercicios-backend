import { Person } from './Person';
import { Class } from './Class';
import { Employee } from './Employee';

const keyla = new Person('Keyla', new Date('1997/12/14'));
const nego = new Person('Raphael', new Date('1996/05/20'));

const matematica = new Class('matemática');
const historia = new Class('História');
const filosofia = new Class('Filosofia');

const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

console.log(keyla);
console.log(nego);
console.log(matematica);
console.log(historia);
console.log(filosofia);


