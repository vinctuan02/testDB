'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Test', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING
            }

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Test');
    }
};