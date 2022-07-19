const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pet', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    age: {
      type: DataTypes.STRING,
      allowNull:false
    },
    post_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre:{
      type: DataTypes.ENUM("Macho", "Hembra"),
      allowNull:false
    },
  },{timestamps: false});
};