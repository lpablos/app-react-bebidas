import React, { useContext, useState } from 'react'
// Hacemos referencia al context que vamos a usar
import { CategoriaContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'


const Formulario = () => {
    
    // _____________Todo para el context__________________
    // Cun useContext llamamos al Context que vamos a usar 
    // y desctructurar sus valores del value
    const {categorias} = useContext(CategoriaContext)
    const {setBusquedaReceta, setGuardarConsulta} = useContext(RecetasContext)
    

    // _____________Todo para el formulario_______________
    // El valor selecionado
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    // Funcion para leer los contenidos
    const obtenerDatosReceta = e => {        
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    // Values para los inputs
    const { nombre, categoria } =  busqueda

    return (
        <form 
            className="col-12"
            action="" 
            method="post"
            onSubmit={ e=>{
                e.preventDefault()
                setBusquedaReceta(busqueda)
                setGuardarConsulta(true)
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categorias o Ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    type="text" 
                    name="nombre"
                    className="form-control"
                    placeholder="Buscar por ingrediente"
                    onChange={ obtenerDatosReceta }
                    value={nombre}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria" 
                        onChange={ obtenerDatosReceta }
                        value={categoria}
                    >
                        <option value="">Seleciona Categoria</option>
                        { categorias.map( categoria =>(
                            <option 
                                key={categoria.strCategory} 
                                value={categoria.strCategory}>
                                    {categoria.strCategory}
                            </option>
                        )) }
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        value="Buscar Bebidas" 
                        className="btn btn-block btn-primary"
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario
