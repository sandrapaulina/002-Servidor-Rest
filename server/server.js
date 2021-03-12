require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {  //cliente, respuesta del servidor
  res.send('<h1>Bienvenido a mi servidor REST (localhost)</h1>');
});

app.use(require('./routes/usuario'));

mongoose.connect('mongodb://localhost:27017/Cafeteria',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err, res) => { //SQL 3606
if(err) throw err;
console.log('Base de datos ONLINE');
});
 
app.listen(process.env.PORT, () => {
    console.log('El servidor esta en linea por el puerto: ', process.env.PORT);
});   //escucha por el puerto #