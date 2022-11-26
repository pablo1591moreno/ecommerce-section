import './App.css'
import Barra from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './componentes/Cart/Cart'
import { CartProvider } from './Context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { CartContext } from './Context/CartContext'


function App() {
  return (
    <CartProvider>

      <BrowserRouter>

        <div className='ecommers'>
          <Barra />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
            <Route path='/itemDetail/:productoId' element={<ItemDetailContainer />} />            
            <Route path='/Cart' element={<Cart />} />

          </Routes>

        </div>

      </BrowserRouter>
      
    </CartProvider>
  );
};

export default App;

