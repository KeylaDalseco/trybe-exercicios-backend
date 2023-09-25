import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private type: EnergyType;
  private static instance = 0;

  constructor(name:string) {
    super(name);
    this.type = 'stamina';
    Ranger.instance += 1;
  }

  override get energyType(): EnergyType {
    return this.type;
  }

  static override createdArchetypeInstances(): number {
    return this.instance;
  }
}