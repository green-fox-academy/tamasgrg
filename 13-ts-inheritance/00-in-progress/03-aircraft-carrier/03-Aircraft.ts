'use strict';
// import { F16 } from "./03-F16";
// import { F35 } from "./03-F35";
export abstract class Aircraft {

  protected _maxAmmo: number;
  protected _baseDmg: number;
  protected _ammo: number;

  constructor (maxAmmo: number, baseDmg: number) {
    this._maxAmmo = maxAmmo;
    this._baseDmg = baseDmg;
    this._ammo = 0;
  }

  get ammo(): number {
    return this._ammo;
  }

  set ammo(newAmmo: number) {
    this._ammo = newAmmo;
  }

  get maxAmmo(): number {
    return this._maxAmmo;
  }

  fight(): number {
    let dmg: number = this._ammo * this._baseDmg;
    this._ammo = 0;
    return dmg;
  }

  refill(amount: number): number {
    if (amount + this._ammo <= this._maxAmmo) {
      this._ammo += amount;
      return 0;
    } else {
      let getAmmo: number = this._maxAmmo - this._ammo;
      this._ammo = this._maxAmmo;
      return amount - getAmmo;
    }
  }

  getType(): string {
    return this.constructor.name;
  }

  getStatus(): string {
    return `Type ${this.constructor.name}, ` +
      `Ammo: ${this._ammo}, ` +
      `Base Damage: ${this._baseDmg}, ` +
      `All Damage: ${this._ammo * this._baseDmg}`;
  }

  isPriority(): boolean {
    return this.constructor.name == 'F35' ? true : false;
  }

}

// Aircrafts
// Create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition

// All aircrafts should be created with an empty ammo storage

// Methods
// fight
// It should use all the ammo (set it to 0) and it should return the damage it deals
// The damage dealt is calculated by multiplying the base damage by the ammunition
// refill
// It should take a number as parameter and subtract as much ammo as possible
// It can't have more ammo than the number or the max ammo (can't get more ammo than what's coming from the parameter or the max ammo of the aircraft)
// It should return the remaining ammo
// Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288
// getType
// It should return the type of the aircraft as a string
// getStatus
// It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
// isPriority
// It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16