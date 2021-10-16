'use strict'
const Venta = require('../models/Venta.model.js')

function getVentas(req, res){
    Venta.find({}, (error, ventas)=>{
        //En caso de que haya habido un error
        if(error) return res.status(500).send({
            message: `Error al realizar la consulta de las ventas: ${error}`
        });
 
        //En caso que no haya ventas
        if(!ventas) return res.status(404).send({
            message: `No hay ventas registradas`
        });
 
        //En caso que todo vaya bien
        res.status(200).send({ ventas });
    })
}
 
function registrarVenta(req, res){
    console.log('POST /api/venta');
    console.log(req.body);
 
    //Primero buscamos la venta en la base de datos
    Venta.findOne({Id: req.body.Id}, (err, ventaEnBaseDeDatos)=>{
        if(!ventaEnBaseDeDatos){
            //Si no se encuentra la venta, se guarda
            let ventaTemp = {
                Id: req.body.Id,
                Cantidad: req.body.Cantidad,
                Total:  req.body.Total,
                ValorUnitario:  req.body.ValorUnitario,
                Fecha:  req.body.Fecha,
                Cliente:  req.body.Cliente,
                Documento:  req.body.Documento,
                NombreDeEncargado:  req.body.NombreDeEncargado
            }
       
            let ventaARegistrar = new Venta(ventaTemp);
       
            ventaARegistrar.save((error, ventaRegistrado)=>{
                if(!error){
                    res.status(200).send({
                        message: 'Venta registrada',
                        ventaRegistrado
                    })
                }else{
                    res.status(500).send({
                        message: `Error al guardar nueva venta en la base de datos: ${err}`
                    });
                }
            })
 
           
        }else{
            //Si se encuentra el venta sacamos un error
            res.status(400).send({
                message: `La venta con identificador ${req.body.Id} ya se encuentra registrada`
            })
        }
    });
 
}

async function actualizarVenta(req, res) {
    console.log('PATCH /api/venta');
    console.log(req.body);

    const update = await Venta.findOneAndUpdate(
        { Id: req.body.Id }, 
        {
            Id: req.body.Id,
            Cantidad: req.body.Cantidad,
            Total:  req.body.Total,
            ValorUnitario:  req.body.ValorUnitario,
            Fecha:  req.body.Fecha,
            Cliente:  req.body.Cliente,
            Documento:  req.body.Documento,
            NombreDeEncargado:  req.body.NombreDeEncargado
        },
        {
            new: true,
            upsert:true
        })
    console.log(update);
    res.status(200).send({
        message: 'Venta actualizada'
    })

}
 
module.exports = {
    getVentas,
    registrarVenta,
    actualizarVenta
}
