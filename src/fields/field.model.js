'use strict';

import mongoose from 'mongoose';

const fieldSchema = new mongoose.Schema({
    fieldName:{ 
        type: String,
        required: true,
        trim: true, //Quita los espacios en blanco al inicio y al final
        maxLength: [100, 'El nombre del campo no puede tener más de 100 caracteres']
    },
    fieldType:{ 
        type: String,
        required: [true, 'El tipo de campo es obligatorio'],
        //enum: valores permitidos
        enum: {
            values: ['Natural', 'Sintetica', 'Concreto'],
            message: 'Tipo de superficie no válida'
        }
    },
    capacity: {
        type: String,
        required: [true, 'La capacidad es requerida'],
        enum: {
        values: ['FUTBOL_5', 'FUTBOL_7', 'FUTBOL_11'],
        message: 'Capacidad no válida',
        },
    },
    pricePerHour: {
        type: Number,
        required: [true, 'El precio por hora es requerido'],
        min: [0, 'El precio debe ser mayor o igual a 0'],
    },
    description: {
        type: String,
        trim: true,
        maxLength: [500, 'La descripción no puede exceder 500 caracteres'],
    },
    photo: {
        type: String,
        // valor por defecto
        default: 'fields/kinal_sports_nyvxo5',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
})

//Exportamos el modelo con el nombre 'Field' y el esquema fieldSchema
export default mongoose.model('Field', fieldSchema);