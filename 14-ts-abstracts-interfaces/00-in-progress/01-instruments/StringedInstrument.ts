'use strict';
import { Instrument } from "./Instrument";
// Next, we add another abstract class, StringedInstrument which extends Instrument.
// It introduces numberOfStrings and sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable

// StingedInstrument has 3 descendants, namely:
// Electric Guitar (6 strings, 'Twang')
// Bass Guitar (4 strings, 'Duum-duum-duum')
// Violin (4 strings, 'Screech')
// The Workshop should be invoked from another file like app.ts or main.ts
export abstract class StringedInstrument extends Instrument {
  private _numberOfStrings: number;

  constructor(numberOfStrings: number) {
    super();
    this._numberOfStrings = numberOfStrings;
  }

  abstract sound(): string;

}