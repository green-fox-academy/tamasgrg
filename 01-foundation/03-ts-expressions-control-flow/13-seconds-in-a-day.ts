'use strict';
let currentHours: number = 23;
let currentMinutes: number = 59;
let currentSeconds: number = 59;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let fullDayInSeconds: number = 60 * 60 * 24;
let secondsPassed: number = currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds;
if (currentHours > 23 || currentMinutes > 59 || currentSeconds > 59) {
    console.log('szedjed magad kicsit ossze, arra kerlek');
} else {
    console.log(fullDayInSeconds - secondsPassed);
}
export {};