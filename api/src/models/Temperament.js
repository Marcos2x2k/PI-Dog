const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Temperament', {   

  // sequelize crea id automaticamente cuando no se lo pasamos
  // idtemp:{
  //   type: DataTypes.INTEGER,
  //   allowNull: true, //siempre esta true por defecto agrego por buenas practicas
  //   primaryKey: true,
  //   autoIncrement: true,
  // },

  name:{
    type: DataTypes.STRING,
    allowNull: true,
  },
});
};