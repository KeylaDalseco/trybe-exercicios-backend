const fs = require('fs').promises;
const { log } = require('console');
const path = require('path');

const simpsons = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
    const response = JSON.parse(data);
    const personagens = response.map((personagem) => {
      const a = `${personagem.id} - ${personagem.name}`;
      return a;
    });
    console.log(personagens);
  } catch (e) {
    console.error(`Erro na leitura do arquivo${e}`);
  }
};

// simpsons();

const procuraPeloId = async (id) => {
  try {
  const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
  const response = JSON.parse(data);
  const personagens = response.filter((personagem) => {
    if (id === personagem.id) {
      return personagem;
    }
  });
  console.log(personagens[0]);
} catch (e) {
  console.error(`id não encontrado ${e}`);
}
};

// procuraPeloId('3');

const apagaPeloId = async (id1, id2) => {
  try{
  // const personagensAntigos = await simpsons();
  const data = await fs.readFile(path.resolve(__dirname,'./simpsons.json'));
  const response = JSON.parse(data);
  const filtroId = response.filter((per) => per.id !== id1 && per.id !== id2);

  await fs.writeFile('simpsons2.json', JSON.stringify(filtroId));
  console.log(filtroId);
} catch (e) {
  console.error(`id não encontrado ${e}`);
}
};

// apagaPeloId('10', '6');

const simpsonFamily = async () => {
  try {
  // const personagensAntigos = await simpsons();
  const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
  const response = JSON.parse(data);
  const filtroId = response.filter((per) => parseInt(per.id) <= 4);
  await fs.writeFile('simpsonFamily.json', JSON.stringify(filtroId));
  // console.log(filtroId);
  return filtroId;
} catch (e) {
  console.error(`id não encontrado ${e}`);
}
};

// simpsonFamily();

const simpsonFamilyAlt = async (nelson) => {
  try {
  const personagensAntigos = await simpsonFamily();
  const allPersonagens = JSON.stringify([...personagensAntigos, nelson]);
  console.log(allPersonagens);
  await fs.writeFile(path.resolve(__dirname, './simpsonFamily.json'), allPersonagens);
  return allPersonagens;
} catch (e) {
  console.error(`id não encontrado ${e}`);
}
};

// simpsonFamilyAlt({
// id: '5', name: 'Nelson Muntz',
// });

const addMaggieSimpson = async (maggie) => {
  try {
  const personagensAntigos =  await fs.readFile(path.resolve(__dirname, './simpsonFamily.json'));
  const data = JSON.parse(personagensAntigos);
  const removerNelson = data.filter((per) => per.id !== '5');
  // console.log(removerNelson);
  const allPersonagens = JSON.stringify([...removerNelson, maggie]);
  console.log(allPersonagens);

  await fs.writeFile(path.resolve(__dirname, './simpsonFamilyas.json'), allPersonagens);
} catch (e) {
  console.error(`id não encontrado ${e}`);
}
};

addMaggieSimpson({ id: '5', name: 'Maggie Simpson' });
