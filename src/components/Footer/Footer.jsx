import Logo_Footer from "../../asset/LOGO_footer.png"

function Footer() {
    return (
      <footer>
     
       <img
        className="img_logo_footer"
        src= {Logo_Footer}
        alt="LOGO"
      />
      <p className="footer_info">© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
  
  export default Footer
  