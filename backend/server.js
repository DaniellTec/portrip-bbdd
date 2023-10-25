const express = require('express')
const app = express()

//MongoDB Import connection, se importa el fichero donde se encuentra la conexión con MongoDB
const portripBD = require('./connection')

//Al iniciar el servidor
app.get('/', (req, res) => {
    res.end('The server in ON')
})

//Configuration
app.listen(5000, function(){
    console.log('The server has connected successfully')
})