
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand p-1 logo" to="/">Planfiz</NavLink>
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={'({ isActive }) => (isActive ? "active" : "") me-4'} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className={'({ isActive }) => (isActive ? "active" : "") me-4'}to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'({ isActive }) => (isActive ? "active" : "") me-4'} to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'({ isActive }) => (isActive ? "active" : "") me-4'} to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className={'({ isActive }) => (isActive ? "active" : "") me-4'} to="/profile">Profile </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className={'({ isActive }) => (isActive ? "active" : "") me-4'} to="/shoppingCart"> <FiShoppingCart/> </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
