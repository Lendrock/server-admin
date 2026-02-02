'use strict';

// Importaciones
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { corsOptions } from './cors-configuration.js';

//Rutas
import fieldRoutes from '../src/fields/field.routes.js';
import { dbConnection } from './db.js';

const BASE_URL = '/kinalSportAdmin/v1';

// Configuracion de los middlewares
const middlewares = (app) => {
    // Permite manejar datos en formato URL encoded
    app.use(express.urlencoded({ extendeded: false, limit: '10mb' }));
    // Permite manejar datos en formato JSON
    app.use(express.json({ limit: '10mb'}));
    // Configuracion de CORS que se encarga de manejar las politicas de seguridad
    app.use(cors(corsOptions));
    // Configuracion de Morgan para el logueo de peticiones HTTP
    app.use(morgan('dev'));
}

//Integracion de todas las rutas
const routes = (app) => {
    app.use(`${BASE_URL}/fields`, fieldRoutes);
};

//Funcion para iniciar el servidor
const initServer = async (app) => {
    // Creacion de la instancia de la aplicacion
    app = express();
    const PORT = process.env.PORT || 3001;

    try {
        // Configuracion de los middlewares (MI APLICACION)
        dbConnection();
        middlewares(app);
        routes(app);

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
            console.log(`URL BASE: http://localhost:${PORT}${BASE_URL}`);
        });

        //Primera ruta
        app.get(`${BASE_URL}/health`, (req, res) => {
            res.status(200).json(
                {
                    status: 'OK',
                    service: 'KinalSport Admin',
                    version: '1.0.0'
                }
            );
        });
    } catch (error) {
        
    }
}

export { initServer };