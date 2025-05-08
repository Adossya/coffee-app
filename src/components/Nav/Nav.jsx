import Logo from "./../../img/logo.svg"
import LogoBlack from "./../../img/logo-black.svg"

import "./index.scss"
import { Link } from "react-router-dom";






const Nav = ({color,pos}) => {
    let clazz = color === 'black' ? '--black' : '';
    let position = pos === 'center' ? ' nav__wrapper--center' : '';
    return (
        <nav className="nav">
            <div className="container">
                <nav className={"nav__wrapper" + clazz + position}>
                    <div className="nav__logo">
                        <img src={color === 'black' ? LogoBlack : Logo} alt="" />
                        <Link to="/" className="nav__link">Coffee house</Link>
                    </div>
                    <div className="nav__our-coffe">
                        <Link to="/ourcoffee" className="nav__link">Our coffee</Link>
                    </div>
                    <div className="nav__pleasure">
                        <Link to="/pleasure" className="nav__link">For your pleasure</Link>
                    </div>
                </nav>
            </div>
        </nav>


    );
}
 
export default Nav;