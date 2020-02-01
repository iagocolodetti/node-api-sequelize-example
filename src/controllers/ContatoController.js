const db = require('./Database');
const JsonError = require('../error/JsonError');

module.exports = {
    create(request, response) {
        db.getModel().create(request.body)
        .then((result) => {
            if (result) {
                response.json(result); 
            }
        })
        .catch(() => {
            response.status(500);
            response.json(JsonError(request, response, 'Não foi possível adicionar o contato'));
        });
    },

    read(request, response) {
        db.getModel().findAll({ raw: true })
        .then((result) => response.json(result))
        .catch(() => {
            response.status(500);
            response.json(JsonError(request, response, 'Não foi possível buscar os contatos'));
        })
    },

    update(request, response) {
        const { id } = request.params;

        db.getModel().findOne({ where: { id } })
        .then((result) => {
            if (result) {
                db.getModel().update(request.body, { where: { id } })
                .then(() => {
                    response.json({ status: '200', message: 'Contado atualizado com sucesso' });
                })
                .catch(() => {
                    response.status(500);
                    response.json(JsonError(request, response, 'Não foi possível atualizar o contato'));
                });
            } else {
                response.status(404);
                response.json(JsonError(request, response, 'Contado não encontrado'));
            }
        })
        .catch(() => {
            response.status(500);
            response.json(JsonError(request, response, 'Não foi possível atualizar o contato'));
        });
    },

    delete(request, response) {
        const { id } = request.params;

        db.getModel().findOne({ where: { id } })
        .then((result) => {
            if (result) {
                db.getModel().destroy({ where: { id } })
                .then(() => {
                    response.json({ status: '200', message: 'Contado deletado com sucesso' });
                })
                .catch(() => {
                    response.status(500);
                    response.json(JsonError(request, response, 'Não foi possível deletar o contato'));
                });
            } else {
                response.status(404);
                response.json(JsonError(request, response, 'Contado não encontrado'));
            }
        })
        .catch(() => {
            response.status(500);
            response.json(JsonError(request, response, 'Não foi possível deletar o contato'));
        });
    }
};