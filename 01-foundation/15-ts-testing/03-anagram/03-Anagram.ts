'use strict';
//need to add filter for non-letter chars
export class Anagram {

  static anagram(text1: string, text2: string) {
    if (text1.length <= 1 || text2.length <= 1) {
      return false;
    } else {
      return text1.toLowerCase().split('').sort().join() ==
             text2.toLowerCase().split('').sort().join();
    }
  }

}