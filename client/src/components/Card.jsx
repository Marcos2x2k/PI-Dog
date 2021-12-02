//Card solo renderiza lo que yo necesito
import React from "react";

export default function Card({name, img, temperament }){ // {  heightmin, heightmax}){
    console.log (img)
    return (
        <div>
            <h3>{name}</h3>            
            <img src={img} alt="img not found" width = "400px" height="270px"/>
            <h5>{temperament}</h5>
            {/* <h3>{heightmin}</h3>
            <h3>{heightmax}</h3> */}
        </div>
    );
}