const JsonError = require('../errors/JsonError');

const Contato = require('../models/Contato');

module.exports = {
    async create(request, response) {
        try {
            const result = await Contato.create(request.body);
            response.status(201);
            response.json(result);
        } catch (error) {
            response.status(500);
            response.json(JsonError(request, response, 'Não foi possível adicionar o contato'));
        }
    },

    async read(request, response) {
        try {
            const result = await Contato.findAll({ raw: true });
            response.json(result);
        } catch (error) {
            response.status(500);
            response.json(JsonError(request, response, 'Não foi possível buscar os contatos'));
        }
    },

    async update(request, response) {
        try {
            const { id } = request.params;
            const contato = await Contato.findOne({ where: { id } });
            if (contato) {
                await contato.update(request.body);
                response.json({ status: '200', message: 'Contado atualizado com sucesso' });
            } else {
                response.status(404);
                response.json(JsonError(request, response, 'Contado não encontrado'));
            }
        } catch (error) {
            response.status(500);
            response.json(JsonError(request, response, 'Não foi possível atualizar o contato'));
        }
    },

    async delete(request, response) {
        const { id } = request.params;
        try {
            const contato = await Contato.findOne({ where: { id } });
            if (contato) {
                await contato.destroy();
                response.json({ status: '200', message: 'Contado deletado com sucesso' });
            } else {
                response.status(404);
                response.json(JsonError(request, response, 'Contado não encontrado'));
            }
        } catch (error) {
            response.status(500);
            response.json(JsonError(request, response, 'Não foi possível deletar o contato'));
        }
    }
};