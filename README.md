# KATA 2 - String Calculator

## Description

Ce projet est une implémentation du kata String Calculator en JavaScript. Il permet de créer une calculatrice simple qui prend une chaîne de caractères et retourne un entier représentant la somme des nombres dans cette chaîne.

Ce projet a été réalisé par :
- Maraval Bastien
- Guirrine Réda

## Installation

### Prérequis

- Node.js
- npm

### Cloner le dépôt

1. Ouvrez votre terminal ou ligne de commande.
2. Clonez le dépôt GitHub en utilisant la commande suivante :
   ```sh git clone git@github.com:reda159/kata2.git```
3. Naviguez dans le répertoire du projet :
  ```cd kata2```

### Installation des dépendances

1. Installez les dépendances du projet en utilisant npm :
   ```npm install```

## Utilisation

### Lancer les tests

Les tests pour ce projet sont écrits en utilisant le framework de test JEST.

1. Pour exécuter les tests, utilisez la commande suivante :
   ```npm test```

ou

1. Pour exécuter les tests en mode surveillance (watch mode), ce qui permet de relancer les tests automatiquement à chaque modification des fichiers, utilisez la commande suivante :
   ```npm test -- --watch```

## Structure du projet

- calculator.js : Contient l'implémentation de la fonction add.
- calculator.test.js : Contient les tests pour la fonction add.

### Fonctionnalités

La fonction add implémente les fonctionnalités suivantes :

1. Peut prendre jusqu'à deux nombres séparés par des virgules et retourner leur somme.
2. Peut gérer un nombre inconnu d'arguments.
3. Peut gérer les sauts de ligne comme séparateurs.
4. Valide qu'il n'y a pas de séparateur à la fin de la chaîne.
5. Peut gérer différents délimiteurs spécifiés au début de la chaîne.
