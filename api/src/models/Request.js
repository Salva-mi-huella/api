const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('request', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foundation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    textarea: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },{timestamps: false});
};