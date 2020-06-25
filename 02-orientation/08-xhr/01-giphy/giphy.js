'use strict';

function giphyApp() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=gwTIjlDbhiY0see8Z5k9N2c6yAwhlEjh&q=funny&limit=16&offset=0&rating=R&lang=en');
  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    const thumbContainer = document.getElementById('thumb-container');

    for (let i = 0; i < response.data.length; i++) {
      const imgUrl = response.data[i].images.fixed_height_small_still.url;
      const image = document.createElement('img');
      image.src = imgUrl;
      image.addEventListener('click', function() {
        const pic = document.getElementById('pic');
        pic.src = response.data[i].images.original.url;
      });
      thumbContainer.appendChild(image);
    };
  };
  xhr.send();
};

window.onload = () => {
  giphyApp();
};