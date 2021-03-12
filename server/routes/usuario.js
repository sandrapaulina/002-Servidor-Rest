const express = require('express');
const app = express();

  app.get('/usuario', function (req, res) {  //cliente, respuesta del servidor
      res.json({
      ok: 200,
      mensaje: 'Usuario consultado con exito' //consulta=GET
      });
    });
  
  app.post('/usuario', function(req, res){
      let nombre = req.body.nombre;    //forma de cachar BODY
      let body = req.body;
  
      if(nombre === undefined){
        res.status(400).json({
            ok: 400,
            mensaje: 'Favor de enviar el valor del nombre'
        });
      }else{
  
        res.json({
        ok: 200,
        mensaje: 'Usuario insertado con exito',   //insercion=POST
        body: body
          });
      }
    });
  
  
  app.put('/usuario/:id/:nombre', function(req, res){  //forma de cachar PARAMS
      let id = req.params.id;
      let nombre = req.params.nombre;  //cachar parametros
  
      res.json({                            //respuesta
         ok: 200,
         mensaje: 'Usuario actualizado con exito',
         id: id,
         nombre: nombre
      });
  });
  
  app.delete('/usuario/:id', function(req, res){
      let id = req.params.id;
  
      res.json({
        ok: 200,
        mensaje: 'Usuario eliminado con exito',
        id: id
      });
  });

  module.exports = app;