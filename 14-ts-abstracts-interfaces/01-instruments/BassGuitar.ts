'use strict';
import { StringedInstrument } from "./StringedInstrument";
// Bass Guitar (4 strings, 'Duum-duum-duum')
export class BassGuitar extends StringedInstrument {
  constructor(
    numberOfStrings: number = 4,
    sound: string = 'Duum-duum-duum',
    name: string = 'Bass Guitar'
  ) {
    super(numberOfStrings, sound, name);
  }
}