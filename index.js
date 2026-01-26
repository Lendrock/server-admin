// Importaciones
import dotenv from 'dotenv';
import { initServer } from './configs/app.js';

//Configuracoin de variables de entorno
dotenv.config();

//errores no capturados
process.on('uncaughtException', (error) => {
    console.error(error);
    process.exit(1);
});

// Promesas rechazadas o no manejadas
process.on('unhandledRejection', (reason, promise) => {
    console.error(reason, promise);
    process.exit(1);
});

//Iniciar el servidor
console.log('Iniciando el servidor de KinalSportAdmin v 1.0.0');
initServer();
