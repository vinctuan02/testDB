
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('congngheWeb', 'root', null, {
    host: 'localhost',
    port: 3001,
    dialect: 'mysql',
    logging: false
})


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const SinhVien = sequelize.define("sinhvien", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fistname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const rider = sequelize.define("rider", {
    rider: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fistname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


const motoGP = sequelize.define("motoGP", {
    rider: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fistname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


// sequelize.sync().then(() => {
//     console.log('Book table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });

const svTuan = SinhVien.create({ fistname: 'Tuan1', lastName: "Nguyen" })

// Lưu bản ghi trong luồng
// sinhvien.save({ stream: true }, (err, sinhvien) => {
//     // ...
// });

console.log("success")