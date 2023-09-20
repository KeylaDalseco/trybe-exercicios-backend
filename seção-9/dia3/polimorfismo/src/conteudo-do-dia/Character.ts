abstract class Character {
  abstract talk():void;
  abstract specialMove():void;
  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharecter extends Character {
  talk():void {
    console.log('Hi, your welcome!');
  };

  specialMove(): void {
    console.log('You used your special move!');
  }
}

class LongRangeCharacter extends Character {
  talk():void {
    console.log('Hi, your welcome 2!');
  };

  specialMove(): void {
    console.log('You used your special move for the second time!');
  }
}

const Yoshi = new MeleeCharecter();
const Samus = new LongRangeCharacter();
Character.characterPresentation(Yoshi);
Character.characterPresentation(Samus);


Yoshi.specialMove();
Yoshi.talk();
Samus.specialMove();
Samus.talk();
