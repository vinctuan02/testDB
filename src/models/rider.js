'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class rider extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    rider.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        address: DataTypes.STRING,
        haNoi: DataTypes.INTEGER,
        daNang: DataTypes.INTEGER,
        hoChiMinh: DataTypes.INTEGER,
        namDinh: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'rider',
    });
    return rider;
};
