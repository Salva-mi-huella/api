const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('news', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(30000),
    },
    campaign:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    foundationsImage:{
      type: DataTypes.STRING,
      allowNull: false
    },
    post_date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING(1234)),
    },
  },{
    timestamps: false,
  });
};
