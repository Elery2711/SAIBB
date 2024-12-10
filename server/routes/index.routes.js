// Init router
const express = require("express");
const { Router } = express;
const router = Router();

// Importar rutas
const usuarios = require("./usuarios.routes");

router.use("/usuarios", usuarios);

module.exports = router;
