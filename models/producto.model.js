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


/*
identificador
descripcion
valor
estado
*/

/*
Id
Cantidad
Total 
ValorUnitario
Fecha
Cliente 
Documento
NombreDeEncargado 
*/

/*
En búsqueda:

id producto
nombre cliente
documento cliente

En actualización y verificación de venta 

estado

en proceso, 
entregado, 
cancelado.
*/

/*
id 
nombre
rol
estado
*/