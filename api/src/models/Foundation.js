const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('foundation', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    state:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    city:{
      type: DataTypes.STRING,
      allowNull: false
    },
    address:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lat:{
      type: DataTypes.STRING
    },
    lng:{
      type: DataTypes.STRING
    },
    telephone_number:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      unique: true,
    },
    instagram:{
      type: DataTypes.STRING
    },
    website:{
      type: DataTypes.STRING
    },
    alias: {
      type: DataTypes.STRING,
      unique: true
    },
    CBU: {
      type: DataTypes.STRING,
      unique: true
    },
    bank: {
      type: DataTypes.STRING
    },
    status:{
      type: DataTypes.ENUM("Activa", "Inactiva"),
      defaultValue: "Activa"
    },
    images:{
      type: DataTypes.ARRAY(DataTypes.STRING(1234)),
    }
  },{
    timestamps: false,
  });
};
