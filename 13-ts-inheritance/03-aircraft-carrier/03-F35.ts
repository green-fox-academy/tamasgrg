'use strict';
import { Aircraft } from "./03-Aircraft";
  
export class F35 extends Aircraft {

  static readonly MAX_AMMO: number = 12;
  static readonly BASE_DMG: number = 50;
  protected _ammo: number;
  
  constructor() {
    super(F35.MAX_AMMO, F35.BASE_DMG);
    // this._ammo = 0;
    // this._maxAmmo = maxAmmo;
    // this._baseDmg = baeDmg;
  }

}

// let a = new F35
// console.log(

// a.getStatus()
// )
// F35
// Max ammo: 12
// Base damage: 50