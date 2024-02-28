'use strict';
// Utilise le mode strict pour améliorer la sécurité et la performance du code.

import { btnOnclick } from './morpion.js';
// Importe la fonction btnOnclick depuis le fichier morpion.js, qui gère les clics sur les boutons du jeu.

export const gameBoard = (className, arr) => {
  const el = document.createElement('div');
  // Crée un nouvel élément div qui servira de conteneur pour le plateau de jeu.

  for (const [i, r] of arr.entries()) {
    // Itère sur chaque ligne du tableau représentant l'état du jeu.
    const row = document.createElement(`div`);
    // Crée un nouvel élément div pour chaque ligne du jeu.
    row.className = `row`;
    // Attribue la classe 'row' à l'élément de la ligne pour le styliser avec CSS.
    row.id = `row-${i}`;
    // Donne un identifiant unique à chaque ligne pour faciliter l'accès et la manipulation.
    el.appendChild(row);
    // Ajoute l'élément de la ligne au conteneur du plateau de jeu.

    for (const [index, cell] of r.entries()) {
      // Itère sur chaque cellule de la ligne actuelle.
      const btn = document.createElement(`div`);
      // Crée un nouvel élément div pour chaque cellule, qui agira comme un bouton.
      btn.className = `${className}`;
      // Attribue des classes CSS passées en paramètre à l'élément bouton pour le styliser.
      btn.id = `col-${i}-${index}`;
      // Donne un identifiant unique à chaque bouton pour faciliter l'accès et la manipulation.
      btn.innerHTML = cell;
      // Définit le contenu HTML de l'élément bouton, qui représente l'état actuel de la cellule.

      row.appendChild(btn);
      // Ajoute le bouton à l'élément de la ligne correspondante.
      btn.onclick = () => {
        btnOnclick(btn, [i, index]);
        // Attribue une fonction de gestionnaire d'événement onClick à chaque bouton.
        // Lorsqu'un bouton est cliqué, la fonction btnOnclick est appelée avec le bouton et sa position comme arguments.
      };
    }
  }

  return el;
  // Retourne l'élément div contenant le plateau de jeu complet.
};
