const Sequelize = require('sequelize');

//conexion a la BD
const db = new Sequelize('uptasknode2', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    operatorsAliases: 0,
    define: {
        timestamps: false
    },

    pool: {
        max: 5,
        min: 0,
        acquiere: 30000,
        idle: 10000
    },
   
});

module.exports = db;