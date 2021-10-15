'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const UsuarioSchema = Schema({
    id: Number,
    nombre: String,
    rol: String,
    estado: {
        type: Boolean,
        default: false
    }
});
 
module.exports = mongoose.model('Usuario', UsuarioSchema);