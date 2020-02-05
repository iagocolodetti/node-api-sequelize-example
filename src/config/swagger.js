module.exports = {
    swaggerDefinition: {
        info: {
            title: 'node-api-sequelize-example',
            description: 'Exemplo simples de CRUD API utilizando banco de dados MySQL e Sequelize com Node.js',
            contact: {
                name: 'Iago Colodetti',
                url: 'https://github.com/iagocolodetti/node-api-sequelize-example'
            },
            version: '1.2'
        }
    },
    apis: ['./src/routes.js']
}
