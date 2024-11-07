import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

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
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item pt-2">
                <NavLink className={({ isActive }) => (isActive ? "active me-4" : "me-4")} to="/">Home</NavLink>
              </li>
              <li className="nav-item pt-2">
                <NavLink className={({ isActive }) => (isActive ? "active me-4" : "me-4")} to="/product">Products</NavLink>
              </li>
              <li className="nav-item">
                <form className="d-flex align-items-center">
                  <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </li>
              <li className="nav-item pt-2 pl-10">
                <NavLink className={({ isActive }) => (isActive ? "active me-4" : "me-4")} to="/login">Login</NavLink>
              </li>
              <li className="nav-item pt-2">
                <NavLink className={({ isActive }) => (isActive ? "active me-4" : "me-4")} to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item pt-2">
                <NavLink className={({ isActive }) => (isActive ? "active me-4" : "me-4")} to="/shoppingCart">
                  <FiShoppingCart />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

