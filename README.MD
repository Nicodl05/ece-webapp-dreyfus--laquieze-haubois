# Projet Webtech 2022

---
Etudiants:

- Dreyfus--Laquieze Nicolas
- Haubois Cyril

*ECE Paris Promotion 2024*
TD 4 SI
---

## Production

- Vercel URL: https://ece-webapp-dreyfus-laquieze-haubois-fljq.vercel.app/
- Supabase Project URL: <https://app.supabase.com/project/ypkrvmmlnbddeybnmruo>


## Introduction et But

Le but de ce projet est de créer une application web semblable à un portfolio. Pour créer cette application nous utiliserons différentes technologies comme Next.js, Tailwindcss, ReactJS. 

### Prérequis

Il est necessaire d'avoir installé au préalable Node.js, et il faut pouvoir se servir du manager de paquets npm.

### Pour lancer l'application
Avant de lancer l'application, entrez la commande: 
```
npm install
```
Par la suite, pour lancer notre application en mode **dev** il faut:

- écrire dans le terminal la commmande: 
```
npm run dev
```

- cliquer sur le lien géneré par l'application qui sera: <http://localhost:3000/>

Si l'application ne se lance pas, soit:

- il manque un paquet
- aucun paquet n'est installé

Pour résoudre ce problème il faut supprimer de l'aborescence le dossier .next et le dossier node_modules.

Ensuite il faut vérifier dans le terminal que nous sommes bien situé à l'emplacement: `ece-webapp-dreyfus--laquieze-haubois\app`

Et ensuite il faut resaisir la commande: 
```
npm install
```

Pour `build` le projet et lancer par la suite: il faut saisir les commandes: 
``` 
npm run build
npm start
```


Normalement après toutes ces étapes tout devrait normalement fonctionner.

## Avancement

D'abord nous avons recréé l'application créée dans les premiers lab mais cette fois-ci en utilisant Next.js.
Après la mise en place d'un routing dynamique pour la navigation entre pages. Nous avons installé Tailwindcss pour le style de notre application.

## Supabase

Nous avons décidé d'utiliser pour le stockage des données lors des communiations, Supabase (<https://supabase.com/docs>).
Cela nous permet d'avoir un système de base de données avec la possibilité d'authentification, la génération d'API ainsi que du stockage de fichiers.

## Le contenu de l'application

### 1. Home

Sur la page **Home**, vous avez une petite présentation similaire à celle que vous lisez ici, qui vous récapitule les différentes pages et actions disponibles à l'utilisateur.
Les pages les plus importantes sont :

1. *About us*
2. *Contacts*
3. *Projets*
4. *Connexion*
5. *Paramètres*

### 2. About us

Sur la page **About us**, vous avez une rapide présentation des deux auteurs de la page qui sont Nicolas et Cyril, vous avez un bouton qui vous permet d'accéder à leur CV, récapitulant leurs différentes maitrises ainsi que leurs expériences professionnelles passées.

### 3. Contacts

Sur la page **Contacts**, vous avez deux petites cartes au thème Github ou l'utilisateur a la possibilité de cliquer sur l'icone de Github ou mail, auquel cas l'utilisateur ouvrira le Github de la personne qui l'intéresse ou alors ouvria une page pour écrire un mail à une de ces personnes.

### 4. Projets

Sur la page **Projets**, vous avez la possibilité d'observer tous les projets (*que nous considérons commme des articles*) stockés dans la base de données de Supabase. L'utilisateu si, il est **connecté** a la possibilité de rajouter un de ces projets en définissant

1. Nom du projet
2. Languages utilisés
3. Son Github
4. Une description du projet
5. Une image (pas fonctionnel)

### 5. Connexion

Sur la page connexion, l'utilisateur a la possibilité de pouvoir soit se créer un compte Supabase afin de se connecter, soit de se connecter avec des logins préexistants, pour des phases de test, nous vous conseillons d'utiliser les logins des auteurs qui sont des admins de ce site :

- Email: nico.dreylaq@gmail.com
- Password: password

**Ou**

- Email: cyrilhaubois342@gmail.com
- Password: azerty

L'utilisateur a aussi la possibilité de se connecter en utilisant son compte *Github*.
Dès lors qu'il sera connecté, il aura la possibilité de modifer des informations dans la page Paramètres.

### 6. Paramètres

Sur cette page, l'utilisateur a la possibilité de modifier son nom sauvegardé dans la base de données. Il a aussi la possibilité de modifier un projet ou bien d'en supprimer un totalement de la base de données.

### Nos emails pour nous contacter

- <nicolas.dreyfuslaquieze@edu.ece.fr>
- <cyril.haubois@edu.ece.fr>

## Nos cours 

Nos cours de ReactJS ont été réalisé par Monsieur Paul Farault, travaillant dans l'entreprise Adaltas
Lien de nos cours : 
- Cours de WebTech : https://github.com/adaltas/ece-webtech-2022-fall/tree/main/courses/webtech
- Cours de DevOps: https://github.com/adaltas/ece-devops-2022-fall
