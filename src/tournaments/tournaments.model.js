'use strict';

import mongoose from 'mongoose';

const tournamentSchema = new mongoose.Schema({
    tournamentName: {
        type: String,
        required: [true, 'El nombre del torneo es obligatorio'],   
        trim: true,
        maxLength: [100, 'El nombre del torneo no puede tener más de 100 caracteres']
    },
    startDate: {
        type: Date,
        required: [true, 'La fecha de inicio es obligatoria'],
    },
    endDate: {
        type: Date,
        required: [true, 'La fecha de finalización es obligatoria'],
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }],
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
//Exportamos el modelo con el nombre 'Tournament' y el esquema tournamentSchema
export default mongoose.model('Tournament', tournamentSchema);