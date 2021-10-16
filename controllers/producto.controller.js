'use strict'
const Producto = require('../models/Producto.model.js')

function getProductos(req, res){
    Producto.find({}, (error, productos)=>{
        //En caso de que haya habido un error
        if(error) return res.status(500).send({
            message: `Error al realizar la consula de los productos: ${error}`
        });
 
        //En caso que no haya productos
        if(!productos) return res.status(404).send({
            message: `No hay productos registrados`
        });
 
        //En caso que todo vaya bien
        res.status(200).send({ productos });
    })
}
 
function registrarProducto(req, res){
    console.log('POST /api/producto');
    console.log(req.body);
 
    //Primero buscamos el producto en la abse de datos
    Producto.findOne({identificador: req.body.identificador}, (err, productoEnBaseDeDatos)=>{
        if(!productoEnBaseDeDatos){
            //Si no se encuentra el producto, se guarda
            let productoTemp = {
                identificador : req.body.identificador,
                descripcion: req.body.descripcion,
                valor: req.body.valor,
                estado: req.body.estado
            }
       
            let productoARegistrar = new Producto(productoTemp);
       
            productoARegistrar.save((error, productoRegistrado)=>{
                if(!error){
                    res.status(200).send({
                        message: 'Producto registrado',
                        productoRegistrado
                    })
                }else{
                    res.status(500).send({
                        message: `Error al guardar nuevo producto en la base de datos: ${err}`
                    });
                }
            })
 
           
        }else{
            //Si se encuenra el producto sacamos un error
            res.status(400).send({
                message: `El producto con identificador ${req.body.identificador} ya se encuentra registrado`
            })
        }
    });
 
}

async function actualizarProducto(req, res) {
    console.log('PATCH /api/producto');
    console.log(req.body);

    const update = await Producto.findOneAndUpdate(
        { identificador: req.body.identificador }, 
        {
            identificador: req.body.identificador,
            descripcion: req.body.descripcion,
            valor: req.body.valor,
            estado: req.body.estado
        },
        {
            new: true,
            upsert:true
        })
    console.log(update);
    res.status(200).send({
        message: 'Producto actualizado'
    })

}
 
module.exports = {
    getProductos,
    registrarProducto,
    actualizarProducto
}
