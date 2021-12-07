import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getNameDogs} from '../actions';

export default function SearchBar(){
     // aca usamos Hook
    const dispatch =useDispatch()
    const [name, setName] = useState("")

    function handInputChange(p){
        p.preventDefault()
        setName(p.target.value)
        console.log(name)
    }
    function handleSubmit(p){
        p.preventDefault()
        dispatch(getNameDogs(name))
    }

    return (
        <div>
            <input
            type = 'text'
            placeholder = "Buscar Perro..."
            onChange={(p) => handInputChange(p)}
            />
            <button type='submit' onClick={(p)=> handleSubmit(p)}>Buscar</button>
        </div>
    )

}