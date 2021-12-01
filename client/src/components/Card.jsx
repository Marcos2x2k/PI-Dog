//Card solo renderiza lo que yo necesito
import React from "react";

export default function Card({name, image, temperament,}){ // {  heightmin, heightmax}){
    return (
        <div>
            <h3>{name}</h3>            
            <img source={image} alt="img not found" width = "200px" height="250px"/>
            <h5>{temperament}</h5>
            {/* <h3>{heightmin}</h3> */}
            {/* <h3>{heightmax}</h3> */}
        </div>
    );
}