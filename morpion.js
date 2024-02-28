'use strict';
// Active le mode strict JavaScript pour détecter les erreurs potentielles de manière proactive.

import { init } from './index.js';
// Importe la fonction init depuis le fichier index.js pour réinitialiser le jeu.

let gamer = 0;
// Initialise une variable pour suivre le joueur actuel (0 pour X, 1 pour O).

const ticTac = ['X', 'O'];
// Définit les symboles utilisés par les deux joueurs.

let gameSize = 3;
// Définit la taille du plateau de jeu.

let gameStatus = [[], [], []];
// Initialise le statut du jeu avec un tableau 3x3 vide.

export function btnOnclick(btn, arr) {
  // Définit la fonction appelée lorsqu'un bouton est cliqué.
  btn.classList.toggle(btn.classList[3]);
  btn.classList.toggle('text-reset');
  // Alterne la classe CSS du bouton pour les effets visuels.

  btn.innerText = ticTac[gamer];
  // Met à jour le texte du bouton avec le symbole du joueur actuel.

  btn.disabled = true;
  // Désactive le bouton pour éviter d'autres clics dessus.

  btn.onclick = false;
  // Supprime le gestionnaire d'événements onclick pour le bouton.

  gameStatus[btn.id.at(-3)][btn.id.at(-1)] = ticTac[gamer];
  // Met à jour l'état du jeu avec le mouvement du joueur actuel.

  const res = jeuLogique(gameStatus);
  // Appelle la fonction jeuLogique pour vérifier si le jeu est terminé.

  gamer = Math.abs(gamer - 1);
  // Change le joueur actuel pour le prochain tour.

  return res;
  // Retourne le résultat de jeuLogique.
}

const jeuLogique = (gameStatus) => {
  // Définit la logique du jeu pour déterminer le gagnant.
  const allLines = column(gameStatus);
  // Récupère toutes les lignes, colonnes et diagonales du plateau.

  for (const line of allLines) {
    // Parcourt chaque ligne/colonne/diagonale.
    if (line.length === 3)
      if (compareLine(line)) {
        // Vérifie si tous les éléments de la ligne sont identiques.
        const info = document.getElementById('restart-container');
        const title = document.querySelector('h3');
        title.innerText = `Joueur ${line[0]} a gagné`;
        // Met à jour le message de victoire.

        info.classList.toggle('hide');
        // Affiche le message de victoire.

        const restart = document.getElementById('restart');
        restart.onclick = restartGame;
        // Associe la fonction de redémarrage au bouton de redémarrage.
      }
  }
};

function restartGame() {
  // Définit la fonction pour redémarrer le jeu.
  const info = document.getElementById('restart-container');
  info.classList.toggle('hide');
  // Cache le message de victoire.

  gameStatus = [[], [], []];
  // Réinitialise l'état du jeu.

  gamer = 0;
  // Réinitialise le joueur actuel à X.

  init();
  // Appelle la fonction init pour recommencer le jeu.
}

function compareLine(arr) {
  // Vérifie si tous les éléments d'une ligne/colonne/diagonale sont identiques.
  for (const m of arr) {
    if (!m) return false;
    // Retourne faux si un élément est vide.
  }
  return arr.every((currentValue) => currentValue === ticTac[gamer]);
  // Vérifie si tous les éléments sont identiques au symbole du joueur actuel.
}

function column(arr) {
  // Transforme l'état du jeu pour obtenir toutes les lignes, colonnes et diagonales.
  const res = [];
  // Contient le résultat de la transformation.

  for (const row of arr) res.push(row);
  // Ajoute toutes les lignes au résultat.

  for (let i = 0; i < arr.length; i++) {
    const col = [];
    // Crée une nouvelle colonne.
    for (const c in arr) {
      col.push(arr[c][i]);
      // Ajoute les éléments de chaque colonne.
    }
    res.push(col);
    // Ajoute la colonne au résultat.
  }

  const diG = [];
  // Crée la première diagonale.
  for (let i = 0; i < arr.length; i++) {
    diG.push(arr[i][i]);
    // Ajoute les éléments de la diagonale.
  }
  res.push(diG);
  // Ajoute la diagonale au résultat.

  const diD = [];
  // Crée la seconde diagonale.
  let i = gameSize - 1;
  for (const el of arr) {
    diD.push(el[i]);
    i--;
    // Ajoute les éléments de la seconde diagonale.
  }

  res.push(diD);
  // Ajoute la seconde diagonale au résultat.

  return res;
  // Retourne toutes les lignes, colonnes et diagonales.
}
