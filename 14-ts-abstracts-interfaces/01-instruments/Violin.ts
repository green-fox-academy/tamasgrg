'use strict';
import { StringedInstrument } from "./StringedInstrument";
// Violin (4 strings, 'Screech')
export class Violin extends StringedInstrument {
  constructor(
    numberOfStrings: number = 4,
    sound: string = 'Screech',
    name: string = 'Violin'
  ) {
    super(numberOfStrings, sound, name);
  }
}