'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const VentaSchema = Schema({
    Id: Number,
    Cantidad: Number,
    Total: Number,
    ValorUnitario: Number,
    Fecha: Date,
    Cliente: String,
    Documento: Number,
    NombreDeEncargado: String
});
 
module.exports = mongoose.model('Venta', VentaSchema);