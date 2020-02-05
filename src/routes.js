const { Router } = require('express');
const ContatoController = require('./controllers/ContatoController');

const routes = Router();

/**
 * @swagger
 * definitions:
 *   Contato:
 *     type: object
 *     properties:
 *       nome:
 *         type: string
 *       telefone:
 *         type: string
 *       email:
 *         type: string
 */

/**
 * @swagger
 * /contatos:
 *   post:
 *     tags:
 *       - Contatos
 *     description: Cria um novo contato
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contato
 *         description: Contato
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Contato'
 *     responses:
 *       201:
 *         description: Retorna o contato criado
 *         schema:
 *           $ref: '#/definitions/Contato'
 *       500:
 *         description: Erro interno
 */
routes.post('/contatos', ContatoController.create);

/**
 * @swagger
 * /contatos:
 *  get:
 *    tags:
 *      - Contatos
 *    description: Busca todos os contatos
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Retorna uma lista de contatos
 *        schema:
 *          $ref: '#/definitions/Contato'
 *      500:
 *        description: Erro interno
 */
routes.get('/contatos/', ContatoController.read);

/**
 * @swagger
 * /contatos/{id}:
 *  put:
 *    tags:
 *      - Contatos
 *    description: Atualiza contato existente
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: id do Contato
 *        in: path
 *        required: true
 *        type: integer
 *      - name: contato
 *        description: Contato
 *        in:  body
 *        required: true
 *        type: string
 *        schema:
 *          $ref: '#/definitions/Contato'
 *    responses:
 *      200:
 *        description: Contato alterado com sucesso
 *      404:
 *        description: Contado não encontrado
 *      500:
 *        description: Erro interno
 */
routes.put('/contatos/:id', ContatoController.update);

/**
 * @swagger
 * /contatos/{id}:
 *  delete:
 *    tags:
 *      - Contatos
 *    description: Excluí um contato
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: id do Contato
 *        in: path
 *        required: true
 *        type: integer
 *    responses:
 *      200:
 *        description: Contato excluído com sucesso
 *      404:
 *        description: Contado não encontrado
 *      500:
 *        description: Erro interno
 */
routes.delete('/contatos/:id', ContatoController.delete);

module.exports = routes;