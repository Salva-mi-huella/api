const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('foundation', {
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
    },
    instagram:{
      type: DataTypes.STRING,
      
    },
    website:{
      type: DataTypes.STRING,
     
    },
    img:{
      type: DataTypes.ARRAY(DataTypes.STRING),
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
