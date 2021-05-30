const express = require('express');
const routes = require('./routes');
const path = require('path');

//crear una app de express
const app = express();

// Habilitar Pug 
app.set('view engine', 'pug');

// Añadir carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());



//Puerto express
app.listen(3000, () => {
console.log('APP EN EL PUERTO 3000!');
});