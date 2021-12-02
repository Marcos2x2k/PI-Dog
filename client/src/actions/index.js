import axios from 'axios';

//aca se realiza la coneccion de back con el front
export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs",{});
    return dispatch({
        type: 'GET_DOGS',
        payload: json.data   
    })
}
};
