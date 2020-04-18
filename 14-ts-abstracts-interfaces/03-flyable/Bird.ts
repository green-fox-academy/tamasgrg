'use strict';
import { Animal } from "../../10-ts-oop/03-animal";
import { Flyable } from "./Flyable";

// Extend Bird from your abstract Animal class (zoo exercise)
//   implement your Flyable interface

export class Bird extends Animal implements Flyable{

  land(){};
  fly(){};
  takeoff(){};

}