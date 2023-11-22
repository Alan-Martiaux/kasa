import Logo_Footer from "../../asset/LOGO_footer.png";

function Footer() {
  return (
    <footer>
      <img className="img_logo_footer" src={Logo_Footer} alt="LOGO" />
      <p className="footer_info__desktop">© 2020 Kasa. All rights reserved</p>
      <span className="footer_info__mobile">
        <p>© 2020 Kasa. All</p>
        <p>rights reserved</p>
      </span>
    </footer>
  );
}

export default Footer;
