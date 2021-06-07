const Sequelize = require('sequelize');
// extraer valores de variables.env 
require('dotenv').config({ path: 'variables.env'});

//conexion a la BD
const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    dialect: 'mysql',
    port: process.env.BD_PORT,
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