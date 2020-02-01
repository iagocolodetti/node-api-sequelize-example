const { Sequelize } = require('sequelize');

let contato = null;
module.exports = {
    connect() {
        const sequelize = new Sequelize('contatodb', 'root', 'root', {
            host: 'localhost',
            port: 3306,
            dialect: 'mysql',
            logging: false
        });

        sequelize.authenticate()
        .then(() => {
            contato = sequelize.define('contato',
            {
                id: {
                    type: Sequelize.INTEGER,
                    required: true,
                    primaryKey: true,
                    autoIncrement: true
                },
                nome: {
                    type: Sequelize.STRING
                },
                telefone: {
                    type: Sequelize.STRING
                },
                email: {
                    type: Sequelize.STRING
                }
            },
            {
                tableName: 'contato',
                freezeTableName: false,
                timestamps: false
            });
            console.log('Conexão com \'localhost:3306/contatodb\' estabelecida');
        })
        .catch((error) => {
            throw error;
        });
    },

    getModel() {
        return contato;
    }
}
