const app = require("./app");
const { sequelize } = require("./models"); // Cambiado para importar desde models/index.js

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos establecida.");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("Error al sincronizar la base de datos:", err));


