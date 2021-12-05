import React from 'react';
import Card from './Card';
import Paginado from './Paginado';

import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';// HOOK USAMOS
import {getDogs, filterDogsByStatus, filterCreated, orderByName} from '../actions';


export default function Home (){  

    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs)
    const [orden, setOrden] = useState(''); // es un estado local q arranca vacio para el Asc y Desc Order
    //defino varios estados locales y difino LAS CARTAS q muestra por pagina
    const [currentPage, setCurrentPage] = useState(1); //defino 2 stados 1 con pagina actual y otro q resetea pagina actual
    const [dogsPerPage, setDogsPerPage] = useState(8); // seteo los perros por pagina, depues usar variable para mostrar por cantidad elegida
    const indexOfLastDog = currentPage * dogsPerPage // aca vale 0 a 7 = 8
    const indexOfFirstDog = indexOfLastDog - dogsPerPage // 0
    
    // currentDogs devuelve un arreglo q entra del 1 al 8
    const currentDogs =  allDogs.slice(indexOfFirstDog, indexOfLastDog)// creo una constante de los perros en la pagina actual y me traigo el array del estado de los Dogs 

    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (()=>{
        dispatch(getDogs());

    },[dispatch])

    function handleClick(p){
        p.preventDefault();
        dispatch(getDogs())
    }

    // esta funcion ejecuta la accion filterDogsByStatus
    function handleFilterStatus(p){
        dispatch(filterDogsByStatus(p.target.value))
    };
    //filtramos los creados en la Bdatos
    function handleFilterCreated(p){
        dispatch(filterCreated(p.target.value))
    };
    // paginado orden asc y desc
    function handleSort(p){
        p.preventDefault();
        dispatch(orderByName(p.target.value)) //despacho la accion
        setCurrentPage(1); //ordenamiento seteado en pagina 1
        setOrden(`Ordenado ${p.target.value}`)  //es un estado local vacio, lo uso para modif estado local y renderize
    };

    return (
        <div>             
            <h1>Bienvenidos a mi Dog-App</h1>

            <button onClick={p => {handleClick(p)}}>
                Volver a Cargar todos los Perros
            </button>
            <button onClick={p => {handleClick(p)}}>
                Anterior
            </button>
            <button onClick={p => {handleClick(p)}}>
                Siguiente
            </button>       
                 
            <div>
                <select onChange={p => handleSort(p)}>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                {/* estatus y personaje existente */}
                <select onChange={p => handleFilterStatus(p)}>                    
                    <option value='All'>Todos los Perros</option>
                    <option value='temperament'>Por Temperamento</option>
                    <option value='heightmin'>Por Peso Maximo</option>
                    <option value='heightmax'>Por Peso Minimo</option>
                </select>
                <select onChange={p => handleFilterCreated(p)}>
                    <option value='All'>Todos</option>
                    <option value='created'>Creados</option>
                    <option value='api'>Existentes</option>
                </select>   
                <div>
                    <Link to = '/'>CREAR PERRO</Link>
                </div>              

                {/* aca defino las props que necesita el paginado */}
                <Paginado
                    dogsPerPage = {dogsPerPage}
                    allDogs={allDogs.length}
                    paginado = {paginado}
                />

                {currentDogs?.map ((el) =>{ 
                    return(
                    // paso como props name, image */}
                    //<Fragment key={el.id}>
                    <Fragment className='cartas'>
                    <div>    
                            <Link to={"/home/" + el.id}>  
                                <Card name={el.name} img={el.img} temperament={el.temperament} key={el.id} height={el.height} height={el.height} />
                            </Link>
                    </div>
                    </Fragment> 
                    );
                })}
            </div>                          
        </div>            
    )    
}
