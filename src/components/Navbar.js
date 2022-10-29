import { NavLink } from "react-router-dom";


import Logo from "../design/logo.svg";


function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="navbar__img" />
      </NavLink>
      <div className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar__links--active" : "navbar__links--inactive"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "navbar__links--active" : "navbar__links--inactive"
          }
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;