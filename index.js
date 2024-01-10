'use strict';

import { gameBoard } from './gameBoard.js';

console.log('Hello');

// let gamer = 0;

let gameStatus = [
  [`&nbsp `, ` `, ` `],
  [`&nbsp `, ` `, ` `],
  [`&nbsp `, ` `, ` `],
];

const gameBoardEl = document.getElementById('game-board');
gameBoardEl.appendChild(
  gameBoard('col-3 card m-1 bg-primary text-center ', gameStatus)
);
