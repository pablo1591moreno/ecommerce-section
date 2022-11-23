//import data from './Data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { db } from '../../Utils/Firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { async } from '@firebase/util'

const ItemListContainer = ({ itemList }) => {

  const [items, setItems] = useState();
  const { categoriaId } = useParams()


  useEffect(() => {
    const getData = async () => {

      //TRAEMOS LOS DATOS DE FIREBASE SEGUN LA CATEGORIA SELECCIONADA 
      const queryRef = categoriaId ? query(collection(db, "data"), where("categoria", "==", categoriaId)) : query(collection(db, "data"))
      const response = await getDocs(queryRef)
      const data = response.docs.map(doc => {
        const nuevoProducto = {
          ...doc.data(),
          id: doc.id
        }
        return nuevoProducto;
      })
      setItems(data);

    }
    getData()

  }, [categoriaId])


  return (
    <div className='contenedorDeProductos'>

     {items ? (<ItemList itemList={items} />) : (<h2 className='cargando'>Cargando...</h2>)}

    </div>
  )

};

export default ItemListContainer


//{items ? (<ItemList itemList={items} />) : (<h2 className='cargando'>Cargando...</h2>)}