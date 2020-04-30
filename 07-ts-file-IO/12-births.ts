'use strict';
// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format:
//    <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any one of them
// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, then the result should be either 2006, or 2016.
const fs = require('fs');

function readFile(filePath: string): string {
  let fileContent: string = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    console.log('Error while reading file...');
  }
  return fileContent;
}

function getData(fileContent: string, columnNumber: number): string[] {
  let fileRows: string[] = fileContent.split('\n');
  let data: string[] = [];
  for (let i = 0; i < fileRows.length; i++) {
    let rowData: string[] = fileRows[i].split(';');
    data.push(rowData[columnNumber].slice(0, 4));
  }
  return data;
}

function yearCounter(years: string[]): object {
  const uniqueYears = new Set(years.sort());
  const yearCounts: object = {};
  uniqueYears.forEach((value: string) => {
    yearCounts[value] = years.filter((year: string) => {
      return year == value;
    })
    .length;
  });
  return yearCounts;
}

function findTopYear(years: object): string {
  return Object.keys(years).find(key =>
    years[key] == Math.max(...Object.values(years)));
}

function getTopYear(filePath: string): string {
  const rawData: string = readFile(filePath);
  const allYears: string[] = getData(rawData, 1);
  const yearCounts: object = yearCounter(allYears);
  const topYear: string = findTopYear(yearCounts);
  return topYear;
}

console.log(getTopYear('files/12-births.csv'));
export{};