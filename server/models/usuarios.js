module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define('Usuarios', {
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_registro: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        id_rol: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'usuarios',
        timestamps: false
    });

    Usuarios.associate = (models) => {
        Usuarios.belongsTo(models.Roles, {
            foreignKey: 'id_rol',
            as: 'roles'
        });
    };

    return Usuarios;

};

