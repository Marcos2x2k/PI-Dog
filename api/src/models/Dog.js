const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Dog = sequelize.define('Dog', {    
    id:{
      primaryKey: true,
      type: DataTypes.UUID, //me permite crear un valor unico de letras y numeros que no se repite y no choque con mi table
      defaultValue: DataTypes.UUIDV4(),
      allowNull: false,      
    },
    img:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightmin:{
      type: DataTypes.STRING,
      allowNull: false,
    },    
    heightmax:{
      type: DataTypes.STRING,
      allowNull: false,
    },    
    // weight es altura
    weight:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lifespan:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    origin:{
      type: DataTypes.STRING,
    },
     // me permite saber si esta en la base de datos el dato que llamo
    dogsdb:{   
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },  
  },{timestamps:true} 
  );
  return Dog;
};
