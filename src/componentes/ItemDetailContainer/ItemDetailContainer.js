import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Utils/Firebase'
import { getDoc, doc } from 'firebase/firestore'
import { async } from '@firebase/util'


const ItemDetailContainer = ({ itemDetail }) => {

  const { productoId } = useParams()
  const [itemDetalle, setItemDetalle] = useState([]);


  //TRAEMOS LA INFORMACION DE LA BASE DE DATOS X EL ID CORRESPONDIENTE 
  useEffect(() => {
    
    const getData = async () => {

      const query = doc(db, 'data', productoId)
      const response = await getDoc(query);
      const nuevoProducto = {
        ...response.data(),
        id: response.id
      }
      setItemDetalle(nuevoProducto)
    }
    getData()

  }, [productoId])



  return (

    <div className='contenedorDetalles'>

      <ItemDetail itemDetail={itemDetalle} />

    </div>

  )

}

export default ItemDetailContainer