'use strict';
import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: [true, 'El nombre del equipo es obligatorio'],
        trim: true,
        maxLength: [100, 'El nombre del equipo no puede tener más de 100 caracteres']
    },
    coachName: {
        type: String,
        required: [true, 'El nombre del entrenador es obligatorio'],
        trim: true,
        maxLength: [100, 'El nombre del entrenador no puede tener más de 100 caracteres']
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
//Exportamos el modelo con el nombre 'Team' y el esquema teamSchema
export default mongoose.model('Team', teamSchema);  
