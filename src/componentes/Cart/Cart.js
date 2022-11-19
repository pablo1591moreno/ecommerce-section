import './Cart.css'
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { NavLink } from 'react-router-dom'

import { db } from '../../Utils/Firebase'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

const Cart = () => {
    //PROPS PARA REMOVER CADA ITEM O TODOS LOS ITEMS 
    const { productCartList, removerItem, removerAll, getTotal } = useContext(CartContext)
    const [idOrden, setIdOrden] = useState("")

    //ACUALIZA EL STOCK DE LA BASE DE DATOS AL REALIZAR CONFIRMAR LA COMPRA
    const actualizaStock = () => productCartList.map(actuliza => {
        const stock = doc(db, "data", actuliza.id);
        updateDoc(stock, {
            'stock': actuliza.stock - actuliza.cantidad,
        });
    })

    const enviarFormulario = (event) => {
        //PREVENIMOS EL "REFRESH" DE LA PAGINA
        event.preventDefault()

        //RECOLECTAMOS LA INFORMACION DEL FORMULARIO
        const orden = {

            comprador: {
                nombre: event.target[0].value,
                telefono: event.target[1].value,
                email: event.target[2].value
            },

            //RECOLECTAMOS LOS PRODUCTOS COMPRADOS 
            items: productCartList,
            total: getTotal()

        }

        //CREAMOS LA COLECCION ("orden") Y LA GUARDAMOS EN LA BASE DE DATOS ("db")--------SI YA EXISTE ("orden") METE LOS DATOS AHI, SI NO EXISTE LA CREA

        const queryRef = collection(db, "orden");
        addDoc(queryRef, orden).then(response => {
            console.log("respuesta", response)
            setIdOrden(response.id)
            removerAll()
            actualizaStock()
        })

    }


    // ESTRUCTURA DE LOS ITEMS DEL CARRITO 

    return (
        <div>

            {idOrden ?  <h1 className='compraExitosa'>Compra Exitosa ID : {idOrden}</h1>
                :

                <div>
                    {productCartList.map(item => (

                        <div className='productoComprado' key={item.id}>
                            <div className='infoProductoComprado'>
                                <h1>{item.nombre}</h1>
                                <h3>Cantidad - {item.cantidad} / Precio x unidad ${item.precio}</h3>
                                <h4>Detalles : {item.detalles} </h4>

                            </div>
                            <h3 className='precioTotal' >${item.cantidad * item.precio}</h3>
                            <button className='eliminarProducto' onClick={() => removerItem(item.id)}>X</button>
                        </div>

                    ))}

                    {/* SI EL CARRITO ESTA VACIO MUESTRA LINK AL INICIO  */}

                    {productCartList.length > 0 ?
                        <div>

                            <h1 className='totalFinal'>Total ${getTotal()}</h1>
                            <div className='button'>
                                <button className='eliminarTodo' onClick={removerAll} >Eliminar Todo</button>
                            </div>
                            <hr></hr>
                            <div className='contenedorFromulario' >
                                <form className='formulario' onSubmit={enviarFormulario}  >
                                    <label>Nombre:</label>
                                    <input type="text" />
                                    <label>Telefono:</label>
                                    <input type="text" />
                                    <label>Email:</label>
                                    <input type="email" />
                                    <button className='botonFormulario' type="submit" >Enviar</button>
                                </form>
                            </div>
                        </div> :

                        <div className="carritoBacio">
                            <h1>CARRITO VACIO!!!</h1>
                            <NavLink to='/'><h2>Ver productos</h2></NavLink>
                        </div>
                    }
                </div>
            }


        </div>
    )

}
export default Cart
