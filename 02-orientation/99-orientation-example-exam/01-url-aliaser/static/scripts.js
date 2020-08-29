'use strict';

let form = document.querySelector('form');

form.onsubmit = async (ev) => {
  ev.preventDefault();
  const url = document.getElementById('url').value;
  const alias = document.getElementById('alias').value;
  const body = JSON.stringify({url, alias});

  const result = await fetch('http://localhost:3000/api/links', {
    method: 'POST',
    body: body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}