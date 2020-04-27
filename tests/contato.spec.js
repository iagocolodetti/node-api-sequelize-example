const request = require('supertest');
const app = require('../src/app');
const db = require('../src/database');

const Contato = require('../src/models/Contato');

const MOCK_CONTATO = {
    nome: 'teste',
    telefone: '1111-2222',
    email: 'teste@email.com'
};

const MOCK_NOVO_CONTATO = {
    nome: 'teste',
    telefone: '1111-2222',
    email: 'teste2@email.com'
};

let MOCK_CONTATO_ID = 1;

describe('Contato', () => {
    beforeAll(async () => {
        await db.connect();
        await Contato.destroy({ truncate: true });
    });

    afterAll(async () => {
        await db.close();
    });

    it('Deve criar um contato', async () => {
        const response = await request(app).post('/contatos').send(MOCK_CONTATO);
        expect(response.body).toStrictEqual({ ...MOCK_CONTATO, id: MOCK_CONTATO_ID });
    });

    it('Deve retornar o contato criado', async () => {
        const response = await request(app).get('/contatos');
        expect(response.body[0]).toStrictEqual({ ...MOCK_CONTATO, id: MOCK_CONTATO_ID });
    });

    it('Deve atualizar o contato criado', async () => {
        const response = await request(app).put(`/contatos/${MOCK_CONTATO_ID}`).send(MOCK_NOVO_CONTATO);
        expect(response.status).toBe(200);
    });

    it('Deve deletar o contato criado', async () => {
        const response = await request(app).delete(`/contatos/${MOCK_CONTATO_ID}`);
        expect(response.status).toBe(200);
    });
});