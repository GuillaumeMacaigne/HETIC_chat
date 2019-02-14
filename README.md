# HETIC_chat

Mise en place d'une application de chat (chatbot)


- Créer un fichier pour le serveur
- Initialiser le dossier serveur (npm init -y => Crée package.json). On change le nom HETIC_chat par hetic_chat (on aime pas les majuscules)
- Importer les composants express, body-parser, dotenv, ejs, mongoose, path, nodemon(permet de relancer le sercceur à chaque fois) (npm i -s ...)
- Configurer le fichier serveur :
    - Créer une constante pour les imports (attention à dotenv - configuration particulière -)
    - Créer une constante pour le serveur (utilisation de la fonction express())
    - Configurer les composants
    - Lancer le serveur