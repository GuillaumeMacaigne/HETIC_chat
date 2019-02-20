/*
Imports
*/
    // NodeJS
    const { Router } = require('express');

    // Inner
    const FrontRouterClass = require('./front/front.routes');
    const ApiRouterClass = require('./api/api.routes');
//

/*
Configuration
*/
    const mainRouter = Router();


    //API
    const apiRouter = new ApiRouterClass();
    mainRouter.use('/api', apiRouter.init()); //On le met en premier car c'est l'exception. 

    // FRONT
    const frontRouter = new FrontRouterClass();
    mainRouter.use('/', frontRouter.init());


//

/*
Exports
*/
    module.exports = mainRouter;
//