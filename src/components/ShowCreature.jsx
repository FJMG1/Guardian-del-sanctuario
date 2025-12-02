import { getCreatures } from "../services/apiService";
import React, {useState, useEffect} from "react";

const ShowCreature =()=>{
    const[creatures, setCreatures]= useState([]);
    
    useEffect(()=>{
        getCreatures()
        .then(creatures=>{
            setCreatures(creatures);
        })
        .catch(error=>{
            console.error("Error fetching posts:",error);
        });
    },[]);

    let happinessState ="";
    function iconHappiness(creature){
    if (creature.happiness<30){
                    return happinessState="😡";
                }else if(creature.happiness>=30 && creature.happiness<=70){
                    return happinessState="😐";
               }else{
                   return happinessState="😄";
               }
            }
    
    return(
        <ul>
        {creatures.map(creature=>(
            <li key={creature.id}>
                <p>Nombre: <strong>{creature.name}</strong>({creature.species}). 
                Felicidad: {creature.happiness} 
                {iconHappiness(creature)}</p>
                <button>Alimentar</button>
                <button>Jugar</button>
                <button>Liberar</button>
            </li>
        
        ))}
        </ul>
    )
};
export default ShowCreature;