import React, { useContext } from 'react'
// Hacemos referencia al context que vamos a usar
import { CategoriaContext } from '../context/CategoriasContext'

const Formulario = () => {
    // Cun useContext llamamos al Context que vamos a usar 
    // y desctructurar sus valores del value
    const {saludo} = useContext(CategoriaContext)
    console.log("Este es el state del context", saludo);
    return (
        <form 
            className="col-12"
            action="" 
            method="post"
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
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria" 
                    >
                        <option value="">Seleciona Categoria</option>
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
