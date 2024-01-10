'use strict';

import { gameBoard } from './gameBoard.js';

console.log('Hello');

let gameStatus = [
  [`1`, `2`, `3`],
  [`4`, `5`, `6`],
  [`7`, `8`, `9`],
];

const gameBoardEl = document.getElementById('game-board');
gameBoardEl.appendChild(
  gameBoard('col-3 card m-1 bg-secondary text-center text-light', gameStatus)
);
