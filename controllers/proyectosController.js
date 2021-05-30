const Proyectos = require('../models/Proyectos');


exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = async ( req, res) => {
    // Enviar a la consola lo que el usuario escriba
    //console.log(req.body);

    // validar los datos del formulario
    const { nombre } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un Nombre al Proyecto'})
    }

    // si hay errores
    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    } else {
        // No hay errores
        // Insertar en la BD
        
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
           
    }
}