import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const Barra = () => {

    return (

        <nav className="nav">

            <div className="logo">
               <h1 className='snake'>SNAKE</h1>
               <span><CartWidget/></span>  
            </div>

            <div>
                <div className="mainList" id="mainListDiv">

                    <ul>
                        <NavLink to='/productos/zapatillas'><li>Zapatillas</li></NavLink>
                        <NavLink to='/productos/remeras'><li>Remaras</li></NavLink>
                        <NavLink to='/productos/pantalones'><li>Pantalones</li></NavLink>                      
                        <NavLink to='/'><li>todo</li></NavLink>

                    </ul>

                </div>
                
            </div>

        </nav>
    );
};


export default Barra;