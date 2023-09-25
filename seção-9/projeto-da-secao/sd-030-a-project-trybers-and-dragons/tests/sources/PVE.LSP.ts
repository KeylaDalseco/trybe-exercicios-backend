import Battle, { PVE } from '../../src/Battle';
import Character from '../../src/Character';
import { SimpleFighter } from '../../src/Fighter';
import Monster from '../../src/Monster';

const fight = (battle: Battle) => battle.fight();

const result = () => {
  function newAttack(enemy: SimpleFighter): void {
    enemy.receiveDamage(12);
  }

  jest.spyOn(Monster.prototype, 'attack').mockImplementation(newAttack);
  jest.spyOn(Character.prototype, 'attack').mockImplementation(newAttack);

  const player1 = new Character('');
  // Aqui elevamos o nível de `player1` para o mínimo necessário para vencer, mas sem acabar em um round
  for (let i = 0; i < 63; i++) player1.levelUp();
  const monster = new Monster();
  const pve1 = new PVE(player1, [monster]);

  const player2 = new Character('');
  const monsters: Monster[] = [];
  for (let i = 0; i < 50; i++) monsters.push(new Monster());
  const pve2 = new PVE(player2, monsters);

  jest.clearAllMocks();

  return [fight(pve1), fight(pve2)];
};
