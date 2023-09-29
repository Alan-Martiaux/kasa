import Logo from "../../asset/LOGO.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img className="img_logo" src={Logo} alt="LOGO" />
      <nav className="nav_bar">
        <Link to="/">Accueil</Link>
        <Link to="/propos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
