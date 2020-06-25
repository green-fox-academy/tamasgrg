'use strict';

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=gwTIjlDbhiY0see8Z5k9N2c6yAwhlEjh&q=funny&limit=16&offset=0&rating=R&lang=en')
  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    const thumbContainer = document.getElementById('thumb-container');
    const picContainer = document.getElementById('pic-container');
    
    for (let i = 0; i < response.data.length; i++) {
      let imgUrl = response.data[i].images.fixed_height_small_still.url;
      let image = document.createElement('img');
      image.src = imgUrl;
      thumbContainer.appendChild(image);
    }
  };
  xhr.send();
};

window.onload = () => {
  getData();
};