'use strict';
import { btnOnclick } from './morpion.js';
export const gameBoard = (className, arr, gamer) => {
  const el = document.createElement('div');
  //   el.className('w-50');
  for (const [i, r] of arr.entries()) {
    const row = document.createElement(`div`);
    row.className = `row`;
    row.id = `row-${i}`;
    el.appendChild(row);
    for (const [index, cell] of r.entries()) {
      const btn = document.createElement(`div`);
      btn.className = `${className}`;
      btn.id = `col-${i}-${index}`;
      btn.innerHTML = cell;

      row.appendChild(btn);
      btn.onclick = () => {
        // btn.className = 'btn btn-secondary disabled';

        btnOnclick(btn, [i, index]);
      };
    }
  }

  return el;
};
