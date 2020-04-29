'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether
function candyCounter(list: any[]): number {
  let candyCount: number = 0;
  list.forEach((value: any) => candyCount += value.candies);
  return candyCount;  
}
console.log(candyCounter((students)));

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies
function ageCounter(list: any[]): number {
  let ageCount: number = 0;
  list.forEach((value: any) => {
    if (value.candies < 5) ageCount += value.age;
  });
  return ageCount;  
}
console.log(ageCounter((students)));

export{};