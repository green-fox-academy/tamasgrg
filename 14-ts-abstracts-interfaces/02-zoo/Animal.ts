'use strict';
export abstract class Animal {

  protected _name: string;
  protected _age: number;
  protected _size: string;
  protected _gender: string;
  protected _breedMethod: string;

  constructor(name: string, breedMethod: string) {

  }
  
  getName(): string {
    return this._name;
  }

  breed(): string {
    return this._breedMethod;
  }

  kill() {

  }

}