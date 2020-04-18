'use strict';
// We start with a base, abstract class Instrument.
// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.
export abstract class Instrument {
  protected _name: string;

  constructor() {
  }

  abstract sound(): string;
  
  play() {
    console.log(    
    this.sound()
    )
    // console.log(this.StringedInstrument.sound());
    
  }
}