'use strict';
import { Flower } from "./02-Flower";
import { Tree } from "./02-Tree";
import { Garden } from "./02-Garden";
// The task is to create a garden application, so in your main method you should create
//   a garden with flowers and trees. The program should demonstrate an example garden with
//   two flowers (yellow and blue) and two trees (purple and orange). In the example after
//   creating them you should show the user, how the garden looks like. After that the program
//   should water the garden twice, first with the amount of 40 then with 70. And after every
//   watering the user should see the state of the garden as you can see in the output.

let myGarden = new Garden;
// console.log(myGarden);
myGarden.addPlant(new Flower('yellow'));
myGarden.addPlant(new Flower('blue'));
myGarden.addPlant(new Tree('purple'));
myGarden.addPlant(new Tree('orange'));
// console.log(myGarden);
myGarden.showGarden();
myGarden.water(40);
myGarden.water(70);
// console.log(myGarden);


// The output should look like this:

// The yellow Flower needs water
// The blue Flower needs water
// The purple Tree needs water
// The orange Tree needs water
// The purple Tree needs water
// The orange Tree needs water

// Watering with 70
// The yellow Flower doesnt need water
// The blue Flower doesnt need water
// The purple Tree doesnt need water
// The orange Tree doesnt need water