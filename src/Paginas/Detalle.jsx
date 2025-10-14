import { useParams, Link } from "react-router-dom";
import { productosOficina } from "../assets/productos";

export function Detalle(){
    const {id} = useParams()
    const producto = productosOficina.find(p => p.id === Number(id))
   
    //Comprobacion si existe el produto
    if(!producto){
        return(<div>Producto no existe</div>)
    }
    
    return(
        <div>
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