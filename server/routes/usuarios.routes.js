const express = require("express");
const { Router } = express;
const usuariosController = require("../controllers/usuarios.controller");


const router = Router();

router.get("/obtenerTodos", usuariosController.getAllUsuarios);

return Router();