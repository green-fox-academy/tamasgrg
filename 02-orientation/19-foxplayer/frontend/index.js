'use strict';

let audio = document.querySelector('audio');

document.addEventListener("keypress", event => {
  if (event.keyCode === 32) {
    if (audio.paused) audio.play();
    else audio.pause();
  }
});