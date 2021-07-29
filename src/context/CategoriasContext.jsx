import react, { createContext, useState } from 'react'

// crear context 1
export const CategoriaContext = createContext()

// Provider de donde saldran los state y funciones

const CategoriaProvider = (props) => {
    // Crear Sate del context
    const [saludo, setSaludo] = useState('Hola LJPS')
    return(
        // Crea Referencia del Context definido y aceder a la propiedad de provideer
        // En el value das el acceso al recurso para ser utilizado en este caso al sate
        <CategoriaContext.Provider value={{saludo}}>
            {props.children}
        </CategoriaContext.Provider>
    )

}
// lo exportas para hacerlo disponible en todos los componentes
export default CategoriaProvider

