'use strict';
import { Reservationy } from "./Reservationy";

export class Reservation implements Reservationy {
  private _dow: string;
  private _code: string;
  
  constructor() {
    this._dow = this.getDowBooking();
    this._code = this.getCodeBooking();
  }

  getDowBooking(): string {
    const dow: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let RandomIndex: number = Math.floor(Math.random() * 7);
    return dow[RandomIndex];
  }
    
  getCodeBooking(): string {
  return Math.random()
    .toString(36)
    .substr(2,8)
    .toUpperCase();
  }

  printReservations(): void {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }

}

let reservations: Reservation[] = [];
for (let i = 0; i < 12; i++) reservations.push(new Reservation);
reservations.forEach((item: Reservation) => item.printReservations());