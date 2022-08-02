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
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    picture: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    dni: {
      type: DataTypes.INTEGER,
      unique: true
    },
    birthday: {
      type: DataTypes.DATEONLY
    },
    telephone_number: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    transit: {
      type: DataTypes.ENUM("Si", "No"),
      defaultValue: "No"
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    favs: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 500
    }
  }, {
    timestamps: false,
  });
};
