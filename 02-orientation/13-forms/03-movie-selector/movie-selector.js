'use strict';

const genre = document.getElementById('genre');
const movie = document.getElementById('movie');
const movieList = document.getElementById('movie').options;
const result = document.getElementById('selected');

genre.addEventListener('change', (e) => {
  let selected = e.target.value.toLowerCase();
  for (let i = 0; i < movieList.length; i++) {
    movieList[i].classList.contains(selected) ?
      movieList[i].classList.remove("hidden") :
      movieList[i].classList.add("hidden");
  }
});

movie.addEventListener('change', (e) => {
  result.innerHTML = e.target.value;
  result.style.color = '#8390cc';
});