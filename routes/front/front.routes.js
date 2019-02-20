/*
Imports
*/
    //Node
    const express = require('express');
    const router = express.Router();
//

/*
Configuration
*/
    class FrontRouterClass{
        routes(){
            router.get('/', (req, res) => {
                res.render('index', { connected: false}); //ejs permet d'envoyer un objet en parametre: ici, connected false. Il est envoyé ici dans la root. C'est donc comme si la variable connected était déclaré dans la page index.ejs
            });

            router.get('/register', (req, res) => {
                res.render('register', { connected: false});
            });

            router.get('/login', (req, res) => {
                res.render('login', { connected: false});
            });

            router.get('/chat', (req, res) => {
                res.render('chat', { connected: false});
            });
        }

        init(){
            this.routes();
            return router
        }
    }
//

/*
Export
*/
    module.exports = FrontRouterClass;
//