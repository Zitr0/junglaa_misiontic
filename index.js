'use strict'
const mongoose = require('mongoose');

const app = require('./app');
const config = require('./config');


mongoose.connect(config.db, {useNewUrlParser: true}, (err, res)=>{
    // en caso de que haya habido algún error
    if(err) {
        return console.log(`Error al conectar a la base de datos ${err}`);
    }

    //si no hay error
   /* console.log("Conexión a la base de datos establecida");
    app.listen(config.port, ()=> {
        console.log(`Server is up on port:${config.port}`)
    });*/
});

app.listen(config.port, ()=>{
    console.log('Server is up on port ' + config.port)
})

