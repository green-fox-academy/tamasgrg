'use strict';
import { StringedInstrument } from "./StringedInstrument";
// Electric Guitar (6 strings, 'Twang')
export class ElectricGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 6) {
    super(numberOfStrings);
  }

  sound(): string {
    return 'Twang';
  }

}