const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('congngheWeb', 'root', null, {
    host: 'localhost',
    port: 3001,
    dialect: 'mysql',
    logging: false
})

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully. ");
    } catch (error) {
        console.error("Unable to connect to the database: ", error)
    }
}

module.exports = connectDB