'use strict';

const fs = require('fs');

function readFile(filePath: string): string {
  let fileContent: string = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    console.log('File does not exist!');
  }
  return fileContent;
}

export function countLetters(text: string): object {
  const charCount: object = {};
  const letters: string[] = text.toLowerCase().split('');
  const uniqueLetters = new Set(letters);
  uniqueLetters.forEach((value: string) => {
    if (value.match(/[a-z]/)) {
      charCount[value] = letters.filter((letter: string) => {
        return letter === value;
      })
      .length;
    }
  });
  return charCount;
}

function getTop2Occurances(allOccurances: object): object {
  const top2: object = {};
  for (let i = 0; i < 2; i++) {
    let topLetter = Object.keys(allOccurances).find(key =>
          allOccurances[key] === Math.max(...Object.values(allOccurances)));
    top2[topLetter] = allOccurances[topLetter];
    delete allOccurances[topLetter];
  }
  return top2;
}

function getMostCommonCharacters(filePath: string): object {
  const text: string = readFile(filePath);
  const allOccurances: object = countLetters(text);
  const top2Occurances: object = getTop2Occurances(allOccurances);
  return top2Occurances;
}

console.log(
  getMostCommonCharacters('../countchar.txt')
);

export{};