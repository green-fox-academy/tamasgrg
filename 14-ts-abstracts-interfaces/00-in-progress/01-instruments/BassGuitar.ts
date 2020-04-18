'use strict';
import { StringedInstrument } from "./StringedInstrument";
// Bass Guitar (4 strings, 'Duum-duum-duum')
export class BassGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super(numberOfStrings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }

}