const express = require("express");
const app = express();

// Configuración del puerto
const PORT = process.env.PORT || 3001;

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Hola desde tu componente integrado con Backstage!");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
