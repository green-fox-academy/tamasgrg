'use strict';
// Create a method that find the 5 most common lottery numbers in lottery.csv
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

function getData(fileContent: string, columnNumber: number): number[] {
  let fileRows: string[] = fileContent.split('\n');
  let data: number[] = [];
  for (let i = 0; i < fileRows.length; i++) {
    for (let j = 0; j < 5; j++) {
      let rowData: string[] = fileRows[i].split(';');
      data.push(+rowData[columnNumber + j]);
    }
  }
  return data;
}

function getAllOccurances(array: number[]): object {
  const uniqueNumbers = new Set(array.sort());
  const allOccurances: object = {};
  uniqueNumbers.forEach((value: number) => {
    allOccurances[value] = array.filter((n: number) => {
      return n === value;
    })
    .length;
  });
  return allOccurances;
}

function getTop5(allOccurances: object): number[] {
  const top5: number[] = [];
  for (let i = 0; i < 5; i++) {
    let topNumber: number = + Object.keys(allOccurances).find(key =>
          allOccurances[key] === Math.max(...Object.values(allOccurances)));
    top5.push(topNumber);
    delete allOccurances[topNumber];
  }
  return top5;
}

function returnMostCommonNumbers(filePath: string): number[] {
  const rawData: string = readFile(filePath);
  const allNumbers = getData(rawData, 11);
  const allOccurances: object = getAllOccurances(allNumbers);
  const result: number[] = getTop5(allOccurances);
  console.log(result);
  return result;
}

returnMostCommonNumbers('files/14-lottery.csv');
export{};