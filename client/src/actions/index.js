import axios from 'axios';

//aca se realiza la coneccion de back con el front
export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs",{});
    return dispatch({
        type: 'GET_DOGS',
        payload: json.data   
    })
    }};
    export function getNameDogs(name){
    return async function (dispatch){
        try{
        var json = await axios.get("http://localhost:3001/dogs?name=" + name);
        return dispatch({
            type: "GET_NAME_DOGS",
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }}
    }
    //despacha ruta del back con los temperamentos
    export function getTemperaments(){
        return async function (dispatch){
            var info = await axios("http://localhost:3001/temperament", {

            });
            return dispatch({type: "GET_TEMPERAMENTS", payload: info.data});
        };
    }

    export function postDog(payload){
        return async function (dispatch){
            const response = await axios.post("http://localhost:3001/temperament", payload)
            console.log (response);
            return response
        }
    }

// la logica siempre hacerla en reducer o components
export function filterDogsByStatus(payload){
    console.log (payload)
    return {
        type: 'FILTER_BY_STATUS',
        payload
    }
};
//hacemos la accion de filtrar por API o Bdatos // payload trae el value de la accion q elija
export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
};
export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}