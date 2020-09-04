'use strict';

function reddit() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://secure-reddit.herokuapp.com/posts', true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onload = () => {
    console.log(xhr.response);
  }
  xhr.send();
};

window.onload = () => {
  reddit();
};