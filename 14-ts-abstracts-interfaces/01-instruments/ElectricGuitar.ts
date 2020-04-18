'use strict';
import { StringedInstrument } from "./StringedInstrument";
// Electric Guitar (6 strings, 'Twang')
export class ElectricGuitar extends StringedInstrument {
  constructor(
    numberOfStrings: number = 6,
    sound: string = 'Twang',
    name: string = 'Electric Guitar'
  ) {
    super(numberOfStrings, sound, name);
  }
}