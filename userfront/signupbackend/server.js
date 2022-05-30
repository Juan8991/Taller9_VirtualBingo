const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routesUrl = require('./routes/routes')
const cors = require('cors')

const port =process.env.PORT || 4000
//Para utilizar variables de entorno
require('dotenv').config()

//Conexion a base de datos
const uri=`mongodb+srv://${process.env.USERN}:${process.env.PASSWORD}@mycluster.edywy.mongodb.net/${process.env.DATABASENAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
  {useNewUrlParser: true,
  useUnifiedTopology: true}
)
.then(()=>{console.log("Conexion a base de datos ESTABLECIDA...")})
.catch(e=>{console.log(e)});

app.use(express.json())
app.use(cors())
//rutas
app.use('/',routesUrl)


app.listen(port, ()=>console.log('El servidor esta corriendo en el puerto 4000'))