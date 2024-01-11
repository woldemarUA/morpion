'use strict';
let gamer = 0;
const ticTac = ['X', 'O'];
let gameSize = 3;
const gameStatus = [];
for (let i = 0; i < gameSize; i++) {
  gameStatus.push([]);
}

export function btnOnclick(btn, arr) {
  btn.classList.toggle(btn.classList[3]);
  btn.classList.toggle('text-reset');
  btn.innerText = ticTac[gamer];
  btn.disabled = true;
  btn.onclick = false;

  const res = jeuLogique(arr);
  gamer = Math.abs(gamer - 1);
  console.log(res);
  return res;
}

const jeuLogique = (arr) => {
  const [row, cell] = arr;

  gameStatus[row][cell] = ticTac[gamer];

  for (const [row, rowValue] of gameStatus.entries()) {
    if (
      rowValue.includes(ticTac[gamer]) &&
      rowValue.length === gameStatus.length
    )
      return compareLine(rowValue);
  }
};

function compareLine(arr) {
  for (const m of arr) {
    if (!m) return false;
  }
  return arr.every((currentValue) => currentValue === ticTac[gamer]);
}

const testArr = [
  [`1 `, `2 `, ` 3`],
  [`4`, `5`, `6 `],
  [`7 `, ` 8`, `9 `],
];

function column(arr) {
  const res = [];

  for (const row of arr) res.push(row);
  for (let i = 0; i < arr.length; i++) {
    const col = [];
    for (const c in arr) {
      col.push(arr[c][i]);
    }
    res.push(col);
  }

  const diG = [];
  for (let i = 0; i < arr.length; i++) {
    diG.push(arr[i][i]);
  }
  res.push(diG);

  const diD = [];
  for (let i = arr.length - 1; i >= 0; i--) diD.push(arr[i][i]);
  res.push(diD);
  console.log(res);
}

column(testArr);
