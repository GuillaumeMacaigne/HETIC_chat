/*
Imports
*/
    //Node.js
    require('dotenv').config(); //C'était ça la configuration particulière
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser'); //Récupérer des données dans les requêtes
    const ejs = require('ejs');

    //inner
    const mainRouter = require('./routes/main.router');

//

/*
Configuration
*/
    const server = express();
    const port = process.env.PORT;

    class ServerClass{

        init(){
            // Config du dossier client
            server.set( 'views', __dirname + '/www' ); //Il faudra un router, parce que naturellement ça va chercher un index.html. Le navigateur ne connait pas ejs
            server.use( express.static(path.join(__dirname, 'www')) );

            // Config du moteur de rendu
            server.set( 'view engine', 'ejs' );

            //Configurer les routes server
            server.use('/', mainRouter);

            //Lancer le serveur
            this.launch();
        }

        launch(){
            server.listen(port, () => {
                console.log(`Server is active on port ${port}`);
            });
        }

    }
//

/*
Démarrer le serveur
*/
    new ServerClass().init();
//