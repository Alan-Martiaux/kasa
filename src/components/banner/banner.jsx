function Banner({ image, text }) {
  return (
    <div className="banner">
      <img className="img_banner" src={image} alt="Banniere" />
      {text && <p className="banner_txt">{text}</p>}
    </div>
  );
}

export default Banner;
