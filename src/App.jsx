import React from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import CategotiaProvider from './context/CategoriasContext'

const App = () => {
  return (
    <CategotiaProvider>
      {/* Das acceso a la informacion a todos los componentes hijos desde el Provider */}
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <Formulario/>
        </div>
      </div>
    </CategotiaProvider>
  )
}

export default App
