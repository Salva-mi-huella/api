const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('request_foundation', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      },
    message: {
        type: DataTypes.STRING(1234),
        allowNull: false
    }
},{timestamps: false});
};
