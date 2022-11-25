import './ItemDetail.css'
import Contador from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const ItemDetail = ({ itemDetail, }) => {
    const { sumnaItems } = useContext(CartContext)

    const onAdd = (cantidad) => {
        sumnaItems(itemDetail, cantidad)
    }

    return (

        // ITEMS DE PRODUCTOS DETALLADOS 

        <div className="detalleDeProducto">

            <img src={itemDetail.imagen} alt={itemDetail.nombre} />

            <div className='detalleTextoProductos'>

                <h1 key={itemDetail.id} >{itemDetail.nombre}</h1>
                <h2 className='detalletxt' >${itemDetail.precio}</h2>
                <h2 className='detalletxt' >Stock: {itemDetail.stock} </h2>
                <p>Marca: {itemDetail.marca}</p>
                <p className='detalles' >Detalles: {itemDetail.detalles}</p>
                <Contador stock={itemDetail.stock} initial={1} onAdd={onAdd} />
            </div>

        </div >

    )
}


export default ItemDetail



