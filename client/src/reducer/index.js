
const initialState = {
        dogs:[],
        allDogs:[]
}

function rootReducer (state = initialState, action){
        switch(action.type){
            case 'GET_DOGS':
                return{
                    ...state, // guardamos el estado anterior por costumbre
                    dogs: action.payload,
                    allDogs: action.payload
                }                
            case 'FILTER_BY_STATUS': 
                const allDogs = state.allDogs
                const statusFiltered = action.payload === 'All' ? allDogs : allDogs.filter(el => el.status === action.payload)
                return{
                        ...state,
                        dogs: statusFiltered
                }
                // ? es entonces
                // : es sino
            case 'FILTER_CREATED':
                const allDog2 = state.allDogs
                const createFilter = action.payload === 'created' ? state.allDogs.filter(el => el.dogsdb) : state.allDogs.filter(el => !el.dogsdb)
                return{
                   ...state,
                   dogs: action.payload === 'All' ? state.allDogs : createFilter // uso ternario
                }
                case 'ORDER_BY_NAME':
                    let sortedArr = action.payload === 'asc' ?
                    state.dogs.sort(function(a,b){
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.dogs.sort(function(a,b){
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (a.name < b.name) {
                            return 1;
                        }
                        return 0;
                    })        
                    
                    return{
                       ...state,
                       dogs: sortedArr // paso al estado el ordenamiento
                    }

                default:
                        return state;
        }
}
export default rootReducer;