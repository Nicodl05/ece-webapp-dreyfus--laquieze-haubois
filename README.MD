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

Pour lancer notre application il faut:

- écrire dans le terminal la commmande: `npm run dev`
- cliquer sur le lien géneré par l'application qui sera: <http://localhost:3000/>

Si l'application ne se lance pas, soit:

- il manque un paquet
- aucun paquet n'est installé

Pour résoudre ce problème il faut supprimer de l'aborescence le dossier .next et le dossier node_modules.

Ensuite il faut vérifier dans le terminal que nous sommes bien situé à l'emplacement: `ece-webapp-dreyfus--laquieze-haubois\app`

Et ensuite il faut saisir la commande: `npm install`

Normalement après toutes ces étapes tout devrait normalement fonctionner.

## Tâches

*Gestion du projet*

- Naming convention
  - Points: 2/2
  - Commentaires: RAS
- Project structure
  - Points: /2
  - Comments: RAS
  -
- Git
  - Points: 2/2
  - Commentaires: RAS
- Code quality
  - Points: 4
  - Commentaires: RAS

- Design, UX, and content
  - Points: 4
  - Commentaires: Design assez classique avec utilisations de components issus de :
    - [Tailwind UI](https://tailwindui.com)
    - [Flowbite](https://flowbite.com/).

  - Préconception du design réalisée avec 
    -  [Figma](https://www.figma.com/fr/)

**Application development:**

- Home page
  - Points: 2
  - Commentaires: Page présentant toutes les possibilités de notre site avec présentation des attendus de la matière Webtech
- Login and profile page
  - Points: 4
  - Commentaires: Connexion et Page de profil parfaitement fonctionnelles, possibilité de connexion avec Github en plus
- New articles creation
  - Points: 6
  - Commentaires: Possibilité de créer un projet complet qui sera save dans supabase. Possibilité de mettre titre, languages, description, lien Github, (images et dynamic routing de la nouvelle page du projet non fonctionnel). Ce projet est directement affiché ensuite sur le site après un refresh sur la page projet.
  - Bugs: pas encore possible d'aller sur la page d'un nouveau projet pour faire des commentaires
- New comment creation
  - Points: 4
  - Commentaires: Possibilité de créer des commentaires avec Authenfitication et RLS activé. Mise en place de la possibilité de mettre des commentaires sans être connecté, sauf que ce ne sera pas sauvegardé dans supabase en raison du RLS. Il y a bien les deux possibilités existantes dans le code. (ficher add_comment.jsx)
- Resource access control
  - Points: 6
  - Commentaires: Le RLS est activé pour les tables projets et comment. Nous avons choisi de ne pas activé le RLS sur user, nous avons instauré dans le code des sécurités similaire pour des cas de suppression ou mise à jours dans la table Aucun utilisateur non authentifié et connecté ne peut :
    - ajouter des projets
    - modifier des projets
    - supprimer des projets
    - supprimer des commentaires qui ne sont pas les siens
    - supprimer des utilisateurs si il n'est pas admin
- Article modification
  - Points: 4
  - Commentaires: Possibilité de modifier le projet uniquement si l'utilisateur connecté est bien l'auteur de ce projet
- Article removal
  - Points: 2
  - Commentaires: Possibilité de supprimer un projet si l'utilisateur connecté est l'auteur de ce projet. Le changement se voit dans la base de données ou lorsque l'on recharge la page projet.
- Comment modification
  - Points: 2
  - Commentaires: Possibilité de modifier un commentaire si c'est un commentaire écrit par celui qui est connecté.
- Comment removal
  - Points: 2
  - Commentaires: Possibilité de supprimer un commentaire si il s'agit d'un commentaire de la personne connectée.
- Account settings
  - Points: 4
  - Commentaires: Page paramètres permettant à l'utilisateur d'avoir des informations sur son compte et si il est admin, possibilité de modifier son nom, un projet, supprimer un projet. Si il est admin, de supprimer un utilisateur.
- WYSIWYG integration
  - Points: 2
  - Commentaires: Notre affichage est celui que nous avions prévu.
- Gravatar integration
  - Points: 2
  - Commentaires: Si le user n'est pas connecté via supabase, aucune image de profil ne sera affiché en haut à droite de l'écran. Si l'utilisateur est connecté, sa photo avec Gravatar s'affichera. (Liaision Gravatar - Supabase)
- Light/dark theme
  - Points: 2
  - Commentaires: Bouton switch Moon Sun pour changer de thème
- Accent color selection
  - Points: 0/4
  - Commentaires: Non réalisé

## Bonus ideas

Liaison Gravatar - Supabase pour l'image
Utilisation d'un Admin pour le compte de Nicolas et Cyril ==> Possibilité de supprimer un utilisateur

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
5. Une image

### 5. Connexion

Sur la page connexion, l'utilisateur a la possibilité de pouvoir soit se créer un compte Supabase afin de se connecter, soit de se connecter avec des logins préexistants, pour des phases de test, nous vous conseillons d'utiliser les logins des auteurs de ce site :

- Email: nico.dreylaq@gmail.com
- Password: password

**Ou**

- Email: cyrilhaubois342@gmail.com
- Password: azerty

*Nous tenons à dire que ces mots de passes sont ultra sécurisés*

L'utilisateur a aussi la possibilité de se connecter en utilisant son compte *Github*.
Dès lors qu'il sera connecté, il aura la possibilité de modifer des informations dans la page Paramètres.

### 6. Paramètres

Sur cette page, l'utilisateur a la possibilité de modifier son nom sauvegardé dans la base de données. Il a aussi la possibilité de modifier un projet ou bien d'en supprimer un totalement de la base de données.

### Nos emails pour nous contacter

- <nicolas.dreyfuslaquieze@edu.ece.fr>
- <cyril.haubois@edu.ece.fr>
