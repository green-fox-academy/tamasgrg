'use strict';
import { Vehicle } from "./Vehicle";
import { Flyable } from "./Flyable";

// Extend Helicopter class from Vehicle
//   implement your Flyable interface

export class Helicopter extends Vehicle implements Flyable {
  
  land(){};
  fly(){};
  takeoff(){};

}
