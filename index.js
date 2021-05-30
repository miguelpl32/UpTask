const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Crear la conexion a la BD
const db = require('./config/db');

// Importamos el model 
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));


//crear una app de express
const app = express();

// Carga de archivos estaticos
app.use(express.static('public'));

// Habilitar Pug 
app.set('view engine', 'pug');

// Añadir carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());



//Puerto express
app.listen(3000, () => {
console.log('APP EN EL PUERTO 3000!');
});