'use strict';

window.onload = () => {
  let form = document.querySelector('form');

  form.onsubmit = async (ev) => {
    ev.preventDefault();
    const url = document.getElementById('url').value;
    const alias = document.getElementById('alias').value;
    const reqBody = JSON.stringify({url, alias});

    const result = await fetch('http://localhost:3000/api/links', {
      method: 'POST',
      body: reqBody,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const answer = await result.json();
    let p = document.querySelector('p');
    p.innerHTML = `Your URL is aliased to ${answer.alias} and your secret code is ${answer.secretCode}.`;
  }
}