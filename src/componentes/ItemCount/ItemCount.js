import './ItemCount.css'
import { useState } from 'react'

const Contador = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    //FUNCION DE SUMA DE PRODUCTOS RESPETANDO EL STOCK DEL PRODUCTO 
    const suma = () => {
        if (contador < stock) {
            setContador(contador + 1);

        }
         else {
            setContador(1)
        }

    }

    //FUNCION DE RESTA DE PRODUCTOS RESPETANDO EL STOCK DEL PRODUCTO 
    const resta = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            setContador(1)
        }
    }


    return (

        // CONTADOR DE ITEMS Y AGREGA AL CARRITO
        // SI EL STOCK SE ENCUENTRA EN 0 QUITA LA OPCION DE AGREGAR AL CARRITO 
        <div className='container'>

            {stock > 0 ?

                <div className='contenedorContador'>
                    <div className='sumaResta'>

                        <button type='button' className='botonResta' onClick={resta} >-</button>
                        <h2 className='contador'> {contador} </h2>
                        <button type='button' className='botonSuma' onClick={suma}>+</button>
                    </div>
                    <div className='boton'>

                        <button type='button' className='agregarCarrito'
                            onClick={() => onAdd(contador)}>Agregar al carrito</button>

                    </div>
                </div>

                :
                <h1> SIN STOCK </h1>
            }
        </div >
    )
}

export default Contador 