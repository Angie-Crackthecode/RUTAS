import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' //Libreria de react instalada
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/RUTAS/"> {/* Envolver la app con el BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
