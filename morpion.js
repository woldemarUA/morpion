'use strict';
let gamer = 0;
const ticTac = ['X', 'O'];

const gameStatus = [[], [], []];

export function btnOnclick(btn, arr) {
  //   console.log(btn.classList[3]);
  btn.classList.toggle(btn.classList[3]);
  btn.classList.toggle('text-reset');
  btn.innerText = ticTac[gamer];
  btn.disabled = true;

  btn.onclick = false;
  jeuLogique(arr);
  gamer = Math.abs(gamer - 1);
}

const jeuLogique = (arr) => {
  const [row, cell] = arr;

  gameStatus[row][cell] = ticTac[gamer];

  //   for (const [rowN, rowV] of gameStatus.entries()) {
  //     // console.log(rowN, rowV);
  //     compareLine(rowV);
  //   }

  for (const [row, rowValue] of gameStatus.entries()) {
    console.log();
    if (
      rowValue.includes(ticTac[gamer]) &&
      rowValue.length === gameStatus.length
    )
      console.log(compareLine(rowValue));
  }
};

function compareLine(arr) {
  console.log(ticTac[gamer]);
  console.log(arr);
  return `compare ${arr.every(
    (currentValue) => currentValue === ticTac[gamer]
  )}`;
}
