'use strict';

const listLeft = ['bread', 'milk', 'orange', 'tomato'];
const listRight = ['bread', 'milk', 'orange', 'tomato'];
const buttonText = ['Up', '>', 'X', 'Down'];

const body = document.querySelector('body');
const container = document.createElement('container');
body.appendChild(container);

const tableLeft = document.createElement('table');
tableLeft.id = 'tableLeft';
const tableRight = document.createElement('table');
tableRight.id = 'tableRight';
const buttons = document.createElement('table');
buttons.id = 'buttons';
container.appendChild(tableLeft);
container.appendChild(tableRight);
container.appendChild(buttons);

listLeft.forEach((item) => {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.textContent = item;
  tr.appendChild(td);
  tableLeft.appendChild(tr);
});

buttonText.forEach((item) => {
  const tr = document.createElement('tr');
  const button = document.createElement('button');
  button.textContent = item;
  button.id = item;
  tr.appendChild(button);
  buttons.appendChild(tr);
});

listRight.forEach((item) => {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.textContent = item;
  tr.appendChild(td);
  tableRight.appendChild(tr);
});

const tds = document.querySelectorAll('td');
tds[0].setAttribute('bgcolor', '#CDCDCD');

const up = document.getElementById('Up');
up.onclick = () => {
  alert('Up');
};