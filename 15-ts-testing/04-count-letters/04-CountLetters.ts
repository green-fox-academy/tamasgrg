'use strict';

export class CountLetters {

  static countLetters(text: string): object {
    const dictionary: object = {};
    const letters: string[] = text.toLowerCase().split('');
    const uniqueLetters = new Set(letters);
    uniqueLetters.forEach((value: string) => {
      if (value.match(/[a-z]/)) {
        dictionary[value] = letters.filter((letter: string) => {
          return letter == value;
        })
        .length;
      }
    });
    return dictionary;
  }
}