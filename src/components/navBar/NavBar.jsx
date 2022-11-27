import "./NavBar.css"
import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {
    return(
        <div className="navbar-container">
            <div className="container-logo">
                <img 
                className="logo-navbar"
                src="https://res.cloudinary.com/dnkpcv47m/image/upload/v1669482040/images_g97sph.png" alt="imagen-del-logo" />
            </div>
            <ul className="navbar">
                <li className="navbar-item">Todos</li>
                <li className="navbar-item">Recetados</li>
                <li className="navbar-item">De sol</li>
            </ul>
            <div className="container-cart">
                <CartWidget />
            </div>
        </div>
    )
}

export default Navbar;