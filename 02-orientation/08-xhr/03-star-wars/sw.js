'use strict';

const charList = document.getElementById('char-list');
const movieList = document.getElementById('movie-list');

function swApp() {
  const name = document.getElementById('name').value;
  charList.innerHTML = '';
  movieList.innerHTML = '';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://swapi.dev/api/people/?search=${name}`);
  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    response.results.forEach(result => {
      let li = document.createElement('li');
      charList.appendChild(li).textContent = result.name;
      li.addEventListener('click', () => {
        listMovies(result.films);
      });
    });
  };
  xhr.send();
};

function listMovies(movies) {
  movieList.innerHTML = '';
  movies.forEach(movie => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', movie);
    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      let li = document.createElement('li');
      movieList.appendChild(li).textContent = response.title;
    }
    xhr.send();
  });
};