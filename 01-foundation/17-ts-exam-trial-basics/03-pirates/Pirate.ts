'use strict';

export class Pirate {

  protected _name: string;
  protected _goldAmount: number;
  protected _hp: number;
  protected _isWoodenLegged: boolean;
  protected _isCaptain: boolean;

  constructor(name: string, goldAmount: number, isWoodenLegged: boolean) {
    this._name = name;
    this._goldAmount = goldAmount;
    this._hp = 10;
    this._isWoodenLegged = isWoodenLegged;
    this._isCaptain = false;
  }

  get name(): string {
    return this._name;
  }

  get goldAmount(): number {
    return this._goldAmount;
  }

  get hp(): number {
    return this._hp;
  }
  
  get isWoodenLegged(): boolean {
    return this._isWoodenLegged;
  }

  get isCaptain(): boolean {
    return this._isCaptain;
  }

  work(): void {
    this._goldAmount ++;
    this._hp --;
  }

  party(): void {
    this._hp ++;
  }

  toString(): string {
    const woodLeggedText: string = `Hello, I\'m ${this._name}. I have a wooden leg and ${this._goldAmount} golds.`;
    const notWoodLeggedText: string = `Hello, I\'m ${this._name}. I still have my real legs and ${this._goldAmount} golds.`;
    console.log(this._isWoodenLegged ? woodLeggedText : notWoodLeggedText);
    return this._isWoodenLegged ? woodLeggedText : notWoodLeggedText;
  }

}

export{};