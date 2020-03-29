'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"
let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
// console.log(quote.indexOf('you'));
let missingPart: string = 'always takes longer than';
let quoteStart: string = quote.slice(0, quote.indexOf('you')); //21
let quoteEnd: string = quote.slice(quote.indexOf('you') - 1); //20
quote = "";
quote = quote.concat(quoteStart, missingPart, quoteEnd);
console.log(quote);
export{};