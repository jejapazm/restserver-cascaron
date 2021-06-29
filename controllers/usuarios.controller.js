

const { response, request } = require('express');


const usuariosGet = ( req = request, res = response ) => {
    
    res.json({
        msg: "get user from controller",
    });
}

const usuariosPut = ( req = request, res = response ) => {

    res.json({
        msg: "put user from controller",
        id
    });
}

const usuariosPost = ( req = request, res = response ) => {

    res.json({
        msg: "post user from controller",
    });
}
const usuariosDelete = ( req = request, res = response ) => {
    
    res.json({
        msg: "delete user from controller",
        
    });
}

const usuariosPatch = ( req = request, res = response ) => {

    res.json({
        msg: "patch user from controller"
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}