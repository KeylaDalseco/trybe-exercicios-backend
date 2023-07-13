const readline = require('readline-sync');

const bmi = (weight, height) => {
  const total = weight / (height * height);
  if( total < 18.5) {
    return console.log('Você está baixo do peso - Magreza!')
  }
  if( total >= 18.5 && total <= 24.9 ) {
    console.log('Você está com o peso normal - Eutrófico!');
    return total;
  }
  if( total >= 25 && total <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
    return total;
  }
  if( total >= 30 && total <= 34.9 ) {
    console.log('Obesidade grau I');
    return total;
  }
  if(total >= 35 && total <= 39.9) {
    console.log('Obesidade grau II!');
    return total;
  }
  if(total > 40) {
    console.log('Obesidade graus III e IV!');
    return total;
  }
}

const weight = readline.questionFloat('What`s your weight?');
const height = readline.questionInt('What`s your height?');
const total = bmi(57, 1.71);

console.log(`Seu IMC atual é: ${total}`);