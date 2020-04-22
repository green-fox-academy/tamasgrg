'use strict';
import { Aircraft } from "./03-Aircraft";
  
export class F16 extends Aircraft {

  static readonly MAX_AMMO: number = 8;
  static readonly BASE_DMG: number = 30;
  protected _ammo: number;
  
  constructor() {
    super(F16.MAX_AMMO, F16.BASE_DMG);
    // this._ammo = 0;
    // this._maxAmmo = maxAmmo;
    // this._baseDmg = baeDmg;
  }

}

// F16
// Max ammo: 8
// Base damage: 30