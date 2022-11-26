import './CartWidget.css'
import carritoCompra from '../CartWidget/Img/carritoCompra.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {
    const { productosEnCarrito } = useContext(CartContext)


    //BOTON CARRITO QUE REDIRECCIONA A PAGINA DE ITEMAS AGEGADOS AL CARRITO  

    return (

        <Link to='/Cart'>
            <div className='cajaCarrito' >
                <button className='botonCarrito' type="button">
                    <img src={carritoCompra} width={"35px"} alt="Carrito" />
                    <span className={productosEnCarrito > 0 ? "unidadesEnCarrito" : "CarritoCero"}>{productosEnCarrito}</span>
                </button>
            </div>
        </Link>

    )
};

export default CartWidget; 