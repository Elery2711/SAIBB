const { Usuarios } = require("../models");
const { Op } = require("sequelize");

exports.login = async (req, res) => {
  try {
    let { nombre, email, contrasena } = req.body;

    console.log(req.body);

    if (!nombre) {
      nombre = "";
    }

    if (!email) {
      email = "";
    }

    const usuario = await Usuarios.findOne({
      where: {
        [Op.and]: [
          {
            [Op.or]: [{ nombre }, { email }],
          },
          { contrasena },
        ],
      },
      include:{
        association : "roles"
      }
    });

    if (usuario) {
      res.json(usuario);
    } else {
      res.status(400).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll({
      attributes: ["id_usuario", "nombre", "email"],
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuarios.findByPk(req.params.id);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
