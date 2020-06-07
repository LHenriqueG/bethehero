const express = require("express");

const OngController = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

//Routes

//Login
routes.post('/sessions', SessionController.create);

//List
routes.get('/ongs', OngController.index);
//Create
routes.post("/ongs", OngController.create);
//Uma única Ong listada
routes.get('/profile', ProfileController.index);

//Routes

//Create
routes.post('/incidents', IncidentController.create);
//List
routes.get('/incidents', IncidentController.index);
//Delete
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;
