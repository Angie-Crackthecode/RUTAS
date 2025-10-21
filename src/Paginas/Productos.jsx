// Productos.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// Importa la lista de productos desde el archivo 'productos.js'
import { productosOficina } from '../assets/productos';
import { useTheme }  from "../Context/ThemeContext";

export function Productos(){
    const {theme} = useTheme();
    return(
        <div className={theme === "dark" ? "min-h-dvh bg-gray-900 text-white" : "min-h-dvh bg-white text-gray-900"}>
            <h1 className="text-3xl font-bold text-blue-500/60 my-[200px] hover:text-violet-600">Catálogo de Productos de Oficina 🏢</h1>
            {/* Contenedor principal con estilos básicos para la cuadrícula */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              gap: '20px', // Espacio entre tarjetas
              padding: '20px'
            }}>
                
                {/* Usamos .map() para iterar sobre el array de productos y
                  generar un bloque HTML (la "tarjeta") por cada uno.
                */}
                {productosOficina.map(producto => (
                    <div 
                        key={producto.id} // Clave única: ESENCIAL para listas en React
                        style={{ 
                          border: '1px solid #ddd', 
                          padding: '15px', 
                          borderRadius: '8px', 
                          maxWidth: '300px',
                          boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
                        }}
                    >
                      {/* La imagen del producto */}
                      <img 
                        // Asumiendo que las imágenes están en la carpeta pública
                        src={`/images/${producto.imagen}`} 
                        alt={producto.nombre} 
                        style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '10px' }}
                      />
                      
                      {/* Información del producto */}
                      <h3>{producto.nombre}</h3>
                      <p style={{ fontSize: '0.9em', color: '#555' }}>
                        {producto.descripcion}
                      </p>
                      
                      {/* Precio Formateado */}
                      <p>
                        <strong>Precio:</strong> ${producto.precio.toFixed(2)}
                      </p> 
                      
                      <button style={{ 
                        backgroundColor: '#007bff', 
                        color: 'white', 
                        padding: '10px 15px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        width: '100%'
                      }}>
                        Añadir al carrito
                        <Link to={`/productos/${producto.id}`} className='btn primary'>Ver detalles</Link>
                      </button>
                    </div>
                ))}
                
            </div>
        </div>
    )
}