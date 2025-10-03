import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './paginas/Inicio'
import { Nosotros } from './paginas/Nosotros'
import { Productos } from './Paginas/Productos'
import { Detalle } from './Paginas/Detalle'
import {Navbar} from './Componentes/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/productos/:id' element={<Detalle/>}></Route>
      </Routes>
      
    </>
  )
}

export default App