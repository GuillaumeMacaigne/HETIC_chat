/*
Imports
*/
    require('dotenv').config(); //C'était ça la configuration particulière
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser'); //Récupérer des données dans les requêtes
    const ejs = require('ejs');

//

/*
Configuration
*/
    const server = express();
    const port = process.env.PORT;
//

/*
Démarrer le serveur
*/
    server.listen(port, () => {
        console.log(`Server is active on port ${port}`);
    })
//