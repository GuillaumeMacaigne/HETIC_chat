# HETIC_chat

Mise en place d'une application de chat (chatbot)


## Configuration de base
- Créer un fichier pour le serveur
- Initialiser le dossier serveur (npm init -y => Crée package.json). On change le nom HETIC_chat par hetic_chat (on aime pas les majuscules)
- Importer les composants express, body-parser, dotenv, ejs, mongoose, path, nodemon(permet de relancer le sercceur à chaque fois) (npm i -s ...)
- Configurer le fichier serveur :
    - Créer une constante pour les imports (attention à dotenv - configuration particulière -)
    - Créer une constante pour le serveur (utilisation de la fonction express())
    - Créer le fichier .env avec le port
    - Configurer les composants
    - Lancer le serveur
- Créer .gitignore: .env & node_modules/
- Remplacer node dans start dans package.json par nodemon

## Configuration des vues client
- Définir le _moteur de rendu_ en __ejs__ 
- Définir un dossier "__www__" comme étant le _dossier client_
- Créer un fichier "__index.ejs__" dans le dossier "__www__"git add
- Créer un router front
    - créer les routes Homepage
    - Créer la route register
    - Créer la route login
    - Créer la route chat

## Création de l'API
- Créer un fichier de routes pour l'api (cf. font.routes)
- Créer une route register
- Créer une route login

## Création de formulaire register/login
- Le formulaire d'inscription contient
    - email
    - pseudo
    - password (x2)
    - cgu

- Le formulaire de connexion contient: 
    - email
    - password