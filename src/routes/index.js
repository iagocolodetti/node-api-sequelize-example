const { Router } = require('express');
const ContatoController = require('../controllers/ContatoController');

const routes = Router();

routes.post('/contatos', ContatoController.create);
routes.get('/contatos', ContatoController.read);
routes.put('/contatos/:id', ContatoController.update);
routes.delete('/contatos/:id', ContatoController.delete);

module.exports = routes;