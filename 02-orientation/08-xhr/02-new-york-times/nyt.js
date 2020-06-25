'use strict';

function nytApp() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=v326lWqYZicDxugNXf5AGNxAfKglHyRk');
  xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    const table = document.getElementById('table');
    for (let i = 0; i < response.response.docs.length; i++) {
      const tr = document.createElement('tr');
      table.appendChild(tr);
      tr.appendChild(document.createElement('td')).textContent = response.response.docs[i].headline.main;
      tr.appendChild(document.createElement('td')).textContent = response.response.docs[i].snippet;
      tr.appendChild(document.createElement('td')).textContent = response.response.docs[i].pub_date;
      const url = response.response.docs[i].web_url;
      tr.appendChild(document.createElement('td')).innerHTML = `<a href=${url}>Link</a>`;
    };
  };
  xhr.send();
};

window.onload = () => {
  nytApp();
};