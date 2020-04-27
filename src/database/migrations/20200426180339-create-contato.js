/*
  yarn|npm sequelize db:migrate --env development // up
  yarn|npm sequelize db:migrate:undo --env development // down
  yarn|npm sequelize db:migrate --env test // up
  yarn|npm sequelize db:migrate:undo --env test // down
*/
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contato', {
      id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: true,
        defaultValue: null
      },
      telefone: {
        type: Sequelize.STRING(45),
        allowNull: true,
        defaultValue: null
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: true,
        defaultValue: null
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contato');
  }
};
