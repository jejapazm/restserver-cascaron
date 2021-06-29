const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.puerto = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();
        
        // Rutas de la app
        this.routes();
    }


    middlewares() {
        // cors
        this.app.use( cors() );

        // lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static('public') );
    }


    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }


    listen() {
        this.app.listen( this.puerto, () => {
            console.log('Server run on port', this.puerto);
        });
    }
}


module.exports = Server;