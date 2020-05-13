'use strict';

import { Pirate } from "./Pirate";
import { Captain } from "./Captain";

export class Ship {

  private _crew: Pirate[];
  private _captain: Captain;

  constructor() {
    this._crew = [];
    this._captain = new Captain('theCaptain', 1000, true);
  }

  addPirates(pirate: Pirate): string {
    if (pirate.isCaptain) 
      return `This ship has a captain already, you cannot add ${pirate.name} to the crew`;
    this._crew.push(pirate);
    return `${pirate.name} has been successfully added to the crew`;
  }

  getPoorPirates(): string[] {
    const poorBastards: string[] = [];
    this._crew.forEach((value: Pirate) => {
      if (value.isWoodenLegged && value.goldAmount < 15)
        poorBastards.push(value.name);
    });
    return poorBastards;
  }

  getGolds(): number {
    let sumGold: number = 0;
    this._crew.forEach((value: Pirate) => {
      sumGold += value.goldAmount;
    });
    sumGold += this._captain.goldAmount;
    return sumGold;
  }

  lastDayOnTheShip(): void {
    this._crew.forEach((value: Pirate) => value.party());
    this._captain.party();
  }
  
  prepareForBattle(): void {
    for (let i = 0; i < 5; i++) {
      this._crew.forEach((value: Pirate) => value.work());
      this._captain.party();  
    }
    this.lastDayOnTheShip();
  }
  
}

export{};