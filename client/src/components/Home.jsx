import React from 'react';
import {useState, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';
import {useDispatch, useSelector} from 'react-redux';// HOOK USAMOS
import {getDogs} from '../actions';

export default function Home (){  
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs)

    useEffect (()=>{
        dispatch(getDogs());

    },[dispatch])

    function handleClick(p){
        p.preventDefault();
        dispatch(getDogs())
    }

    return (
        <div>
            <Link to = '/dogs'>CREAR PERRO</Link> 
            <h1>AGUANTE DOGS</h1>

            <button onClick={p => {handleClick(p)}}>
                Volver a Cargar todos los Perros
            </button>
            <div>
                <select>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                {/* estatus y personaje existente */}
                <select>                    
                    <option value='All'>Todos los Perros</option>
                    <option value='Pordenalf'>Por Orden alfabético</option>
                    <option value='Pesomax'>Por Peso Maximo</option>
                    <option value='Pesomin'>Por Peso Minimo</option>
                </select>
                <select>
                    <option value='All'>Todos</option>
                    <option value='created'>Creados</option>
                    <option value='api'>Existentes</option>
                </select>   
                
                {allDogs?.map ((el) =>{ 
                    return(
                    // paso como props name, image */}
                    // <Fragment key={el.id}>
                    <Fragment className='cartas'>
                        <Link to={"/home/" + el.id}>  
                             <Card name={el.name} img={el.img} temperament={el.temperament} key={el.id}/>                              
                             {/*  heightmin={el.heightmin} heightmax={el.heightmax} key={el.id}/> */}
                        </Link>
                    </Fragment>
                    )} 
                )}
            </div> 
                          
        </div>            
    )    
}
