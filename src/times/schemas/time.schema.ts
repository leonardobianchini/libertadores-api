import * as mongoose from 'mongoose';

export const TimeSchema = new mongoose.Schema({
    nome: String,
    estadio: String,
    corPrincipal: String,
})