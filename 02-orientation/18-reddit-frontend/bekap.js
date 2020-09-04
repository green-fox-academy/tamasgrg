'use strict';

function reddit() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://secure-reddit.herokuapp.com/posts', true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = () => {
    console.log(xhr.response);
  }
  xhr.send();
};

window.onload = () => {
  reddit();
};



function myBadAssAjaxFunction(method, endpoint, data, callback) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open(method, server+endpoint, true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.setRequestHeader('X-CSRF-TOKEN', getCookie('csrftoken'));

  httpRequest.send(JSON.stringify(data));
  httpRequest.onreadystatechange = function () {
      if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
          cb(JSON.parse(httpRequest.responseText));
      } else if (httpRequest.readyState == XMLHttpRequest.DONE && (httpRequest.status == 302 || httpRequest.status == 403)) {
          window.location.href= "/login";
      }
  };
}

