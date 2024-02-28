'use strict';
// Utilise le mode strict pour éviter certaines erreurs courantes et rendre le code plus sécurisé

import { gameBoard } from './gameBoard.js';
// Importe la fonction gameBoard depuis le module gameBoard.js pour construire le plateau de jeu

let gameStatus = [
  [`&nbsp `, ` `, ` `],
  [`&nbsp `, ` `, ` `],
  [`&nbsp `, ` `, ` `],
];
// Initialise le statut du jeu avec un tableau 3x3, représentant les cases du jeu de morpion
// `&nbsp ` est utilisé pour les cases vides initiales pour des raisons d'affichage HTML

export function init() {
  const gameBoardEl = document.getElementById('game-board');
  // Sélectionne l'élément du DOM où le plateau de jeu sera affiché

  gameBoardEl.innerHTML = '';
  // Nettoie le contenu précédent de l'élément du plateau de jeu, si nécessaire

  gameBoardEl.appendChild(
    gameBoard('col-3 card m-1 bg-primary text-center ', gameStatus)
  );
  // Appelle la fonction gameBoard pour créer le plateau de jeu avec les classes CSS spécifiées
  // et le statut du jeu actuel, puis ajoute ce plateau à l'élément gameBoardEl
}

init();
// Appelle la fonction init pour initialiser le jeu lors du chargement du script
