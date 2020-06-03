'use strict';
import { Armada } from "./15-Armada";

export class WarApp {

  static war(armada1: Armada, armada2: Armada): void {
    armada1.fillArmada();
    armada2.fillArmada();
    armada1.war(armada2);
  }
}