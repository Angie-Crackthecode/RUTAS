import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' //Libreria de react instalada
import { ThemeProvider } from './Context/ThemeContext.jsx'

import './index.css'
import App from './App.jsx'
import { UserProvider } from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <BrowserRouter basename="/RUTAS/"> {/* Envolver la app con el BrowserRouter */}
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
)
