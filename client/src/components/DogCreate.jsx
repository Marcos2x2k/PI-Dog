import react from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postDog, getTemperaments} from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import {useState,useEffect} from 'react';

export default function DogCreate(){ 
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments)

    const [input, setInput] = useState({
        name:"",
        height:"",
        weight:"",
        lifespan:"",
        origin:"",
        img:"",
        temperament:[],
    })

    useEffect(()=> {
        dispatch(getTemperaments());
        },[]);    
    return(
        <div>
            <Link to= '/home'><button>Volver</button></Link>
            <h1>Crea tu Perro!</h1>
            <form>
                <div>
                    <label>Raza:</label>
                    <input
                    type="text"
                    value= {input.name}
                    name="name"
                    />
                </div>
                <div>
                    <label>height:</label>
                    <input
                    type="text"
                    value= {input.height}
                    name="height"
                    />
                </div>
                <div>
                    <label>weight:</label>
                    <input
                    type="text"
                    value= {input.weight}
                    name="weight"
                    />
                </div>
                <div>
                    <label>lifespan:</label>
                    <input
                    type="text"
                    value= {input.lifespan}
                    name="lifespan"
                    />
                </div>
                <div>
                    <label>origin:</label>
                    <input
                    type="text"
                    value= {input.origin}
                    name="origin"
                    />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                    type="text"
                    value= {input.img}
                    name="img"
                    />
                </div>

                <div>
                    <label>Temperamento:</label>
                    <input
                    type="text"
                    value= {input.temperament}
                    name="temperament"
                    />
                </div>

            </form>
        </div>
    )
}
