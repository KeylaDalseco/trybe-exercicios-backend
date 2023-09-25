import Battle, { PVP } from '../../src/Battle';
import Character from '../../src/Character';
import { SimpleFighter } from '../../src/Fighter';

const fight = (battle: Battle) => battle.fight();

const result = () => {
  function newAttack(enemy: SimpleFighter): void {
    enemy.receiveDamage(12);
  }

  jest.spyOn(Character.prototype, 'attack').mockImplementation(newAttack);
  const player1 = new Character('');
  // Aqui elevamos o nível de `player1` para o mínimo necessário para vencer, mas sem acabar em um round
  for (let i = 0; i < 10; i++) player1.levelUp();
  const player2 = new Character('');
  const pvp1 = new PVP(player1, player2);
  
  const player3 = new Character('');
  // Aqui elevamos o nível de `player3` para o mínimo necessário para vencer, mas sem acabar em um round
  for (let i = 0; i < 10; i++) player3.levelUp();
  const player4 = new Character('');
  const pvp2 = new PVP(player4, player3);

  jest.clearAllMocks();

  return [fight(pvp1), fight(pvp2)];
};
