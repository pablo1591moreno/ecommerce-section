import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const [productCartList, setProductCartList] = useState([])

    //CANTIDAD DE PRODUCTOS EN CARRITO
    const productosEnCarrito = productCartList.length
    
    //FUNCION PARA SABER SI EL ITEM SE REPITE EN EL CARRITO 
    const isInCart = (itemId) => {
        const itemsIgual = productCartList.some(product => product.id === itemId)
        return itemsIgual;
    }

    //FUNCION PARA SUMAR ITEMS AL CARRITO 
    const sumnaItems = (item, cantidad) => {


        const nuevoProducto = {
            ...item,
            cantidad
        }


        //SI EL PRODUCTPO YA ESTA EN EL CARRITO SOLO SUMAMOS LA CANTIDAD
        if (isInCart(item.id)) {
            let producto = productCartList.findIndex(
                product => product.id === item.id)
            const nuevoArreglo = [...productCartList]
            nuevoArreglo[producto].cantidad = nuevoArreglo[producto].cantidad + cantidad
            setProductCartList(nuevoArreglo)

            //IGUALA LA CANTIDAD AL STOCK ACTUAL PARA NO AGREGAR DE MAS 
            if (nuevoArreglo[producto].cantidad > nuevoArreglo[producto].stock) {
                nuevoArreglo[producto].cantidad = nuevoArreglo[producto].stock
            }

        } else {
            //SUMAMOS PRODUCTO AL CARRITO 
            const nuevoArreglo = [...productCartList]
            nuevoArreglo.push(nuevoProducto)
            setProductCartList(nuevoArreglo)

        }

    }


    //FUNCION QUE NOS ENTREGA EL MONTO TOTAL 
    const getTotal = () => {
        let total = 0
        productCartList.forEach(prod => {
            total = total + prod.precio * prod.cantidad
        })
        return total
    }

    //FUNCION PARA REMOVER EL ITEM SELECCIONADO DEL CARRTIO 
    const removerItem = (itemId) => {
        const nuevoArreglo = productCartList.filter(product => product.id !== itemId)
        setProductCartList(nuevoArreglo)
    }

    // FUNCON PARA REMOVER TODOS LOS ITEMS DEL CARRITO 
    const removerAll = () => {
        setProductCartList([]);
    };


    return (
        <CartContext.Provider value={{ productCartList, sumnaItems, removerItem, isInCart, removerAll, getTotal, productosEnCarrito }}>
            {children}
        </CartContext.Provider>
    )
}