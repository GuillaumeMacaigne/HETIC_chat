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
    class ApiRouterClass{
        routes(){

            router.get('/', (req, res) => {
                res.json({msg: 'Hello API'}) // Pas besoin de nommer l'objet, c'est le principe de l'API
            })
            router.post('/register', (req, res) => {
                //Récupérer les données de l'utilisateur
                console.log(req.body) //.body parce que la requete est enorme, tres long à lire et analyser. On l'a envoyé dans le body de la req.
                res.json('register');
            });

            router.post('/login', (req, res) => {
                res.json('login');
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
    module.exports = ApiRouterClass;
//