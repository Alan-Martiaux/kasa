import Logo from "../../asset/LOGO.png"
import Nav from "../Nav/nav"

function Header() {
    return (
      <header>
     
       <img
        className="img_logo"
        src= {Logo}
        alt="LOGO"
      />
        <Nav/>
      </header>
    )
  }
  
  export default Header
  