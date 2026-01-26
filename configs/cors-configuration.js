const corsOptions = {
    //Permite que cualquier origen acceda a la API
    origin: true, //kinal.edu.gt
    //Permite que la Api acceda a la Api
    Credentials: true,
    //Establece los metodos permitidos de la API
    methods: "GET, POST, PUT, DELETE",
    // Define los headers que el cliente peude enviar
    allowedHeaders: "Content-Type, Authorization", 
}
export {corsOptions};