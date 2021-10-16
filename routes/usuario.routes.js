'use strict'
const express = require('express');
const api = express.Router();
 
const UsuarioCtrl = require('../controllers/usuario.controller');
 
api.get('/usuario', UsuarioCtrl.getUsuarios);
api.post('/usuario', UsuarioCtrl.registrarUsuario);
api.patch('/usuario', UsuarioCtrl.actualizarUsuario);
 
module.exports = api;