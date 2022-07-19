const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.ENUM("Macho", "Hembra"),
      allowNull: false
    },
    post_date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {timestamps: false});
};