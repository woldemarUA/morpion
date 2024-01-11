'use strict';
let gamer = 0;
const ticTac = ['X', 'O'];
let gameSize = 3;
const gameStatus = [[], [], []];

export function btnOnclick(btn, arr) {
  btn.classList.toggle(btn.classList[3]);
  btn.classList.toggle('text-reset');
  btn.innerText = ticTac[gamer];
  btn.disabled = true;
  btn.onclick = false;
  gameStatus[btn.id.at(-3)][btn.id.at(-1)] = ticTac[gamer];
  // console.log(compareLine(gameStatus[btn.id.at(-3)]));
  const res = jeuLogique(gameStatus);
  gamer = Math.abs(gamer - 1);

  return res;
}

//  one is converting game status to the winning lines array
// the other one is checking whether there are the lines of length === game size
// and if they are jeu logique verify if they have the same values. if there are the empty
// values they want be the same comapre LIne wont be true (checked)

const jeuLogique = (gameStatus) => {
  // console.log(gameStatus);
  const allLines = column(gameStatus);

  for (const line of allLines) {
    if (line.length === 3)
      compareLine(line) ? console.log(`Player ${line[0]} won`) : console.log();
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
  let i = gameSize - 1;
  for (const el of arr) {
    diD.push(el[i]);
    i--;
  }

  res.push(diD);

  return res;
}

// console.log(column(testArr));
