'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ProductoSchema = Schema({
    identificador: String,
    descripcion: String,
    valor: Number,
    estado: String
});
 
module.exports = mongoose.model('Producto', ProductoSchema);



