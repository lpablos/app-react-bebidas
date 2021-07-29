import react, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

// crear context 1
export const CategoriaContext = createContext()

// Provider de donde saldran los state y funciones

const CategoriaProvider = (props) => {
    // Crear Sate del context
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        const obtenerCategorias = async() => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios.get(url)        
            setCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
     }, [])
    return(
        // Crea Referencia del Context definido y aceder a la propiedad de provideer
        // En el value das el acceso al recurso para ser utilizado en este caso al sate
        <CategoriaContext.Provider value={{categorias}}>
            {props.children}
        </CategoriaContext.Provider>
    )

}
// lo exportas para hacerlo disponible en todos los componentes
export default CategoriaProvider

