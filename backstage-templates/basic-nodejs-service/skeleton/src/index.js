const express = require('express');
const app = express();
const port = process.env.PORT || SERVICE_PORT;

// Middleware para procesar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send(`¡Bienvenido al servicio ${process.env.SERVICE_NAME || 'SERVICE_NAME'}!`);
});

// Escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Servicio ${process.env.SERVICE_NAME || 'SERVICE_NAME'} escuchando en el puerto ${port}`);
});
