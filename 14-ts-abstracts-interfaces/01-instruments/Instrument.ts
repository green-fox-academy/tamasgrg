'use strict';
// We start with a base, abstract class Instrument.
// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.
export abstract class Instrument {
  protected _name: string;
  protected _sound: string;

  constructor(sound: string, name: string) {
    this._sound = sound;
    this._name = name;
  }

  abstract sound(): string;
  
  play() {
    console.log(this.sound());
  }

}