const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    images: {
      type: DataTypes.STRING(1234),
    },

    points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    post_date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },

    description: {
      type: DataTypes.STRING(1234),
    },
    // Indumentaria, Accesorios, juguetes, Snacks, Alimento, Otros...
    type: {
      type: DataTypes.ENUM("Perro", "Gato", "Todos"),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, { timestamps: false });
};