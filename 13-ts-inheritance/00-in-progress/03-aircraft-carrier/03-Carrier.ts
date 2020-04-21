'use strict';
import { Aircraft } from "./03-Aircraft";
import { F16 } from "./03-F16";
import { F35 } from "./03-F35";

export class Carrier {

  private _aircrafts: Aircraft[];
  private _ammoStore: number;
  private _hp: number;

  constructor(ammo: number, hp: number) {
    this._aircrafts = [];
    this._ammoStore = ammo;
    this._hp = hp;
  }

  add(newAircrafts: number): void {
    for (let i = 0; i < newAircrafts; i++) {
      let randomNumber: number = Math.floor(Math.random() * 2);
      randomNumber == 0 ? this._aircrafts.push(new F16) : this._aircrafts.push(new F35); 
    }
  }
// It should fill all the aircraft with ammo and subtract the needed ammo from the ammo storage
// If there is not enough ammo then it should start to fill the aircrafts with priority first
// If there is no ammo when this method is called, it should throw an exception
  fill(): void {
    this._aircrafts.filter((value: Aircraft) => value.isPriority())
      .forEach((value: Aircraft) => {
        this._ammoStore -= value.refill(this._ammoStore);
        if (this._ammoStore = 0) console.log('error, no ammo');
      })
    this._aircrafts.forEach((value: Aircraft) => {
      this._ammoStore -= value.refill(this._ammoStore);
      if (this._ammoStore = 0) console.log('error, no ammo');
    })
  }

  getStatus(): string {
    return `HP: ${this._hp}, ` +
        `Aircraft count: ${this._aircrafts.length}, ` +
        `Ammo Storage: ${this._ammoStore}, ` +
        `Total damage: xxxxxxxxx` +
        `\nAircrafts:` +
        this._aircrafts.forEach((value: Aircraft) => value.getStatus());
  }
   
    // If the health points are 0 then it should return: It's dead Jim :(
}

// Carrier
// Create a class that represents an aircraft-carrier

// The carrier should be able to store aircrafts
// Each carrier should have a store of ammo represented as number
// The initial ammo should be given by a parameter in its constructor
// The carrier also has a health point given in its constructor as well
// Methods
// add
// It should take a new aircraft and add it to its storage
// fill
// It should fill all the aircraft with ammo and subtract the needed ammo from the ammo storage
// If there is not enough ammo then it should start to fill the aircrafts with priority first
// If there is no ammo when this method is called, it should throw an exception
// fight
// It should take another carrier as a reference parameter and fire all the ammo from the aircrafts to it, then subtract all the damage from its health points
// getStatus
// It should return a string about itself and all of its aircrafts' statuses in the following format:

// HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
// Aircrafts:
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// If the health points are 0 then it should return: It's dead Jim :(