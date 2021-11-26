//podria vincular con fetch pero me resulta mas facil Axios
const { Router } = require('express');
const axios = require('axios'); // aca importo axios despues del npm i axios

// aca defino models y me los traigo de la BD
const { Dog, Temperament } = require('../db.js');
const {DB_API} = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const dogsRouter = require('./dogs.js');
// const temperamentsRouter = require('./temperaments.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//creo funciones controladores para despues invocarlas y uso funcion asincrona porque no se cuanto
// demore la respuesta, y aviso q tiene q esperar la resp para cargar la info, siempre conviene
//trabajar de manera asincrona
    const getApiInfo = async () => {
        const apiHtml = await axios.get('https://api.thedogapi.com/v1/breeds', {
            headers: {'x-api-key': `${DB_API}`}});           
        const apiInfo = apiHtml.data.map(p => { //creo un objeto q mapee y devuelva solo lo q necesito para mi app de la Api
        return {
            id: p.id,
            name: p.name,            
            width: p.width,
            //heightmax: p.height.metric,
            //heightmin: p.height.metric,
            height: p.height.metric,
            lifeSpan: p.life_span,
            //origin: p.origin,
            temperament: p.temperament,
            img: p.image.url, 
            // la imagen viene en este formato
            //"reference_image_id":"BJa4kxc4X","image":{"id":"BJa4kxc4X","width":1600,"height":1199,"url":"https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"}                        
        };    
    });
    return apiInfo;
    };


// traigo la info de la base de datos
// no llamo id porque ya me lo trae automaticamente
const getDbInfo = async () => {
    const dbInfo = await Dog.findAll ({  //traigo la info de mi base de datos
    include: {  // ademas de todo traeme temperament 
      model: Temperament,      
      attributes: ['name'],
      through: { // va siempre en las llamadas y comprueba que llame atributo name en este caso 
          attributes: [],
      },   
    }
    })    
    return dbInfo
};

// creo una funcion que me traiga todo
const getAllDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

//defino el middleware

router.get ('/dogs', async (req, res) =>{
    const name = req.query.name   //req query busca si hay un name por query
    let dogsAll = await getAllDogs();
    if (name){
        let dogsName = await dogsAll.filter(p => p.name.toLowerCase().includes(name.toLowerCase())) //tolower case hace que la busqueda en minus o mayusc no afecte al resultado de la busqueda
        dogsName.length ? //aca pregunta si hay algo
        res.status(200).send(dogsName) :
        res.status(404).send('No existe la Raza que esta buscando.');
    }else {
        res.status(200).send(dogsAll)
    }    
});

router.get('/temperament', async (req, res) => {
    const apiHtml = await axios.get('https://api.thedogapi.com/v1/breeds', {
      headers: {'x-api-key': `${DB_API}`}});      
    const temperament = apiHtml.data.map(p => p.temperament)

    const temperaments = temperament.toString().trim().split(/\s*,\s*/);
    const splittemperament = temperaments.filter(p => p.length > 0);
    splittemperament.forEach(p => {
        Temperament.findOrCreate({
            where: {name: p}
        })
    });
    const allTemperament = await Temperament.findAll();
    res.send(allTemperament);
})

module.exports = router;






