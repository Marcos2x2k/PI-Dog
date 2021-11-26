const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {    
    id:{
      type: DataTypes.UUID, //me permite crear un valor unico de letras y numeros que no se repite yno choque con mi table
      defaulValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    heightmax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    weight:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lifespan:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    DogsBD: {    // me permite saber si esta en la base de datos el dato que llamo
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaulValue: true,
    }   
  });
};
