'use strict';

const listLeft = ['bread', 'milk', 'orange', 'tomato'];
const listRight = [null, null, null, null];
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

function createList(list, table) {
  list.forEach((item) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = item;
    tr.appendChild(td);
    table.appendChild(tr);
  });
}

createList(listLeft, tableLeft);
createList(listRight, tableRight);

buttonText.forEach((item) => {
  const tr = document.createElement('tr');
  const button = document.createElement('button');
  button.textContent = item;
  button.id = item;
  tr.appendChild(button);
  buttons.appendChild(tr);
});

const trs = document.querySelectorAll('tr');
trs[0].id = 'selected';

const up = document.getElementById('Up');
const down = document.getElementById('Down');
const move = document.getElementById('>');
const del = document.getElementById('X');
const trsLeft = tableLeft.children;
const trsRight = tableRight.children;

function delItem(i) {
  tableLeft.removeChild(trsLeft[i]);
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  tr.appendChild(td);
  tableLeft.appendChild(tr);
}

up.onclick = () => {
  for (let i = 0; i < trsLeft.length; i++) {
    if (i !== 0) {
      if (trsLeft[i].id === 'selected') {
        trsLeft[i].id = null;
        trsLeft[i - 1].id = 'selected';
        return;
      }
    }
  }
}

down.onclick = () => {
  for (let i = 0; i < trsLeft.length; i++) {
    if (i !== trsLeft.length - 1) {
      if (trsLeft[i].id === 'selected') {
        trsLeft[i].id = null;
        trsLeft[i + 1].id = 'selected';
        return;
      }
    }
  }
}

move.onclick = () => {
  for (let i = 0; i < trsLeft.length; i++) {
    if (trsLeft[i].id === 'selected') {
      for (let j = 0; j < trsRight.length; j++) {
        if (trsRight[j].firstChild.textContent === '') {
          trsRight[j].firstChild.textContent = trsLeft[i].firstChild.textContent;
          delItem(i);
          break;
        }
      }
      if (trsLeft[0].firstChild.textContent) trsLeft[0].id = 'selected';
      return;
    }
  }
}

del.onclick = () => {
  for (let i = 0; i < trsLeft.length; i++) {
    if (trsLeft[i].id === 'selected') {
      delItem(i);
      break;
    }
  }
  if (trsLeft[0].firstChild.textContent) trsLeft[0].id = 'selected';
  return;
}