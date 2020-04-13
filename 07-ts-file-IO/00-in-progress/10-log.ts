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

function getUniqueIPs(filePath: string) {
  const data: string = readFile(filePath);
  const allIPs: string[] = getdata(data, 1);
  const uniqueIPs = new Set(allIPs);
  // console.log(uniqueIPs.size);
  return uniqueIPs;
}
console.log(getUniqueIPs('files/10-log.txt'));

// Write a function that returns the GET / POST request ratio.

function getGetPostRatio(filePath: string) {
  const data: string = readFile(filePath);
  const allGetPost: string[] = getdata(data, 2);
  console.log(allGetPost); 
}
getGetPostRatio('files/10-log.txt')

export{};