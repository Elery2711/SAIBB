const express = require ('express');
const bodyParser  = require  ('body-parser');
const cors = require ('cors');
const usuariosRoutes  = require  ('./routes/usuarios.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba para verificar que el servidor está corriendo
app.get("/", (req, res) => {
    res.send("API de la aplicación en funcionamiento correctamente");
  });

app.use('/api/usuarios', usuariosRoutes);

module.exports = app;