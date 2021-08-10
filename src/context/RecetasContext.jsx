import React, { createContext, useState, useEffect} from 'react'
import axios from 'axios'
export const RecetasContext =  createContext()

const RecetasProvider = (props) => {
    const [recetas, setRecetas] = useState([])
    const [guardarConsulta, setGuardarConsulta] = useState(false)
    const [busquedaReceta, setBusquedaReceta] = useState({
        nombre: '',
        categoria: ''
    })
    const { nombre, categoria } = busquedaReceta
    useEffect(() => {
        if(guardarConsulta){
            const obtenerRecetas = async() => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                const resultado = await axios.get(url)
                console.log(resultado);
                setRecetas(resultado.data.drinks) 
                setGuardarConsulta(false)               
            }
            obtenerRecetas()
        }
    }, [busquedaReceta])
    return (
        <RecetasContext.Provider
            value={{
                setBusquedaReceta,
                setGuardarConsulta
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider