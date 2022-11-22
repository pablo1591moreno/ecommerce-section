import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, marca, precio, imagen }) => {


    //ESTRUCTURA DE ITEMAS DE LA PAGINA PRINCIPALES 
    return (

        <div className="productosIndividuales">

            <Link to={`/itemDetail/${id}`}>
                <img src={imagen} alt={nombre} />
            </Link>

            <div className='textoProductos'>
                <h1>{nombre}</h1>
                <p>Marca: {marca}</p>
                <p>${precio}</p>
            </div>

        </div>

    )
}

export default Item
