import {useParams,Link} from 'react-router-dom'
import { productosOficina } from '../assets/productos';

export function Detalle() {
    const {id} = useParams() // Obtener el ID del producto desde los parámetros de la URL
    const producto = productosOficina.find(produc => produc.id === Number(id)) // Buscar el producto por su ID

    if(!producto){
        return(<div>Producto no existe</div>)
    }

    //Comprobación si existe el producto 
    return(
        <div>
            {
                <>
                <><Link to="/productos">Volver al catálogo</Link></>
                <h1 id="detalle-title">{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                </>
            }
        </div>
    )
}