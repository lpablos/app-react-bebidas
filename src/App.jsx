import React from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoRecetas from './components/ListadoRecetas'
import CategotiaProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'

const App = () => {
  return (
    <CategotiaProvider>
      <RecetasProvider>
        <ModalProvider>
          {/* Das acceso a la informacion a todos los componentes hijos desde el Provider */}
          <Header/>
          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>
            <ListadoRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategotiaProvider>
  )
}

export default App
