'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Test extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //   Test.belongsTo(models.Allcode, { foreignKey: "positionId", targetKey: "keyMap", as: "positionData" })
            //   Test.belongsTo(models.Allcode, { foreignKey: "gender", targetKey: "keyMap", as: "genderData" })
            //   Test.hasOne(models.Markdown, { foreignKey: 'doctorId' })
        }
    };
    Test.init({
        firstName: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Test',
    });
    return Test;
};