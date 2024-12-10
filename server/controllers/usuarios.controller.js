const { Usuarios } = require('../models');

exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    console.log(usuarios);
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};