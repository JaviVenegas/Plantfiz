
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "linkActivo" : "linkInactivo");
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Planfiz</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={setActiveClass} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className={setActiveClass} to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={setActiveClass} to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={setActiveClass} to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className={setActiveClass} to="/profile">Profile </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className={setActiveClass} to="/shoppingCart"> <FiShoppingCart/> </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
