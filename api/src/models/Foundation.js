const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Foundation', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false,
    },  
    telephone_number:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    instagram:{
      type: DataTypes.STRING,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol_admin:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  },{
    timestamps: false,
  });
};
