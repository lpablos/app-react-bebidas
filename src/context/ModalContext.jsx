import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'


// Creat context 
export const ModalContext = createContext();

const ModalProvider = (props) => {
    // Identidad para busqueda de receta
    const [idReceta, setIdReceta] = useState(null)
    const [informacion, setInformacion] = useState({})
    // una vex tenemos la identydad hacemos la llamada aa la api
    useEffect(() => {
        const obtenReceta = async() =>{

            if(!idReceta) return
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const result = await Axios.get(url)            
            setInformacion(result.data.drinks[0])

        }
        obtenReceta()
 
    }, [idReceta])
    return (
        <ModalContext.Provider
            value={{
                informacion,
                setInformacion,
                setIdReceta
            }}
        >
             {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;

