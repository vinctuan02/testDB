'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('riders', {
            id: {
                allowNull: true,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            haNoi: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            daNang: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            hoChiMinh: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            namDinh: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('riders');
    }
};

