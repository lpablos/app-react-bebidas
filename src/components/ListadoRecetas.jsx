import React, { useContext, useState } from 'react'
import Receta from './Receta'
// Hacemos referencia al context que vamos a usar
import { RecetasContext } from '../context/RecetasContext'




const ListadoRecetas = () => {
    // Extraccion de recetas
    const { recetas } = useContext(RecetasContext)
    console.log("Estas son las recetas", recetas);
    return (
        <div className="row mt-5">
            {
                recetas.map( receta => (
                    <Receta 
                        key= {receta.idDrink}
                        receta = {receta}
                    />
                ))
            }
        </div>
    )
}

export default ListadoRecetas
