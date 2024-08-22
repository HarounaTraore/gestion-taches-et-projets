# Gestion d'une Bibliothèque avec Vue.js 3

Ce projet, est une application web développée avec Vue.js 3 en utilisant la Composition API. Elle permet de gérer les opérations CRUD des livres, les membres, et les prêts d'une bibliothèque. Toutes les données sont stockées localement, sans backend.

## Fonctionnalités

### Livres

- **Ajouter un nouveau livre** : Un formulaire permet d'ajouter un nouveau livre dans la bibliothèque.
- **Lister tous les livres** : Les livres ajoutés sont affichés dans un tableau.
- **Voir les détails d'un livre** : Affiche toutes les informations d'un livre sélectionné.
- **Mettre à jour les informations d'un livre** : Permet de modifier les détails d'un livre existant.
- **Supprimer un livre** : Supprime un livre de la bibliothèque.

### Membres

- **Ajouter un nouveau membre** : Un formulaire permet d'ajouter un nouveau membre.
- **Lister tous les membres** : Les membres sont affichés dans un tableau.
- **Voir les détails d'un membre** : Affiche toutes les informations d'un membre sélectionné.
- **Mettre à jour les informations d'un membre** : Permet de modifier les détails d'un membre existant.
- **Supprimer un membre** : Supprime un membre de la bibliothèque.

### Prêts

- **Enregistrer un nouveau prêt** : Permet de créer un nouveau prêt de livre pour un membre.
- **Lister tous les prêts** : Les prêts enregistrés sont affichés dans un tableau.
- **Voir les détails d'un prêt** : Affiche toutes les informations d'un prêt sélectionné.
- **Mettre à jour les informations d'un prêt** : Permet de modifier les détails d'un prêt existant.
- **Supprimer un prêt** : Supprime un prêt de la bibliothèque.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé l'élément suivant :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)

## Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/HarounaTraore/gestion-bibliotheque.git
   ```

   ```bash
   cd gestion-bibliotheque
   ```
   
2. **Installer les dépendances** :

   ```bash
   npm install
   ```

3. **Lancer l'application** :
   ```bash
   npm run dev
   ```

## Utilisation

- Accédez à l'application via `http://localhost:5173/` dans votre navigateur.
- Naviguez entre les pages Livres, Membres, et Prêts via le menu en haut de la page.

## Structure du Projet

- `src/` : Contient les composants Vue.js et les fichiers liés à l'application.

  - `components/` : Contient les dossiers livres, membres et prets, chaque dossier contient trois composants.

    - `Liste__.vue`: composant parent pour chaque module et il contient la logique d'affichage et la suppression
    - `Ajouter___.vue`: composant contenant la gestion d'ajout
    - `Modifier___.vue`: composant contenant la gestion de modification

  - `router/` : Gère les routes pour la navigation entre les différentes sections de l'application.

## Auteurs

[Abderahman Thimbo](https://github.com/AbderahmaneThimbo)

[Harouna Traoré](https://github.com/HarounaTraore)
