import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import snake from '../NavBar/Img/snake.png'
import { NavLink } from 'react-router-dom'

const Barra = () => {

    return (

        <nav className="nav">

            <div className="logo">
               <h1 className='snake'>SNAKE</h1>
            </div>

            <div>
                <div className="mainList" id="mainListDiv">

                    <ul>
                        <CartWidget/>                                        
                        <NavLink to='/'><li>Inicio</li></NavLink>
                        <NavLink to='/productos/zapatillas'><li>Zapatillas</li></NavLink>
                        <NavLink to='/productos/remeras'><li>Remaras</li></NavLink>
                        <NavLink to='/productos/pantalones'><li>Pantalones</li></NavLink>
                        <NavLink to='/contacto'><li>Contacto</li></NavLink>

                    </ul>

                </div>

                
                

            </div>

        </nav>
    );
};


export default Barra;