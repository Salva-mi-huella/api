const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
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
      type: DataTypes.DATE,
      defaultValue: DataTypes.DATEONLY
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {timestamps: false});
};