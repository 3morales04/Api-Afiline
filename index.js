const express = require('express');
const app = express();

app.listen(3000, function () {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.post('/afiline', function (req, res) {
    res.send('Afiline lo mejor, bienvenidos');
  }); 

  app.get('/afiline', function (req, res) {
    res.send('Afiline lo mejor, bienvenidos');
  });