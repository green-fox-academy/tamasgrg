'use strict';

const fav = document.querySelector('.fav');
const catFacts = document.querySelector('.catFacts');

const cat = document.querySelector('#cat');
const dog = document.querySelector('#dog');
const victor = document.querySelector('#victor');

const signUp = document.querySelector('#sign-up');
const love = document.querySelector('#love');

fav.addEventListener('change', (e) => {
  if (e.target === cat || e.target === dog) signUp.disabled = false;
  else if (e.target === victor) {
    signUp.disabled = true;
    love.disabled = true;
  }
});

catFacts.addEventListener('change', (e) => {
  if (victor.checked === true) {
    love.disabled = true;
    if (e.target === no) {
      signUp.disabled = false;
      signUp.removeEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you, you\'ve successfully signed up for cat facts');
      });      
      signUp.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Sigh, we still added you to the cat facts list');
      });      
    }
  } else if (e.target === yes) {
    love.disabled = false;
  } else if (e.target === no) {
    love.disabled = true;
  }

  // }

  // if (e.target === yes) love.disabled = false;
  // else if (e.target === no) 
  //   if (victor.checked === true) {
  //     love.disabled = true;
  //     signUp.disabled = false;
  //   } else {
  //     love.disabled = true;
  //   }
});

signUp.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Thank you, you\'ve successfully signed up for cat facts');
});

love.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Thank you, you\'ve successfully signed up for cat facts');
});