const { Sequelize } = require('sequelize');
const databaseConfig = require('../configs/database');

const dbConfig = process.env.NODE_ENV === 'dev' ? databaseConfig.development : databaseConfig.test;

const Contato = require('../models/Contato');

const sequelize = new Sequelize(dbConfig);

module.exports = {
    async connect() {
        try {
            await sequelize.authenticate();
            Contato.init(sequelize);
            if (process.env.NODE_ENV === 'dev') {
                console.log(`Conexão com '${dbConfig.host}:${dbConfig.port}/${dbConfig.database}' estabelecida`);
            }
        } catch (error) {
            console.log(`Não foi possível estabelecer a conexão com '${dbConfig.host}:${dbConfig.port}/${dbConfig.database}'`);
        }
    },

    async close() {
        await sequelize.close();
    }
}
