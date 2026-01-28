//Imporatamos las dependencias
import Field from './field.model.js';

//Contrles
export const getFields = async (req, res) => {
    try {
        //Datos que vienen de la query
        const {page = 1, limit = 10, isActive} = req.query;
        //Variable que utilizaremos para filtrar
        //Como se realiza el filtro depende de si viene el parametro isActive
        const filter = { isAtive };

        // Opciones de paginación
        const options = {
            //Convertimos a numero entero
            page: parseInt(page),
            //Convertimos a numero entero
            limit: parseInt(limit),
            //Ordenar por fecha de creación
            sort: {createdAt: -1}
        };

        //Realizar la consulata al Schema Field
        const fields = await Field.find(filter)
            .limit(limit)
            .skip((page - 1) * limit)
            .sort( options.sort );

        //Conteo de documentos de la consulta
        const total = await Field.countDocuments(filter);

        //Repsuesta
        res.status(200).json({
            success: true,
            data: fields,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalRecords: total,
                limit: limit,
            },
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message : 'Error al obtener los campos',
            error: error.message,
        });
        
    }
};
