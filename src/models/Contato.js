const { Model, DataTypes } = require('sequelize');

class Contato extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING
            },
            telefone: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            }
        }, {
            tableName: 'contato',
            timestamps: false,
            sequelize
        });
    }
}

module.exports = Contato;
