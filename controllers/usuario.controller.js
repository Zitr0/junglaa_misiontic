'use strict'
const Usuario = require('../models/Usuario.model.js')

function getUsuarios(req, res) {
    Usuario.find({}, (error, usuarios) => {
        //En caso de que haya habido un error
        if (error) return res.status(500).send({
            message: `Error al realizar la consulta de los usuarios: ${error}`
        });

        //En caso que no haya usuarios
        if (!usuarios) return res.status(404).send({
            message: `No hay usuarios registrados`
        });

        //En caso que todo vaya bien
        res.status(200).send({ usuarios });
    })
}


function registrarUsuario(req, res) {
    console.log('POST /api/usuario');
    console.log(req.body);

    //Primero buscamos el usuario en la base de datos
    Usuario.findOne({ id: req.body.id }, (err, usuarioEnBaseDeDatos) => {
        if (!usuarioEnBaseDeDatos) {
            //Si no se encuentra el usuario, se guarda
            let usuarioTemp = {
                id: req.body.id,
                nombre: req.body.nombre,
                rol: req.body.rol,
                estado: req.body.estado
            }

            let usuarioARegistrar = new Usuario(usuarioTemp);

            usuarioARegistrar.save((error, usuarioRegistrado) => {
                if (!error) {
                    res.status(200).send({
                        message: 'Usuario registrado',
                        usuarioRegistrado
                    })
                } else {
                    res.status(500).send({
                        message: `Error al guardar nuevo usuario en la base de datos: ${err}`
                    });
                }
            })


        } else {
            //Si se encuentra el usuario sacamos un error
            res.status(400).send({
                message: `El usuario con identificador ${req.body.id} ya se encuentra registrado`
            })
        }
    });

}


async function actualizarUsuario(req, res) {
    console.log('PATCH /api/usuario');
    console.log(req.body);

    const update = await Usuario.findOneAndUpdate(
        { id: req.body.id }, 
        {
            id: req.body.id,
            nombre: req.body.nombre,
            rol: req.body.rol,
            estado: req.body.estado
        },
        {
            new: true,
            upsert:true
        })
    console.log(update);
    res.status(200).send({
        message: 'Usuario actualizado'
    })

}

module.exports = {
    getUsuarios,
    registrarUsuario,
    actualizarUsuario
}