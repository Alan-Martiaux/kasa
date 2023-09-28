import banner_img from "../../asset/banner.png"

function Imgbanner() {
    return (
      <div className="banner">
     
       <img
        className="img_banner"
        src= {banner_img}
        alt="Banniere"
      />
      <p className="banner_txt">Chez vous, partout ailleurs</p>
      </div>
    )
  }
  
  export default Imgbanner