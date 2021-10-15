'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ProductoSchema = Schema({
    identificador: String,
    descripcion: String,
    valor: Number,
    estado: Boolean
});
 
module.exports = mongoose.model('Producto', ProductoSchema);


/*
id 
nombre
rol
estado
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
