'use strict';

import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    reservationDate: {
        type: Date,
        required: [true, 'La fecha de la reservación es obligatoria'],
    },
    startTime: {
        type: String,
        required: [true, 'La hora de inicio es obligatoria'],
    },
    endTime: {
        type: String,
        required: [true, 'La hora de finalización es obligatoria'],
    },
    field: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Field',
        required: [true, 'El campo es obligatorio'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El usuario es obligatorio'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'El precio total es obligatorio'],
        min: [0, 'El precio total debe ser mayor o igual a 0'],
    },
    status: {
        type: String,
        enum: {
            values: ['Pendiente', 'Confirmado', 'Cancelado', 'Completado'],
            message: 'Estado de reservación no válido',
        },
        default: 'Pendiente',
    },
}, {
    timestamps: true,
});
//Exportamos el modelo con el nombre 'Reservation' y el esquema reservationSchema
export default mongoose.model('Reservation', reservationSchema);