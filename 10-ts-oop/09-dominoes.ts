'use strict';

import {Domino} from "./09-Domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers
 * on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);

function getRandomDom(dominoes: Domino[]): Domino {
  const RandomDomIndex: number = Math.floor(Math.random() * dominoes.length);
  return dominoes[RandomDomIndex];
}

function setSnake(list: Domino[], domino: Domino): Domino[] {
  list.push(domino);
  return list;
}

function appendDoms(list: Domino[], dominoes: Domino[]): Domino[] {
  do {
    dominoes.forEach((_value: Domino, index: number): void => {
      if (dominoes[index].values[0] == list[list.length - 1].values[1] &&
        list.length < dominoes.length) {
          list.push(dominoes[index]);
      }
    })
  } while (
    list.length < dominoes.length
  )
  return list;
}

function orderDominoes(dominoes: Domino[]): Domino[] {
  const snake: Domino[] = [];
  const randomDomino: Domino = getRandomDom(dominoes);
  const firstDomino: Domino[] = setSnake(snake, randomDomino);
  const snakeFinal: Domino[] = appendDoms(firstDomino, dominoes);
  print(snakeFinal);
  return snakeFinal;
}

orderDominoes(dominoes);