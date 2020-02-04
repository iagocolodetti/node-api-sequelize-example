const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const Contato = require('../models/Contato');

module.exports = {
    connect() {
        sequelize = new Sequelize(dbConfig);
        sequelize.authenticate().then(() => {
            Contato.init(sequelize);
            console.log(`Conexão com '${dbConfig.host}:${dbConfig.port}/${dbConfig.database}' estabelecida`);
        }).catch(() => {
            console.log(`Não foi possível estabelecer a conexão com '${dbConfig.host}:${dbConfig.port}/${dbConfig.database}'`);
        });
    }
}
