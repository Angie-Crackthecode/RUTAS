import { useParams, Link } from "react-router-dom";
import { productosOficina } from "../assets/productos";
import { useTheme }  from "../Context/ThemeContext";

export function Detalle(){
    const {id} = useParams()
    const producto = productosOficina.find(p => p.id === Number(id))
    const {theme} = useTheme();
   
    //Comprobacion si existe el produto
    if(!producto){
        return(<div>Producto no existe</div>)
    }
    
    return(
        <div className={theme === "dark" ? "min-h-dvh bg-gray-900 text-white" : "min-h-dvh bg-white text-gray-900"}>
            {
                <>
                <h1 id="detalle-title">{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                <Link to ="/productos">Regresar Productos</Link>
                </>
            }
        </div>
    )
}