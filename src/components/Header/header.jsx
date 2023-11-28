import Logo from "../../asset/LOGO.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="headerContainer">
        <img className="img_logo" src={Logo} alt="LOGO" />
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Accueil
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/propos"
          >
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
