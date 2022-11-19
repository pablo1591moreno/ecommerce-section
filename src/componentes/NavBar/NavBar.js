import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import snake from '../NavBar/Img/snake.png'
import { NavLink } from 'react-router-dom'

const Barra = () => {

    return (

        <nav className="nav">

            <div className="logo">
                <img src={snake} width={"130px"} alt="Logo" />
            </div>

            <div>
                <div className="mainList" id="mainListDiv">


                    <ul>
                        <NavLink to='/'><li>Inicio</li></NavLink>
                        <NavLink to='/productos/zapatillas'><li>Zapatillas</li></NavLink>
                        <NavLink to='/productos/remeras'><li>Remaras</li></NavLink>
                        <NavLink to='/productos/pantalones'><li>Pantalones</li></NavLink>
                        <NavLink to='/contacto'><li>Contacto</li></NavLink>

                    </ul>

                </div>

                <CartWidget/>
                

            </div>

        </nav>
    );
};


export default Barra;