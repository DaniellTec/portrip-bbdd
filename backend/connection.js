//Mongoose permite hacer consultas a una BBDD
const mongoose = require('mongoose');
//mongoose.connect('mongodb:/127.0.0.1:27018/portripbbdd')
//URL de la BBDD
mongoose.connect('mongodb://localhost:27017/portrip')

//Se define la conexión MongoDB
const bbdd_connection = mongoose.connection

//Según el estado de la web
bbdd_connection.on('Connected', ()=>{console.log('Connected to MongoDB')})
bbdd_connection.on('error', ()=>{console.log('Error to connect')})

module.exports = mongoose 