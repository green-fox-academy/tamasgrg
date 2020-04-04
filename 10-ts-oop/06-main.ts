'use strict';
import { Pokemon } from './06-Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

// gotta choose a Pokemon:
// (type != 'water' &&) effectiveAgainst == 'leaf'
// that is Charizard

function choosePokemon(): string {
  let chosenOne: string = '';
  let i: number = 0;
  while (i < pokemonOfAsh.length) {
    if (
      pokemonOfAsh[i].isEffectiveAgainst(wildPokemon) &&
      wildPokemon.isEffectiveAgainst(pokemonOfAsh[i]) != true) {
      chosenOne = pokemonOfAsh[i].name;
    }
    i++;
  }
  return chosenOne;
}

console.log(`I choose you, ${choosePokemon()}`);