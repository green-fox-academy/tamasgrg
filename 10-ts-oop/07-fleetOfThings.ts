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
  name: string
  constructor(name: string) {
    this.name = name;
  }

  main() {
    let milk = new Thing('Get milk');
    let remove = new Thing('Remove the obstacles');
    
    fleet.add(milk);
    fleet.add(remove);
    
    // fleet.add(new Thing('Remove the obstacles'));
    // fleet.add(new Thing('Stand up'));
    // fleet.add(new Thing('Eat lunch'));

    milk.complete;
    return fleet
  }
}

let cucc = new FleetOfThings('cucc')
console.log(
cucc.main()
)