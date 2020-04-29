'use strict';
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
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

function getdata(fileContent: string, columnNumber: number): string[] {
  let fileRows: string[] = fileContent.split('\n');
  let data: string[] = [];
  for (let i = 0; i < fileRows.length; i++) {
    let rowData: string[] = fileRows[i].split('   ');
    data.push(rowData[columnNumber]);
  }
  return data;
}

function getUniqueIPs(filePath: string): object {
  const data: string = readFile(filePath);
  const allIPs: string[] = getdata(data, 1);
  const uniqueIPs = new Set(allIPs);
  // console.log(uniqueIPs.size);
  return uniqueIPs;
}
console.log(getUniqueIPs('files/10-log.txt'));

// Write a function that returns the GET / POST request ratio.

function calculateRatio(list: string[]): string {
  let getCount: number = 0;
  let postCount: number = 0;
  list.forEach((value: string) => {
    value == 'GET /\r' ? getCount++ : postCount++;
  });
  const result: string =
    `\nThe GET / POST request ratio is: ${getCount}/${postCount} (${getCount / postCount})\n`;
  return result;
}

function getGetPostRatio(filePath: string): string {
  const data: string = readFile(filePath);
  const allGetPost: string[] = getdata(data, 2);
  const result: string = calculateRatio(allGetPost);
  return result;
}

console.log(getGetPostRatio('files/10-log.txt'));

export{};