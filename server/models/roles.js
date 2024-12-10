module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define(
    "Roles",
    {
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "roles",
      timestamps: false,
    }
  );

    Roles.associate = (models) => {
        Roles.hasMany(models.Usuarios, {
        foreignKey: "id_rol",
        as: "usuarios",
        });
    };

    return Roles;
};

