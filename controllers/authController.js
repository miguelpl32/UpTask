const passport = require('passport')

exports.autenticarUsuario = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/iniciar-sesion',
    failureFlash: true,
    badRequestMessage: 'Ambos Campos son Obligatorios'
}); 

// Funcion revisr si el usuario esta logueado o no 
exports.usuarioAutenticado = (req, res, next) => {

    // si el usuario esta usuarioAutenticado
    if(req.isAuthenticated()) {
        return next();
    }
    // sino esta autenticado, redirigir al formulario 
    return res.redirect('/iniciar-sesion');

}

// Funcion para cerrar sesion 
exports.cerrarSesion = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/iniciar-sesion'); // al cerrar sesión nos lleva al login
    })
}