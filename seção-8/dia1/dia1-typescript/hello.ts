// annotation de variável

const firstName:string = 'Joel';
const age:number = 38;
const brazilian:boolean = false;

console.log('Hello, TypeScript!');

// Annotation em função - parametros

const greet = (name:string) => {
  console.log(`Olá, ${name.toUpperCase()}!`);
};

greet(firstName);

// Annotation em função - retorno

function getFavoriteNumber():number {
  return 26;
};

const getFavoriteNumber2 = ():number => {
  return 26;
};

// função sem retorno - geralmente é adicionado uma void. Geralmente é adicionada automaticamente.

const hello = (name:string): void => {
  console.log(`Olá, ${name.toUpperCase()}!`);
};

// Annotation OBJETOS

const printPersonalInfo = (data: { name:string, birthYear:number }) => {
  console.log(`${data.name} was born in ${data.birthYear}.`);
};

printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });


// Annotation LISTAS(ARRAYS):

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

evenNumbers.push(8);



// Union TYPES:

function printId(id: number | string) {
  if (typeof id === "string") {
    return console.log(id.toUpperCase());
  }
  return console.log(id);
}

printId('aa');


// Type ALIASES:

// É criada a estrutura do objeto para evitar grandes linhas ou objetos grandes;
type PersonalInfo = {
  name: string;
  birthYear: number | string; // vc tbm pode usar união de tipos
};

// é passada no parametro recebido:
function printPersonalInfo2(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}

printPersonalInfo2({ name: 'Rogerinho', birthYear: 1978});



// ================ EXERCÍCIOS DE UNION TYPES E ALIASES


type estadosFísicos = 'liquido' | 'solido' | 'gasoso';
type id = string | number;
type SO = 'linux' | 'MacOs' | 'Windows'; 

type name = string | string[]; // recebe um nome ou vários nomes.
type address = {
  cidade: string,
  estado: string,
  rua: string,
  numero: number,
};
