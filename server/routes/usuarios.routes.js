const express = require("express");
const { Router } = express;
const router = Router();

// Importar controladores
const usuariosController = require("../controllers/usuarios.controller");

// Definir rutas
router.post("/login", usuariosController.login);
router.get("/obtenerTodos", usuariosController.getAllUsuarios);
router.get("/obtenerPorId/:id", usuariosController.getUsuarioById);

module.exports = router;