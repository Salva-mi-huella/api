const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('donations', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    method: {
        type : DataTypes.STRING,
        allowNull: false
    },
    date : {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    }
  }, {timestamps: false});
};