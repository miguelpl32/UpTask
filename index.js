const express = require('express');
const routes = require('./routes');
const path = require('path');
// const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('./config/passport');

 
// helpers con algunas funciones
const helpers = require('./helpers');

// Crear la conexion a la BD
const db = require('./config/db');

// Importamos los modelos
require('./models/Proyectos');
require('./models/Tareas');
require('./models/Usuarios');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));


//crear una app de express
const app = express();

// Carga de archivos estaticos
app.use(express.static('public'));

// Habilitar Pug 
app.set('view engine', 'pug');

// habilitar para leer datos del formulario
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// app.use(expressValidator());


// Añadir carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// agregar Flash messages
app.use(flash());

app.use(cookieParser());

// Sesiones nos permite navegar entre distintas paginas sin volvernos a autenticar
app.use(session({
    secret: 'elsecreto',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// Pasar var dump a la aplicacion, mensajes flash e informacion del usuario
app.use((req, res, next) => {
    
    res.locals.vardump = helpers.vardump;
    res.locals.mensajes = req.flash();
    res.locals.usuario = {...req.user} || null;        
    next();
});

app.use('/', routes());

//Puerto express
app.listen(3000, () => {
console.log('APP EN EL PUERTO 3000!');
});

