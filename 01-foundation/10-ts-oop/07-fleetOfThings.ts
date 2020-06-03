'use strict';
import { Thing } from './07-Thing';
import { Fleet } from './07-Fleet';
let fleet = new Fleet();
// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch
// Hint: You have to create a `print()` method as well 
export class FleetOfThings {
  
  main(): void {
    let getMilk = new Thing('Get milk');
    let removeTheObstacles = new Thing('Remove the obstacles');
    let standUp = new Thing('Stand up');
    let eatLunch = new Thing('Eat lunch');

    fleet.add(getMilk);
    fleet.add(removeTheObstacles);
    fleet.add(standUp);
    fleet.add(eatLunch);
    
    standUp.complete();
    eatLunch.complete();
  }

  print(): void {
    let ifTrue: string = '';
    let result: string = '';
    for (let i: number = 0; i < fleet.getThings().length; i++) {
      fleet
        .getThings()[i]
        .getCompleted() ?
          ifTrue = '. [X] ':
          ifTrue = '. [ ] ';
      result =
        i + 1 +
        ifTrue +
        fleet
          .getThings()[i]
          .getName();
      console.log(result);
      }
  }
}

let fleetOfThings = new FleetOfThings();
fleetOfThings.main();
fleetOfThings.print();