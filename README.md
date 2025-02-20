# Family-Event

**Family-Event** est une application de discussion, de notifications instantanées et de gestion d'événements avec un calendrier interactif. Conçue pour les familles et les groupes, elle permet de mieux organiser et suivre les événements partagés.

## Table des matières

- [Description](#description)
- [Prérequis](#prérequis)
- [Installation](#installation)
  - [Docker](#docker)
  - [Back-End](#back-end)
  - [Front-End](#front-end)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Scripts disponibles](#scripts-disponibles)
- [Technologies utilisées](#technologies-utilisées)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **Node.js** (v16 ou supérieur) : [Installer Node.js](https://nodejs.org/)
- **Docker** (v20 ou supérieur) : [Installer Docker](https://www.docker.com/)
- **npm** ou **Yarn** : Inclus avec Node.js
- **MongoDB Compass** (facultatif) pour visualiser les collections MongoDB

---

## Installation

### Docker

1. Assurez-vous que Docker est installé et en cours d'exécution.
2. Clonez le dépôt Family-Event :
   ```bash
   git clone https://github.com/votre-repo/family-event.git
   cd family-event
   ```
3. Lancer les conteneurs Docker (MongoDB) :
   ```bash
   docker-compose up -d
   ```
4. MongoDB sera disponible sur `localhost:27017`.

---

### Back-End

1. Accédez au dossier du back-end :
   ```bash
   cd server
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Créez un fichier `.env` avec les variables suivantes :
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/family-event
   JWT_SECRET=your_secret_key
   ```
4. Lancez le serveur back-end :
   ```bash
   npm start
   ```
5. Le serveur sera accessible sur `http://localhost:3000`.

---

### Front-End

1. Accédez au dossier du front-end :
   ```bash
   cd client
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Créez un fichier `.env` dans le dossier `client` avec la variable suivante :
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```
4. Lancez le serveur front-end :
   ```bash
   npm run dev
   ```
5. L'application sera accessible sur `http://localhost:5173`.

---

## Fonctionnalités

- Authentification des utilisateurs (JWT)
- Gestion des événements et des notifications
- Calendrier interactif pour visualiser les événements
- Discussions en temps réel (WebSockets)
- Interface responsive et moderne (React.js)

---

## Structure du projet

Voici une vue simplifiée de la structure de fichiers :

```
family-event/
├── client/                  # Code front-end (React.js)
│   ├── src/
│   │   ├── components/      # Composants React
│   │   ├── pages/           # Pages principales de l'application
│   │   ├── App.jsx          # Point d'entrée principal du front-end
│   │   └── main.jsx         # Chargé par Vite
│   ├── public/              # Fichiers statiques
│   └── package.json         # Dépendances front-end
├── server/                  # Code back-end (Node.js)
│   ├── models/              # Modèles MongoDB
│   ├── routes/              # Routes API
│   ├── controllers/         # Contrôleurs de l'application
│   ├── server.js            # Point d'entrée principal du back-end
│   └── package.json         # Dépendances back-end
├── db/                      # Fichiers Docker pour MongoDB
│   ├── docker-compose.yml   # Configuration Docker
│   └── initdb/
│       └── schema.js        # Script d'initialisation MongoDB
├── README.md                # Documentation
└── .gitignore               # Fichiers à ignorer par Git
```

---

## Scripts disponibles

### Front-End

- `npm run dev` : Lance l'application en mode développement.
- `npm run build` : Compile l'application pour la production.
- `npm run preview` : Prévisualise la version compilée.

### Back-End

- `npm start` : Démarre le serveur.
- `npm run dev` : Lance le serveur en mode développement avec rechargement automatique (nodemon).

### Docker

- `docker-compose up -d` : Démarre les conteneurs Docker.
- `docker-compose down` : Arrête et supprime les conteneurs Docker.
- `docker-compose down -v` : Arrête les conteneurs et supprime les volumes Docker.

---

## Technologies utilisées

- **Front-End** : React.js, Vite, Axios, Ant Design
- **Back-End** : Node.js, Express.js, Mongoose
- **Base de données** : MongoDB
- **Conteneurisation** : Docker
- **Authentification** : JWT

---

## Contribuer

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez ce projet.
2. Créez une branche pour votre fonctionnalité ou correctif :
   ```bash
   git checkout -b feature/ma-fonctionnalite
   ```
3. Committez vos modifications :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. Poussez vos modifications :
   ```bash
   git push origin feature/ma-fonctionnalite
   ```
5. Ouvrez une pull request.

---

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](./LICENSE) pour plus de détails
